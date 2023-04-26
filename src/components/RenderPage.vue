<template>
    <div>
        <div v-for="block in childBlocksData" :key="block.id">
            <RenderBlock 
                :blockDataRaw="block"
                :blockId="block.id.toString()"
            ></RenderBlock>
        </div>
    </div>
</template>

<script setup>

import { ref, defineProps, onMounted, inject, watch } from 'vue';
import { Block } from '@/api';
import RenderBlock from './RenderBlock.vue';

const props = defineProps({
    pageDataRaw: Object,
})

let childBlocksData = ref(0)
let pageBlockId = ref(0)
let pageId = inject("blockId")

watch(pageId, (newVal, oldVal) => {
    if (newVal !== oldVal) getChildBlocksData()
})

//make a function which can fetch data of page and its properties

onMounted(() => {
    pageBlockId.value = pageId
    getChildBlocksData()
})

function getChildBlocksData() {
    let childBlockIds = props.pageDataRaw.children

    console.log("render page => ", childBlockIds)
    if (childBlockIds[0] === null) {
        childBlocksData.value = []
    }
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
</script>