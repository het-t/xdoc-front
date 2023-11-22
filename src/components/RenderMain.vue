<template>
    <render-page v-if="state.blockType === 'page'"/>

    <render-collection-page v-else-if="state.blockType === 'collection_item'" />
    <!-- v-else-if="state.blockType === 'collection_view'"  -->
    
    <collection-view
        collection-id="163d630a-b5b3-48b5-b5b3-e1df48f53201"
    ></collection-view>

</template>

<script setup>
import RenderPage from "./RenderPage.vue";
import RenderCollectionPage from "./RenderCollectionPage.vue";
import CollectionView from "@/views/CollectionView.vue";
import { reactive } from "vue";

const state = reactive({
    blockType: "collection_view"
})
</script>