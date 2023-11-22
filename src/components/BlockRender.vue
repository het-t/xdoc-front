<script setup>
import { defineProps, onMounted, computed } from 'vue';
import BlockRenderHeadings from './BlockRenderHeadings.vue';
import BlockRenderCheckboxes from './BlockRenderCheckboxes.vue';
import BlockRenderParagraph from './BlockRenderParagraph.vue';
import { useBlocksStore } from '@/stores/blocks';

const props = defineProps({
    blockId: String,
    treeId: String
})

const blocksStore = useBlocksStore();

const blockDataInStore = computed(function () {
    return blocksStore.getBlockById(props.blockId)
})

const blockChildrenInStore = computed(function () {
    return store.getters['trees/getNode'](props.treeId, props.blockId)?.children
})

onMounted(() => {
    fetchBlockData()
})

function fetchBlockData () {
    store.dispatch('blocks/fetchBlockData', {
        blockId: props.blockId
    })
    .then((block) => {
        for (let i = 0; i!==block.children.length; i++) {
            store.dispatch('trees/addChild', {
                treeId: props.treeId,
                parentBlockId: props.blockId,
                childBlockId: block.children[i]
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
</script>

<template>
    <BlockRenderHeadings 
        v-if="
            blockDataInStore?.type === 'heading_1' 
            || blockDataInStore?.type === 'heading_2' 
            || blockDataInStore?.type === 'heading_3'
        "
        :treeId="props.treeId"
        :blockId="props.blockId"
    >
    </BlockRenderHeadings>

    <BlockRenderCheckboxes
        v-else-if="blockDataInStore?.type === 'checkbox'"
        :treeId="props.treeId"
        :blockId="props.blockId"
    >
        <template #children>
            <BlockRender
                v-for="block in blockChildrenInStore"
                :blockId="block.id"
                :treeId="props.treeId"
                :key="block.id"
                style="margin-left: 32px;"
            ></BlockRender>
        </template>
    </BlockRenderCheckboxes>

    <BlockRenderParagraph
        v-else-if="blockDataInStore?.type === 'paragraph'"
        :treeId="props.treeId"
        :blockId="props.blockId"
        class="xdoc-rich-text"
    ></BlockRenderParagraph>
</template>