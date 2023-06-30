<template>
    <BlockRenderHeadings 
        v-if="
            state.blockType === 'heading_1' 
            || state.blockType === 'heading_2' 
            || state.blockType === 'heading_3'
        "
        :blockDataRaw="blockDataRaw"
        :blockId="props.blockId"
        @keyup="propogateKeyUp"
    >
    </BlockRenderHeadings>

    <BlockRenderCheckboxes
        v-else-if="state.blockType === 'checkbox'"
        :blockDataRaw="blockDataRaw"
        :blockId="props.blockId"
        @keyup="propogateKeyUp"
    ></BlockRenderCheckboxes>

    <BlockRenderParagraph
        v-else-if="state.blockType === 'paragraph'"
        :blockDataRaw="blockDataRaw"
        @keyup="propogateKeyUp($event)"
    ></BlockRenderParagraph>

    <template
        v-if="childBlocksInStore?.length && childBlocksInStore?.[0] !== null"
        style="margin-left: 12px;"
    >
        <RenderBlock v-for="block in childBlocksInStore"
            :treeId="props.treeId"
            :blockDataRaw="getBlockDataFromStore(block.id)"
            :blockId="getBlockDataFromStore(block.id).id.toString()"
            @propogateKeyUp="propogateKeyUp($event)"
            :key="block.id"
        ></RenderBlock>
    </template>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, reactive, computed } from 'vue';
import RenderBlock from './RenderBlock.vue';
import BlockRenderHeadings from './BlockRenderHeadings.vue';
import BlockRenderCheckboxes from './BlockRenderCheckboxes.vue';
import BlockRenderParagraph from './BlockRenderParagraph.vue';
import { useStore } from 'vuex';

const emits = defineEmits([
    'propogateKeyUp'
])

const props = defineProps({
    blockDataRaw: Object,
    blockId: String,
    treeId: String
})

const state = reactive({
    blockType: 0,
    childBlocksData: 0
})

const store = useStore()

const childBlocksInStore = computed(() => store.getters['trees/getNode'](props.treeId, props.blockId).children)

function getChildBlocksData() {
    let childBlocksIds = props.blockDataRaw.children

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
function propogateKeyUp(e, defaultBlockName = 'paragraph') {
    e.defaultBlockName = defaultBlockName
    emits('propogateKeyUp', e)
}

function getBlockDataFromStore(blockId) {
    return store.getters['blocks/getBlockData'](blockId)
}

onMounted(() => {
    state.blockType = props.blockDataRaw.type
    getChildBlocksData()    
})
</script>