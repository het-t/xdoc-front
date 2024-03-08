<template>
    <div style="padding: 6px 9px; font-size: 14px; min-height: 34px; display: flex; height: 100%; flex-direction: column; justify-content: space-between; flex-grow: 1; font-weight: 500;">
        <div 
            ref="propertyValueDialog"
            class="notranslate"
            spellcheck="true"
            data-content-editable-leaf="true"
            contenteditable="true"
            style="width: 100%; height: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47);"
        >
            {{ propertyValueInStore }}
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onBeforeUnmount } from 'vue';
import { useRecordValuesStore } from '@/stores/recordValues';

const emits = defineEmits([
    "value-change"
]);

const props = defineProps({
    pageId: {
        type: String,
        required: true
    },
    collectionId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

let propertyValueInStore = recordValuesStore.getRecordValue(
    props.pageId,
    "block",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
).properties?.['title']?.[0]?.[0]

const propertyValueDialog = ref(null);

onBeforeUnmount(() => {
    emits('value-change', [[propertyValueDialog.value.innerText]]);
});
</script>