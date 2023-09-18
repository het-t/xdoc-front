<script setup>
import { onMounted, reactive, computed, ref, nextTick} from 'vue';
import BlockRender from './BlockRender.vue';
import BaseMenu from './BaseMenu.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const keyDownState = reactive({
    key: '',
    blockId: '',
    block: '',
    menuVisibility: false,
    menuPos: {x: '', y: '', spaceAdjustment: ''}
})

const state = reactive({
    overlay: {
        propertyId: '',
        height: 0,
        width: 0,
        top: 0,
        left: 0,
        blockId: '',
        visibility: false
    }
})

const store = useStore()
const route = useRoute()
const overlayItem = ref('')

const pageId = computed(function () {
    return route.params.pageId
})

onMounted(() => {
    fetchPageData()
})

const pageDataInStore = computed(function () {
    return store.getters['blocks/getBlockData'](pageId.value)
})

const childBlocksInStore = computed(function () {
    return store.getters['trees/getNode'](pageId.value, pageId.value)?.children
})

const overlayRequestInfoInStore = computed(function () {
    return store.getters['getOverlayRequestData']
})

function fetchPageData() {
    store.dispatch('blocks/fetchBlockData', {
        blockId: pageId.value
    })
    .then((page) => {
        store.commit('trees/setNewTreeIfNotInStore', {
            treeId: pageId.value
        })
        return page
    })
    .then((page) => {
        for (let i = 0; i!==page.children.length; i++) {
            store.dispatch('trees/addChild', {
                treeId: pageId.value,
                parentBlockId: pageId.value,
                childBlockId: page.children[i]
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function handleKeyDownSlash(fromStart = true) {
    let y;
    const selection = window.getSelection()
    if (selection.rangeCount !== 0) {
      const range = selection.getRangeAt(0).cloneRange();
      range.collapse(fromStart);
      const rect = range.getClientRects()[0];
      if (rect) {
        keyDownState.menuPos.spaceAdjustment = "+ 1.5"
        keyDownState.menuPos.x = rect.left;
        y = rect.top;
      }
    }

    const keyPressPosition = keyDownState.block.getBoundingClientRect().bottom;
    const menuHeight = 100;
    const viewportHeight = window.innerHeight;

    if (viewportHeight - keyPressPosition < menuHeight + 100) {
        keyDownState.menuPos.spaceAdjustment = "- 0.5"
        y -= menuHeight
    }

    keyDownState.menuPos.y = y
    keyDownState.menuVisibility = true
}

function handleKeyDownEnter() {
    appendNewBlock('paragraph')
}

//append block to parentBlock
function appendNewBlock(selectedBlockType) {
    const enterKeyDownAtBlockId = keyDownState.blockId
    
    keyDownState.block = keyDownState.block
    .parentNode
    .closest('[contenteditable="true"]:not([data-contenteditable-leaf="true"])')

    keyDownState.blockId = keyDownState.block
    .getAttribute('data-block-id')

    let blockData;
    switch(selectedBlockType) {
        case "paragraph": {
            // blockData = new Paragraph({})
            break
        }
        // case "checkbox": {
        //     blockData = new CheckBox({})
        //     break
        // }
        // case "list": {
        //     blockData = new List({})
        //     break
        // }
    }

    store.dispatch('trees/addNewChild', {
        treeId: pageId.value,
        parentBlockId: keyDownState.blockId,
        childBlockId: blockData.id,
        additionalData: {
            appendBelow: enterKeyDownAtBlockId
        },
        setFocusOnCreatedBlock: true
    })

    store.commit('blocks/setBlockData', {
        data: blockData,
    })
    
    keyDownState.menuVisibility = false
    keyDownState.blockId = ''
    keyDownState.block = ''
}

function handleKeyDown(e) {
    if (e.code === 'Slash' || e.code === 'Enter') {
        const selection = window.getSelection();    

        keyDownState.block = selection
        .focusNode
        .parentNode
        .closest('[contenteditable="true"]')

        keyDownState.blockId = keyDownState.block
        .getAttribute('data-block-id')
    }

    if (e.ctrlKey === false) {
        if (e.code === 'Slash' && e.shiftKey === false) { 
            keyDownState.key = 'Slash'
            handleKeyDownSlash()
        }
        else if (e.code === 'Enter' && e.shiftKey === false) {
            e.preventDefault()
            keyDownState.menuVisibility = false
            keyDownState.key = 'Enter'
            handleKeyDownEnter()
        }
    }
} 

function handleClickOnPropertyValue(e, propertyValue) {
    document.body.style.position = 'fixed'

    const {x, y, height, width} = e.currentTarget.getBoundingClientRect()

    state.overlay.left = x
    state.overlay.top = y
    state.overlay.height = height
    state.overlay.width = width
    store.commit('setOverlayVisibility', true)
    store.commit('setOverlayPropertyValue', propertyValue)

    store.commit('setOverlayRequestData', {
        requesterBlockId: pageId.value,
        reason: 'page_property'
    })

    state.overlay.visibility = true

    nextTick(() => {
        const range = document.createRange();
        range.selectNodeContents(overlayItem.value);
        range.collapse(false);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        overlayItem.value.focus()
    })
}
</script>

<template>
    <div class="xdoc-scroller vertical" style="z-index: 1; display: flex; flex-direction: column; flex-grow: 1; position: relative; align-items: center; margin-right: 0; margin-bottom: 0; overflow: hidden auto;">
        <div
            data-contenteditable-root="true" 
            contenteditable="true"
            style="display: flex; flex-direction: column;"
        >
            <!-- page-information -->
            <div
                style="display: flex; width: 100%; flex-shrink: 1; min-width: 0; max-width: 100%;"
            >
                <div style="width: 100%;">
                    <!-- page-title -->
                    <div style="font-weight: 700; width: 100%;">
                        <h1 style="font-weight: inherit;">
                            First Page
                        </h1>
                    </div>
    
                    <!-- page-properties -->
                    <div 
                        role="table" 
                        aria-label="Page properties" 
                        style="margin: 0;"
                    >
                        <div 
                            contenteditable="false"
                            style="display: flex; flex-direction: column;"
                            v-if="pageDataInStore?.properties"
                        >
                            <div 
                                v-for="(property) in pageDataInStore.properties"
                                :key="property.id"
                                role="row" 
                                style="display: flex; width: 100%; align-items: center;"
                            >
                                <div
                                    style="display: flex; height: 34px; width: 160px; align-items: center; flex: 0 0 auto;"
                                >
                                    {{ property.name }}
                                </div>
    
                                <div
                                    role="cell"
                                    style="display: flex; margin-left: 4px; height: 100%; width: 100%; flex-auto: 1 1 auto; flex-direction: column; min-width: 0;"
                                >
                                    <div 
                                        role="button"
    
                                        @click.stop="handleClickOnPropertyValue($event, property[property.name].plain_text)"
                                    >
                                        {{ property[property.name].plain_text === '' ? 'Empty' : property[property.name].plain_text }}
                                    </div>
    
                                </div>
                            </div>    
    
                            <!-- overlay handling -->
                            <Teleport to="#overlay">
    
                                <!-- page-property overlay -->
                                <div
                                    v-if="overlayRequestInfoInStore?.requesterBlockId === pageId && overlayRequestInfoInStore?.reason === 'page_property'"
                                    :style="`top: ${state.overlay.top}px; left: ${state.overlay.left-9}px; width: ${state.overlay.width}px; min-height: ${state.overlay.height}px`" 
                                    style="border-radius: 3px; padding: 6px 9px; box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px; background-color: #fff; position: absolute;"
                                    contenteditable="true"
                                    ref="overlayItem"
                                >
                                    {{ store.getters['getOverlayPropertyValue'] }}
                                </div>
                            </Teleport>
                        </div>
                        
                    </div>
                </div>
            </div>    
    
            <!-- page-content as blocks -->
            <div 
                contenteditable="true"
                :data-block-id="pageId"
                @keydown="handleKeyDown"
                style="width: 100%; height: fit-content;"
            >
                <div>
                    <template v-if="childBlocksInStore?.length && childBlocksInStore[0] !== null">
                        <template v-for="block in childBlocksInStore" :key="block.id">
                            <BlockRender
                                :treeId="pageId"
                                :blockId="block.id.toString()"
                            ></BlockRender>
                        </template>
                    </template>
        
        
                    <div 
                        v-else
                        contenteditable="true"
                        placeholder='Press "/" for commands'
                    >
                    </div>
        
                    <BaseMenu
                        v-show="keyDownState.menuVisibility"
                        :pos="keyDownState.menuPos"
                        @handleSelection="appendNewBlock"
                    ></BaseMenu>
                </div>
            </div>
        </div>
    </div>
        
</template>