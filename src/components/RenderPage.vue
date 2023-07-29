<script setup>
import { onMounted, inject, watch, reactive, defineProps, computed } from 'vue';
import RenderBlock from './RenderBlock.vue';
import BaseMenu from './BaseMenu.vue';
import { useStore } from 'vuex';
import Paragraph from '@/models/blocks/Paragraph';

const keyDownState = reactive({
    key: '',
    blockId: '',
    block: '',
    menuVisibility: false,
    menuPos: {x: '', y: '', spaceAdjustment: ''}
})

let pageId = inject("blockId")

const props = defineProps({
    pageDataRaw: Object
})


const store = useStore()

watch(pageId, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        store.commit('trees/setNewTree', {
            treeId: pageId.value
        })
        getChildBlocksData()
    }
})

onMounted(() => {
    store.commit('trees/setNewTree', {
        treeId: pageId.value
    })
    getChildBlocksData()
})

const childBlocksInStore = computed(() => store.getters['trees/getNode'](pageId.value, pageId.value).children)

// getting data of children blocks if any
function getChildBlocksData() {
    const childBlocksIds = props.pageDataRaw.children

    new Promise((resolve, reject) => {
        if (childBlocksIds[0] === null) {
            resolve()
        }
        else {
            Promise.all([
                ...childBlocksIds.map(blockId => {
                    return store.dispatch('blocks/fetchBlockData', {
                        blockId
                    })
                })
            ])
            .then(() => {
                resolve()
            })
            .catch(() => reject())
        }
    })
    .then(() => {
        for(let i = 0; i!==childBlocksIds.length; i++) {
            store.dispatch('trees/addChild', {
                treeId: pageId.value,
                parentBlockId: pageId.value,
                childBlockId: childBlocksIds[i]
            })
        }
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
            blockData = new Paragraph({})
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
</script>

<template>
    <div 
        contenteditable="true"
        data-contenteditable-root="true" 
        :data-block-id="pageId"
        @keydown="handleKeyDown"
    >
        <main>
            <template v-if="childBlocksInStore?.length && childBlocksInStore[0] !== null">
                <template v-for="block in childBlocksInStore" :key="block.id">
                    <RenderBlock
                        :treeId="pageId"
                        :blockId="block.id.toString()"
                    ></RenderBlock>
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
        </main>
    </div>
        
</template>