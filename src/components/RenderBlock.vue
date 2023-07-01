<template>
    <BlockRenderHeadings 
        v-if="
            state.blockType === 'heading_1' 
            || state.blockType === 'heading_2' 
            || state.blockType === 'heading_3'
        "
        :treeId="props.treeId"
        :blockId="props.blockId"
        @keydown="propogateKeyUp"
    >
    </BlockRenderHeadings>

    <BlockRenderCheckboxes
        v-else-if="state.blockType === 'checkbox'"
        :treeId="props.treeId"
        :blockId="props.blockId"
        @keydown="propogateKeyUp"
    ></BlockRenderCheckboxes>

    <BlockRenderParagraph
        v-else-if="state.blockType === 'paragraph'"
        :treeId="props.treeId"
        :blockId="props.blockId"
        @keydown="propogateKeyUp($event)"
    ></BlockRenderParagraph>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, reactive, computed } from 'vue';
import BlockRenderHeadings from './BlockRenderHeadings.vue';
import BlockRenderCheckboxes from './BlockRenderCheckboxes.vue';
import BlockRenderParagraph from './BlockRenderParagraph.vue';
import { useStore } from 'vuex';

const emits = defineEmits([
    'propogateKeyUp'
])

const props = defineProps({
    blockId: String,
    treeId: String
})

const state = reactive({
    blockType: 0,
})

const store = useStore()

const blockDataInStore = computed(() => store.getters['blocks/getBlockData'](props.blockId))

onMounted(() => {
    state.blockType = blockDataInStore.value.type
    getChildBlocksData()    
})

function getChildBlocksData() {
    let childBlocksIds = blockDataInStore.value.children

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
                treeId: props.treeId,
                parentBlockId: props.blockId,
                childBlockId: childBlocksIds[i]
            })
        }
    })
}

    
//handles key up events for `slash` to allow user to append block
function propogateKeyUp(e, defaultBlockId = "1") {
    if (['Enter', '/', 'Backspace', 'Escape'].includes(e.key)) {
        if (e.key === 'Enter') {
            if (!e.__customEventData) e.__customEventData = {}
            e.__customEventData.defaultBlockId = defaultBlockId
        }

        emits('propogateKeyUp', e)
    }
}
</script>