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

import { ref, defineProps, onMounted } from 'vue';
import { Block } from '@/api';
import RenderBlock from './RenderBlock.vue';

const props = defineProps({
    pageDataRaw: Object,
    pageId: String
})

let childBlocksData = ref(0)
let pageBlockId = ref(0)

function getChildBlocksData() {
    let childBlockIds = props.pageDataRaw.children

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
            pageBlockId.value = props.pageId
        })
    }
}

//make a function which can fetch data of page and its properties

onMounted(() => {
    pageBlockId.value = props.pageId
    getChildBlocksData()
})

</script>