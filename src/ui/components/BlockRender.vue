<template>
    <block-render-paragraph
        v-if="blockTypeRecordValueInStore === 'text'"
        :block-id="props.blockId"
    ></block-render-paragraph>
</template>

<script setup>
import { computed, defineProps, onMounted } from 'vue';
import { useRecordValuesStore } from '@/stores/recordValues';
import { syncRecordValueFromApi } from '@/helpers/globals/SyncRecordValueFromApi';
import BlockRenderParagraph from './BlockRenderParagraph.vue';

const props = defineProps({
    blockId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const blockTypeRecordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue(
        props.blockId,
        "block",
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    )?.type
})

onMounted(
    () => {
        syncRecordValueFromApi(
            "block",
            props.blockId,
            "f2cf1fd1-8789-4ddd-9190-49f41966c446"
        )
    }
)
</script>