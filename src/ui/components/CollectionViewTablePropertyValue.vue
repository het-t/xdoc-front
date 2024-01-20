<template>
    <div role="button"
        tabindex="0"
        data-testid="property-value"
        style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; position: relative; display: block; font-size: 14px; overflow: hidden; width: 252px; border-right: none; white-space: nowrap; height: 32px; min-height: 32px; padding: 5px 8px;"
    >
        <span style="line-height: 1.5; white-space: nowrap; word-break: normal; display: inline; font-weight: 500; background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.1) 100%); background-repeat: repeat-x; background-position: 0px 100%; background-size: 100% 1px;">
            {{ propertyValueRecordValueInStore }}
        </span>
    </div>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import { computed, defineProps } from 'vue';

const props = defineProps({
    pageId: {
        type: String,
        required: true
    },
    property: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const propertyValueRecordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue(
        props.pageId,
        "block",
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    )?.properties?.["title"]
})
</script>