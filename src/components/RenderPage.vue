<template>
    <template v-if="childBlocksInStore?.length && childBlocksInStore[0] !== null">
        <template v-for="block in childBlocksInStore" :key="block.id">
            <RenderBlock
                :treeId="pageId"
                :blockId="block.id.toString()"
                @propogateKeyUp="handleKeyUp"
            ></RenderBlock>
        </template>
    </template>


    <div 
        v-else
        contenteditable="true"
        placeholder='Press "/" for commands'
        @keydown="handleKeyUp"
    >
    </div>

    <BaseMenu
        v-show="state.menuVisibility"
        :pos="state.menuPos"
        @handleSelection="appendNewBlock($event.selectedBlockTypeId)"
    ></BaseMenu>
</template>

<script setup>

import { onMounted, inject, watch, reactive, defineProps, computed } from 'vue';
import RenderBlock from './RenderBlock.vue';
import BaseMenu from './BaseMenu.vue';
import { useStore } from 'vuex';
import Paragraph from '@/models/blocks/Paragraph';

const state = reactive({
    menuVisibility: false,
    menuOpenForBlockId: '',
    menuOpenForEle: '',
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

function setMenuPosition(target, fromStart = true) {
    const selection = window.getSelection();
    
    let y;
    if (selection.rangeCount !== 0) {
      const range = selection.getRangeAt(0).cloneRange();
      range.collapse(fromStart);
      const rect = range.getClientRects()[0];
      if (rect) {
        state.menuPos.spaceAdjustment = "+ 1.5"
        state.menuPos.x = rect.left;
        y = rect.top;
      }
    }

    const keyPressPosition = target.getBoundingClientRect().bottom;
    const menuHeight = 100;
    const viewportHeight = window.innerHeight;

    if (viewportHeight - keyPressPosition < menuHeight + 100) {
        state.menuPos.spaceAdjustment = "- 0.5"
        y -= menuHeight
    }

    state.menuPos.y = y
}

//handles key up events for `slash` to allow user to append block
let slashPressed = false
// let keystrokeSeq = ""
function handleKeyUp(e) {
    // if (slashPressed === true) {
    //     keystrokeSeq += e.key
    // }

    switch(e.key) {
        case 'Enter': {      
            e.preventDefault();
            
            if (slashPressed === false) {
                appendNewBlock(e.__customEventData.defaultBlockId)
            }
            else {
                // store.commit('blocks/removeCommandFromBlock', {
                //     blockId: state.menuOpenForBlockId,
                //     length: keystrokeSeq + 1 //+1 for slash
                // })
                // keystrokeSeq = ""
                
                console.log("creating slected block")
            }
            break
        }
        case '/': {
            setMenuPosition(e.target)
            slashPressed = true
            state.menuVisibility = true
            state.menuOpenForEle = e.target
            state.menuOpenForBlockId = e.target.getAttribute('data-block-id')
            break
        }
        case 'Escape': {
            slashPressed = false
            state.menuVisibility = false
            state.menuOpenForEle = ''
            state.menuOpenForBlockId = ''
            break
        }
        case 'Backspace': {
            if (slashPressed === false) {
                console.log("check if block has content if not delete the entire block")
            }
            break
        }
        default: {
            slashPressed = false
            state.menuOpenForBlockId = ''
            state.menuOpenForEle = ''
            state.menuVisibility = false
        }
    }
}

//append block to parentBlock
function appendNewBlock(selectedBlockTypeId) {
    let blockData;
    switch(selectedBlockTypeId) {
        case "1": {
            blockData = new Paragraph({})
        }
        // case "2": {
        //     blockData = new CheckBox({})
        // }
        // case "3": {
        //     blockData = new List({})
        // }
    }
    store.dispatch('trees/addChild', {
        treeId: pageId.value,
        parentBlockId: state.menuOpenForBlockId,
        childBlockId: blockData.id,
        setFocusOnCreatedBlock: true
    })

    store.commit('blocks/setBlockData', {
        data: blockData
    })
    
    state.menuVisibility = false
    slashPressed = false
    state.menuOpenForBlockId = ''
    state.menuOpenForEle = ''
}
</script>