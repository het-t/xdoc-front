<template>
    <div style="color: inherit; fill: inherit;">
        <div style="display: flex;">
            <div class="notranslate" 
                spellcheck="true"
                placeholder="press '/' for commands...'"
                data-content-editable-leaf="true"
                contenteditable="true"
                style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; min-height: 1em; color: rgb(55, 53, 47);"
            >
                <span 
                    v-for="(richTextObj, index) in blockRichTextRecordValueInStore" 
                    :key="index"
                >
                    <template
                        style="display: inline;"
                        :style="computeStyle(richTextObj?.[1])"
                    >
                        {{ richTextObj?.[0] }}
                    </template>
                </span>
            </div>
        </div>
    </div>
    <!-- when content is empty  -webkit-text-fill-color: rgba(55, 53, 47, 0.5); -->
    <!-- @keyup="handleKeyUpEvent" -->
</template>

<script setup>
import { styleColorsStringToRgba } from "@/helpers/globals/StyleColorsStringToRgba";
import { useRecordValuesStore } from "@/stores/recordValues";
import { defineProps } from "vue"

const props = defineProps({
    blockId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const blockRichTextRecordValueInStore = 
    recordValuesStore.getRecordValue(
        props.blockId,
        "block",
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    ).getTitle();

function computeStyle(styleArray) {
    let styleComputed = {};
 
    if (!styleArray?.length) return {};

    styleArray.forEach((style) => {
        switch(style[0]) {
            case "b": 
                styleComputed["fontWeight"] = "600";
                break;
            case "i":
                styleComputed["fontStyle"] = "italic";
                break;
            case "h": {  
                const color = styleColorsStringToRgba(style[1]);
                styleComputed["color"] = color;
                styleComputed["fill"] = color;
                break;
            }
        }
    })

    return styleComputed
}
</script>