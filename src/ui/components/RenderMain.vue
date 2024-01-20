<template>
    <base-data-provider
        :block-id="props.blockId"
        table="block"
        space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
        v-slot="{ recordValueDeferInStore }"
    >
        <render-page 
            v-if="recordValueDeferInStore && blockTypeRecordValueInStore === 'page'"
            :block-id="props.blockId"
        />
        
        <collection-view 
            v-else-if="recordValueDeferInStore && blockTypeRecordValueInStore === 'collection_view_page'" 
            :block-id="props.blockId"
        />        
    
        <div v-else-if="blockTypeRecordValueInStore === -1">
            Sorry something unexptected happened
        </div>
    </base-data-provider>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import RenderPage from "./RenderPage.vue";
import { useRecordValuesStore } from "@/stores/recordValues";
import CollectionView from "../views/CollectionView.vue";
import BaseDataProvider from "./BaseDataProvider.vue";

const props = defineProps({
    blockId: {
        type: String,
        required: true
    }
});

const recordValuesStore = useRecordValuesStore();

const blockTypeRecordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue(
        props.blockId, 
        "block", 
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    )?.type;
})
</script>