<template>
    <RenderBlock 
        v-if="blockDataRaw?.object === 'block'"
        :blockDataRaw="blockDataRaw"
    ></RenderBlock>

    <RenderPage
        v-else-if="blockDataRaw?.object === 'page'"
        :pageDataRaw="blockDataRaw"
    ></RenderPage>
</template>

<script setup>
import { onMounted, ref, provide, computed } from 'vue';
import RenderBlock from './RenderBlock.vue'
import RenderPage from './RenderPage.vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useStore } from 'vuex';

let blockId = ref('')
provide('blockId', blockId)

const store = useStore()

const blockDataRaw = computed(() => {
    return store.getters['blocks/getBlockData'](blockId.value)
})

//fetches data of block
function getBlockData(blockIdArg) {
    return store.dispatch('blocks/fetchBlockData', {
        blockId: blockIdArg
    })
    .then(() => {
        blockId.value = blockIdArg
    })
}

// 
let route = useRoute()

onMounted(() => {
    getBlockData(route.params.blockId)
}) 

onBeforeRouteUpdate((to, from, next) => {
    getBlockData(to.params.blockId)
    .then(() => {
        blockId.value = to.params.blockId
        next()
    })
})
</script>