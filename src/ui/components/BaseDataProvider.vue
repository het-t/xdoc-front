<template>
    <slot 
        :recordValueDeferInStore="recordValueDeferInStore" 
        :recordValueInStore="recordValueInStore"
    ></slot>
</template>

<script setup>
import { syncRecordValueFromApi } from '@/helpers/globals/SyncRecordValueFromApi';
import { useRecordValuesStore } from '@/stores/recordValues';
import { computed, defineProps } from 'vue';

const props = defineProps({
    blockId: {
        type: String,
        required: true
    },
    spaceId: {
        type: String,
        required: true
    },
    table: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const recordValueIsAvailable = recordValuesStore.getRecordValue(
    props.blockId,
    props.table,
    props.spaceId
)?.defer


if (!recordValueIsAvailable) {
    syncRecordValueFromApi( 
        props.table,
        props.blockId,
        props.spaceId
    )
}

const recordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue(
        props.blockId,
        props.table,
        props.spaceId
    )
});

const recordValueDeferInStore = computed(function() {
    return recordValueInStore.value?.defer
});
</script>