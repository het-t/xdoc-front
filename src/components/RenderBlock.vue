<template>
    <div>
        <BlockRenderHeadings 
            v-if="blockType === 'heading_1' || blockType === 'heading_2' || blockType === 'heading_3'"
            :blockDataRaw="blockDataRaw"
            :blockId="blockId"
        ></BlockRenderHeadings>

        <BlockRenderCheckboxes
            v-else-if="blockType === 'checkbox'"
            :blockDataRaw="blockDataRaw"
            :blockId="blockId"
        ></BlockRenderCheckboxes>

        <div v-if="blockDataRaw.children[0] !== null">
            <RenderBlock v-for="block in childBlocksData" :key="block.id"
                :blockDataRaw="block"
                :blockId="block.id.toString()"
            ></RenderBlock>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted, inject } from 'vue';
import { Block } from '@/api'
import BlockRenderHeadings from './BlockRenderHeadings.vue';
import RenderBlock from './RenderBlock.vue'
import BlockRenderCheckboxes from './BlockRenderCheckboxes.vue';

const props = defineProps({
    blockDataRaw: Object,
    // blockId: String
})

let blockId = ref(0)
blockId.value = inject("blockId")

let blockType = ref(0)
let childBlocksData = ref(0)

function getChildBlocksData() {
    let childBlockIds = props.blockDataRaw.children

    childBlocksData.value = []
    if (childBlockIds[0] === null) childBlocksData.value = []
    else {
        const promises = childBlockIds.map(blockId => {
            return Block.get({id: blockId})
            .then((res) => {
                return res.data
            })
            .catch(err => console.log(err))
        })

        Promise.all(promises)
        .then((blocks) => {
            childBlocksData.value = blocks
        })
    }
}

onMounted(() => {
    blockType.value = props.blockDataRaw.type
    getChildBlocksData()    
})
</script>