<template>
    <render-page v-if="state.blockType === 'page'"/>

    <render-collection-page v-else-if="state.blockType === 'collection_item'" />
    <!-- v-else-if="state.blockType === 'collection_view'"  -->
    
    <render-collection-view />

</template>

<script setup>
import RenderPage from "./RenderPage.vue";
import RenderCollectionPage from "./RenderCollectionPage.vue";
import RenderCollectionView from "./RenderCollectionView.vue";

import { reactive } from "vue";

const state = reactive({
    blockType: "collection_view"
})
</script>