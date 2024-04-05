<template>
    <div style="padding: 6px 9px; font-size: 14px; min-height: 34px; display: flex; height: 100%; flex-direction: column; justify-content: space-between; flex-grow: 1; font-weight: 500;">
        <div 
            ref="propertyValueDialog"
            class="notranslate"
            spellcheck="true"
            data-content-editable-leaf="true"
            contenteditable="true"
            style="width: 100%; height: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47);"
        >{{ propertyValue }}</div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, toRef } from 'vue';
import { usePropertyData } from "@/ui/composables/usePropertyData";

const emits = defineEmits([
    "value-change"
]);

const props = defineProps({
    pageId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        default: "title"
    },
    collectionId: {
        type: String,
        required: true
    },
    spaceId: {
        type: String,
        required: true
    }
});

const propertyValueDialog = ref(null);

const { propertyValue } = usePropertyData(
    toRef(() => props),
    () => emits("value-change", {
        value: [[propertyValueDialog.value.innerText]]
    })
);
</script>