<template>
    <div>
        <RenderBlock 
            v-if="blockDataRaw.object === 'block'"
            :blockDataRaw="blockDataRaw"
        ></RenderBlock>

        <RenderPage
            v-else-if="blockDataRaw.object === 'page'"
            :pageDataRaw="blockDataRaw"
        ></RenderPage>
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
    provide('blockId', blockId)

    function getBlockData(blockIdArg) {
        Block.get({
            id: blockIdArg,
        })
        .then(res => {
            blockDataRaw.value = res.data
            blockId.value = blockIdArg
        })
    }

    let route = useRoute()

    onMounted(() => {
        getBlockData(route.params.blockId)
    }) 

    onBeforeRouteUpdate((to, from, next) => {
        getBlockData(to.params.blockId)

        next()
    })

</script>