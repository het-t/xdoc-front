<template>
    <slot 
        :recordValueDeferInStore="recordValueInStore !== undefined" 
        :recordValueInStore="recordValueInStore"
    ></slot>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { computed, defineProps } from 'vue';

const props = defineProps({
    pointer: {
        type: Object,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const recordValueInStore = computed(() => recordValuesStore.getRecordValue(props.pointer));

if (!recordValueInStore.value !== undefined) {
    useTransactionsQueue().enqueue({
        pointer: props.pointer
    })
}
</script>