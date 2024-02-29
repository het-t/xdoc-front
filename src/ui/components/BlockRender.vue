<template>
    <base-data-provider
        :block-id="props.blockId"
        :space-id="props.spaceId"
        table="block"
        v-slot="{ recordValueDeferInStore }"
    >
        <block-render-paragraph
            v-if="recordValueDeferInStore && blockTypeRecordValueInStore === 'text'"
            :block-id="props.blockId"
        />

        <block-render-page 
            v-else-if="recordValueDeferInStore && blockTypeRecordValueInStore === 'page'"
            :block-id="props.blockId"
        />
    </base-data-provider>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useRecordValuesStore } from '@/stores/recordValues';
import BlockRenderParagraph from './BlockRenderParagraph.vue';
import BaseDataProvider from './BaseDataProvider.vue';
import BlockRenderPage from './BlockRenderPage.vue';

const props = defineProps({
    blockId: {
        type: String,
        required: true
    },
    spaceId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const blockTypeRecordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue(
        props.blockId,
        "block",
        props.spaceId
    )?.type
})
</script>