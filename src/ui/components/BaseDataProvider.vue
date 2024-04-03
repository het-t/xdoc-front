<template>
    <slot 
        :recordValueDeferInStore="recordValueInStore !== undefined" 
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

const recordValueInStore = computed(() => recordValuesStore.getRecordValue(
    props.blockId,
    props.table,
    props.spaceId
));

console.log(recordValueInStore.value)

if (!recordValueInStore.value !== undefined) {
    syncRecordValueFromApi( 
        props.table,
        props.blockId,
        props.spaceId
    )
}
</script>