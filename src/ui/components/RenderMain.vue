<template>
    <base-data-provider
        :pointer="{
            id: props.blockId,
            table: 'block',
            spaceId: 'f2cf1fd1-8789-4ddd-9190-49f41966c446'
        }"
        v-slot="{ recordValueInStore }"
    >
        <render-page 
            v-if="recordValueInStore && recordValueInStore.type === 'page'"
            :block-id="props.blockId"
        />
        
        <collection-view-page
            v-else-if="recordValueInStore && recordValueInStore.type === 'collection_view_page'" 
            :page-id="props.blockId"
        />        
    
        <div v-else>
            Sorry something unexptected happened
        </div>
    </base-data-provider>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import RenderPage from "./RenderPage.vue";
import CollectionViewPage from "../views/CollectionViewPage.vue";
import BaseDataProvider from "./BaseDataProvider.vue";

const props = defineProps({
    blockId: {
        type: String,
        required: true
    }
});
</script>