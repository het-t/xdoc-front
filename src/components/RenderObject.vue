<template>
    <div>
        <RenderBlock 
            v-if="blockDataRaw.object === 'block'"
            :blockDataRaw="blockDataRaw"
        ></RenderBlock>
        <!-- :blockId="blockId.toString()" -->

        <RenderPage
            v-else-if="blockDataRaw.object === 'page'"
            :pageDataRaw="blockDataRaw"
        ></RenderPage>
        <!-- :pageId="blockId.toString()" -->
</div>
</template>

<script setup>
import { onMounted, ref, provide } from 'vue';
import RenderBlock from './RenderBlock.vue'
import RenderPage from './RenderPage.vue'
import { Block } from '@/api';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

    let blockDataRaw = ref({})

    let blockId = ref(0)
    provide('blockId', blockId.toString())

    function getBlockData() {
        console.log(`rendring object with id ${blockId.value}`)
        Block.get({
            id: blockId.value,
        })
        .then(res => {
            blockDataRaw.value = res.data
        })
    }

    let route = useRoute()

    onMounted(() => {
        blockId.value = route.params.blockId
        getBlockData()
    }) 

    onBeforeRouteUpdate((to, from, next) => {
        blockId.value = to.params.blockId
        getBlockData()

        next()
    })

</script>