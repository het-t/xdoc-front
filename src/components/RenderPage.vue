<script setup>
import { onMounted, reactive, computed, ref, nextTick, watch, defineProps} from 'vue';
import BlockRender from './BlockRender.vue';
import BaseMenu from './BaseMenu.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const store = useStore()
const route = useRoute()
const router = useRouter()

const overlayItem = ref('')

const props = defineProps({
    pageIdFrom: {
        type: String,
        default: 'params'
    }
})

if (props.pageIdFrom === "query") {
    watch(
        () => route.query.p,
        (newValue, oldValue) => {
            if (newValue !== oldValue && newValue) {
                router.push({ 
                    name: 'render-page', 
                    query: {
                        p: newValue,
                        pm: 'c'
                    }
                })
            }
        }
    )
}
else {
    watch(
        () => route.params.pageId,
        (newValue, oldValue) => {
            if (newValue !== oldValue && newValue) {
                router.push({
                    name: 'render-page',
                    params: {
                        pageId: newValue
                    }
                })
            }
        }
    )
}

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

const pageId = computed(function () {
    return route.params.pageId
})

const getPeekMode = computed(function () {
    return route.query.pm
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
    <div 
        class="xdoc-scroller vertical" 
        style="z-index: 1; display: flex; flex-direction: column; flex-grow: 1; position: relative; margin-right: 0; margin-bottom: 0; overflow: hidden auto;"
    >
        <div style="position: absolute; top: 0; left: 0;">
            <div></div>
        </div>

        <div
            data-contenteditable-root="true" 
            contenteditable="true"
            class="whenContentEditable"
            style="display: flex; flex-direction: column; position: relative; align-items: center; caret-color: rgb(55, 53, 47); width: 100%;"
        >
            <span style="height: 1px; width: 1px; caret-color: transparent;"></span>

            <div class="layout"
                :class="getPeekMode === 'c' ? 'layout-center-peek' : ''"
                style="padding-bottom: 80px; transform: translateX(0px);"
            >
                <div class="layout-full">
                    <div 
                        contenteditable="false" 
                        class="pseudoSelector"
                        data-content-editable-void="true"
                        style="user-select: none; --pseudoSelection--background: transparent; width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0; z-index: 2;"
                    >
                    </div>
                </div>

                <div class="layout-content">
                </div>

                <div class="layout-content">
                    <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0;">
                        <div style="max-width: 100%; padding-left: calc(0px + env(safe-area-inset-left)); width: 100%;">
                            <div style="user-select: none; width: calc(100% - 0px);">
                                
                            </div>

                            <div 
                                contenteditable="false"
                                class="pseudoSelection"
                                data-content-editable-void="true"
                                style="user-select: none; --pseudoSelection--background: transparent; pointer-events: none;"
                            >

                            </div>

                            <div style="padding-right: calc(0 + env(safe-area-inset-right));">
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    class="layout-nested-grid layout-header-detailSections"
                    data-content-editable-void="true"
                    contenteditable="false"
                >
                    <div class="layout-content">
                        <div style="width: 100%; font-size: 14px;">
                            <div style="width: 100%; max-width: 100%; padding: 8px 0px; margin: 0px auto;">
                                <div style="width: 100%; max-width: 100%; padding-top: 8px; margin: 0px auto;">
                                    <div style="padding-bottom: 8px;">
                                        <div role="table"
                                            aria-label="Page properties"
                                            style="margin: 0px;"
                                        >
                                            <div style="display: flex; flex-direction: column;">
                                                <div role="row"
                                                    style="display: flex; align-items: center; padding-bottom: 4px;"
                                                >
                                                    <div style="display: flex; align-items: center; height: 34px; width: 160px; flex: 0 0 auto; color: rgba(55, 53, 47, 0.65);">
                                                        <div role="cell"
                                                            style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; height: 100%; width: 100%; border-radius: 3px; padding: 0px 6px;"
                                                        >
                                                            <div style="display: flex; align-items: center; line-height: 120%; min-width: 0px; font-size: 14px;">
                                                                <div style="margin-right: 6px;"></div>
                                                                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Status</div>
                                                            </div>
                                                        </div>

                                                        <div role="cell"
                                                            style="display: flex; margin-left: 4px; height: 100%; flex: 1 1 auto; flex-direction: column; min-width: 0px;"
                                                        >
                                                            <div style="display: flex; align-items: center; margin-left: 4px; height: 100%; flex: 1 1 auto; min-width: 0px;">
                                                                <div role="button" tabindex="0" data-testid="property-value" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; position: relative; font-size: 14px; overflow: hidden; display: inline-block; border-radius: 3px; width: 100%; min-height: 34px; padding: 7px 8px;">
                                                                    <div style="display: flex; flex-wrap: wrap; gap: 6px 8px;"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style="display: flex;">
                                            <div role="button"
                                                tabindex="0"
                                                style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; color: rgba(55, 53, 47, 0.5); border-radius: 3px; padding-left: 6px; padding-right: 6px; height: 34px; width: auto;"
                                                class="hvr"
                                            >
                                                <svg 
                                                    role="graphics-symbol" 
                                                    viewBox="0 0 16 16" 
                                                    class="plus" 
                                                    style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; margin-right: 9px; margin-top: 1px;"
                                                >
                                                    <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z">
                                                    </path>
                                                </svg>    

                                                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0px; line-height: 16px;">Add a property</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="layout-content">
                        <div class="xdoc-page-view-discussion"
                            style="width: 100%; margin: 0 auto;"
                        >

                        </div>
                    </div>
                </div>

                <div class="layout-content layout-editor" style="min-height: 170px;">
                    <div class="layout-full"></div>
                </div>
            </div>

            <span style="height: 1px; width: 1px; caret-color: transparent;"></span>

            <div>
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

        <div 
            class="xdoc-presence-container"
            style="position: absolute; top: 0; left: 0; z-index: 89;"
        >
            <div></div>
        </div>
    </div>
</template>

<style scoped>
.hvr:hover {
    background: rgba(55, 53, 47, 0.08);
}
.layout {
    --content-width: minmax(auto, 768px);
    --margin-width: minmax(96px, 1fr);
    display: grid;
    grid-template-columns: [full-start] var(--margin-left-width,var(--margin-width)) [content-start] var(--content-width) [content-end] var(--margin-right-width,var(--margin-width)) [full-end];
    width: 100%;
}
.layout-center-peek {
    --content-width: 1fr;
    --margin-width: 126px;
}
.layout-full {
    grid: inherit;
    grid-column: full;
}
.layout-content {
    grid: inherit;
    grid-column: content;
}
.layout-content {
    min-width: 0;
}

.layout-nested-grid {
    align-items: center;
    display: grid;
    gap: inherit;
    grid-column: full;
    grid-template: inherit;
}

.layout-editor {
    padding-top: 5px;
}

[contenteditable]:empty:after {
    content: attr(placeholder);
}
</style>