<template>
    <div
        role="tablist"
        style="display: flex; align-items: center; height: 100%; flex-grow: 1;"
    >
        <base-data-provider
            v-for="viewId in collectionViewsIdsRecordValueInStore" 
            :key="viewId"
            :block-id="viewId"
            table="collection_view"
            :space-id="props.spaceId"
            v-slot="{ recordValueDeferInStore }"
        >
            <div style="display: inline-flex; margin: 0px; height: 100%;">
                <div style="display: flex; flex-direction: row;">
                    <collection-view-tab
                        v-if="recordValueDeferInStore"
                        :block-id="viewId"
                        :space-id="props.spaceId"
                    ></collection-view-tab>
                </div>
            </div>
        </base-data-provider>

        <base-button
            class="xdoc-collection-add-view"
            style="user-select: none; transition-behavior: normal;
            transition-delay: 0s; cursor: pointer; flex-shrink: 0; height: 24px; width: 24px; opacity: 1;"
        >
            <svg role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg>
        </base-button>
    </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import BaseDataProvider from './BaseDataProvider.vue';
import CollectionViewTab from './CollectionViewTab.vue';
import { useRecordValuesStore } from '@/stores/recordValues';
import { defineProps, computed } from 'vue';

const props = defineProps({
    collectionId: {
        type: String,
        required: true
    },
    spaceId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const collectionViewsIdsRecordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue(
        props.collectionId,
        "collection",
        props.spaceId
    ).view_ids;
})
</script>