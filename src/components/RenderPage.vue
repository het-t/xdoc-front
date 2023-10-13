<script setup>
import { onMounted, defineProps } from 'vue';
import PagePeekFull from "@/components/PagePeekFull.vue";
import PagePeekCenterSide from "@/components/PagePeekCenterSide.vue";

import { useStore } from 'vuex';

const store = useStore()

const props = defineProps({
    peekMode: String,
    pageId: String
})

// const keyDownState = reactive({
//     key: '',
//     blockId: '',
//     block: '',
//     menuVisibility: false,
//     menuPos: {x: '', y: '', spaceAdjustment: ''}
// })

// const state = reactive({
//     overlay: {
//         propertyId: '',
//         height: 0,
//         width: 0,
//         top: 0,
//         left: 0,
//         blockId: '',
//         visibility: false
//     }
// })

onMounted(() => {
    fetchPageData()
})

// const pageDataInStore = computed(function () {
//     return store.getters['blocks/getBlockData'](pageId.value)
// })

// const childBlocksInStore = computed(function () {
//     return store.getters['trees/getNode'](pageId.value, pageId.value)?.children
// })

// const overlayRequestInfoInStore = computed(function () {
//     return store.getters['getOverlayRequestData']
// })

function fetchPageData() {
    store.dispatch('blocks/fetchBlockData', {
        blockId: props.pageId
    })
    .then((page) => {
        store.commit('trees/setNewTreeIfNotInStore', {
            treeId: props.pageId
        })
        return page
    })
    .then((page) => {
        for (let i = 0; i!==page.children.length; i++) {
            store.dispatch('trees/addChild', {
                treeId: props.pageId,
                parentBlockId: props.pageId,
                childBlockId: page.children[i]
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

// function handleKeyDownSlash(fromStart = true) {
//     let y;
//     const selection = window.getSelection()
//     if (selection.rangeCount !== 0) {
//       const range = selection.getRangeAt(0).cloneRange();
//       range.collapse(fromStart);
//       const rect = range.getClientRects()[0];
//       if (rect) {
//         keyDownState.menuPos.spaceAdjustment = "+ 1.5"
//         keyDownState.menuPos.x = rect.left;
//         y = rect.top;
//       }
//     }

//     const keyPressPosition = keyDownState.block.getBoundingClientRect().bottom;
//     const menuHeight = 100;
//     const viewportHeight = window.innerHeight;

//     if (viewportHeight - keyPressPosition < menuHeight + 100) {
//         keyDownState.menuPos.spaceAdjustment = "- 0.5"
//         y -= menuHeight
//     }

//     keyDownState.menuPos.y = y
//     keyDownState.menuVisibility = true
// }

// function handleKeyDownEnter() {
//     appendNewBlock('paragraph')
// }

//append block to parentBlock
// function appendNewBlock(selectedBlockType) {
//     const enterKeyDownAtBlockId = keyDownState.blockId
    
//     keyDownState.block = keyDownState.block
//     .parentNode
//     .closest('[contenteditable="true"]:not([data-contenteditable-leaf="true"])')

//     keyDownState.blockId = keyDownState.block
//     .getAttribute('data-block-id')

//     let blockData;
//     switch(selectedBlockType) {
//         case "paragraph": {
//             // blockData = new Paragraph({})
//             break
//         }
//         // case "checkbox": {
//         //     blockData = new CheckBox({})
//         //     break
//         // }
//         // case "list": {
//         //     blockData = new List({})
//         //     break
//         // }
//     }

//     store.dispatch('trees/addNewChild', {
//         treeId: pageId.value,
//         parentBlockId: keyDownState.blockId,
//         childBlockId: blockData.id,
//         additionalData: {
//             appendBelow: enterKeyDownAtBlockId
//         },
//         setFocusOnCreatedBlock: true
//     })

//     store.commit('blocks/setBlockData', {
//         data: blockData,
//     })
    
//     keyDownState.menuVisibility = false
//     keyDownState.blockId = ''
//     keyDownState.block = ''
// }

// function handleKeyDown(e) {
//     if (e.code === 'Slash' || e.code === 'Enter') {
//         const selection = window.getSelection();    

//         keyDownState.block = selection
//         .focusNode
//         .parentNode
//         .closest('[contenteditable="true"]')

//         keyDownState.blockId = keyDownState.block
//         .getAttribute('data-block-id')
//     }

//     if (e.ctrlKey === false) {
//         if (e.code === 'Slash' && e.shiftKey === false) { 
//             keyDownState.key = 'Slash'
//             handleKeyDownSlash()
//         }
//         else if (e.code === 'Enter' && e.shiftKey === false) {
//             e.preventDefault()
//             keyDownState.menuVisibility = false
//             keyDownState.key = 'Enter'
//             handleKeyDownEnter()
//         }
//     }
// } 

// function handleClickOnPropertyValue(e, propertyValue) {
//     document.body.style.position = 'fixed'

//     const {x, y, height, width} = e.currentTarget.getBoundingClientRect()

//     state.overlay.left = x
//     state.overlay.top = y
//     state.overlay.height = height
//     state.overlay.width = width
//     store.commit('setOverlayVisibility', true)
//     store.commit('setOverlayPropertyValue', propertyValue)

//     store.commit('setOverlayRequestData', {
//         requesterBlockId: pageId.value,
//         reason: 'page_property'
//     })

//     state.overlay.visibility = true

//     nextTick(() => {
//         const range = document.createRange();
//         range.selectNodeContents(overlayItem.value);
//         range.collapse(false);
//         const selection = window.getSelection();
//         selection.removeAllRanges();
//         selection.addRange(range);

//         overlayItem.value.focus()
//     })
// }
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
            style="display: flex; flex-direction: column; position: relative; align-items: center; caret-color: rgb(55, 53, 47); width: 100%; flex-grow: 1; --whenContentEditable--WebkitUserModify: read-write-plaintext-only"
        >
            <span style="height: 1px; width: 1px; caret-color: transparent;"></span>

            <!-- full page -->
            <page-peek-full v-if="props.peekMode !== 'c' && props.peekMode !== 's'" />

            <!-- center peek -->
            <page-peek-center-side v-if="props.peekMode === 'c' || props.peekMode === 's'" />

            <span style="height: 1px; width: 1px; caret-color: transparent;"></span>
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
[contenteditable]:empty:after {
    content: attr(placeholder);
}
</style>