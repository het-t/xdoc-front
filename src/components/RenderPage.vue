<script setup>
import { onMounted, computed, defineProps } from 'vue';
import RenderPageProperties from './RenderPageProperties.vue';
import RenderPageDiscusstion from './RenderPageDiscussion.vue';

import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore()
const route = useRoute()

const props = defineProps({
    peekMode: {
        type: String,
        default: 'default'
    },
    pageId: {
        type: String,
        default: "default pageId value"
    }
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

const pageId = computed(function () {
    return route.params.pageId
})

onMounted(() => {
    console.log("mounted", props)
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
            <template v-if="props.peekMode !== 'c' && props.peekMode !== 's'">
                <div class="pseudoSelection"
                    contenteditable="false"
                    data-content-editable-void="true"
                    style="user-select: none; --pseudoSelection--background: transparent; width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0; z-index: 2;"
                ></div>

                <div style="width: 100%; display: flex; justify-content: center; z-index: 3; flex-shrink: 0;">
                    <div style="max-width: 100%; min-width: 0px; width: 900px;">
                        <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0;">
                            <div style="max-width: 100%; padding-left: calc(96px + env(safe-area-inset-left)); width: 100%;">
                                <div style="width: calc(100% - 0px); user-select: none;"></div>

                                <div contenteditable="false"
                                    class="pseudoSelection"
                                    data-content-editable-void="true"
                                    style="user-select: none; --pseudoSelection--background: transparent; pointer-events: none;"
                                >
                                    <div class="xdoc-page-controls"
                                        style="display: flex; justify-content: center; flex-start: flex-wrap; margin-top: 80px; margin-bottom: 4px; margin-left: -1px; color: rgba(55, 53, 47, 0.5); height: 24px; pointer-events: auto;"
                                    ></div>
                                </div>

                                <!-- page title goes here -->
                                <div style="padding-right: calc(96px + env(safe-area-inset-right));">
                                    <h1 style="color: #37352f;">New Task</h1>
                                </div>
                            </div>
                        </div>

                        <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0;">
                            <div contenteditable="false"
                                data-content-editable-void="true"
                                style="padding-left: calc(96px + env(safe-area-inset-left)); padding-right: calc(96px + env(safe-area-inset-right)); max-width: 100%; width: 100%;"
                            >
                                <RenderPageProperties />

                                <!-- separator -->
                                <div style="width: 100%; height: 1px; background: rgba(55, 53, 47, 0.09); margin-bottom: 8px;"></div>

                                <RenderPageDiscusstion />

                                <!-- separator -->
                                <div style="width: 100%; height: 1px; background: rgba(55, 53, 47, 0.09); margin-bottom: 8px;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; width: 100%; justify-content: center; padding-top: 5px;">
                    <div style="width: 900px; max-width: 100%; min-width: 0px;">
                        <div class="notion-page-content"
                            style="flex-shrink: 0; flex-grow: 1; max-width: 100%; display: flex; align-items: flex-start; flex-direction: column; font-size: 16px; line-height: 1.50; width: 100%; z-index: 4; padding-bottom: 30vh; padding-left: calc(96px + env(safe-area-inset-left)); padding-rigth
                            calc(96px + env(safe-area-inset-right));"
                        >
                            <!-- page's children blocks goes here -->
                            <div style="color: #37352f;">someone was here way before we knew about it</div>
                        </div>
                    </div>
                </div>
            </template>

            <!-- center peek and side peek -->
            <div class="layout"
                v-if="props.peekMode === 'c' || props.peekMode === 's'"
                :class="props.peekMode === 'c' ? 'layout-center-peek' : ''"
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
                        <RenderPageProperties />                    
                    </div>

                    <div class="layout-content">
                        <RenderPageDiscusstion />
                    </div>
                </div>

                <div class="layout-content layout-editor" style="min-height: 170px;">
                    <div class="layout-full">
                        <div class="xdoc-page-content"
                            style="flex-shrink: 0; flex-grow: 1; max-width: 100%; display: flex; align-items: flex-start; flex-direction: column; font-size: 16px; line-height: 1.5; width: 100%; z-index: 1; padding-bottom: 15vh; padding-left: 0px; padding-right: 0px; min-height: 240px;"
                        >

                        </div>
                    </div>
                </div>
            </div>

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
.layout.layout-center-peek {
    --content-width: 1fr;
    --margin-width: 126px;
}
.layout.layout-side-peek {
    --content-width: 1fr;
    --margin-width: 48px;
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

.layout-header-detailSections .layout-content+.layout-content {
    border-top: 1px solid rgba(55, 53, 47, 0.09);
}
.layout-header-detailSections>:last-child {
    border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}
.layout-editor {
    padding-top: 5px;
}

[contenteditable]:empty:after {
    content: attr(placeholder);
}
</style>