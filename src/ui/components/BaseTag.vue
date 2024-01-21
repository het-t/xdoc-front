<template>
    <div 
        :style='{ display: "inline-flex", alignItems: "center", minWidth: "0px", maxWidth: "100%", height: "20px", borderRadius: "3px", paddingRight: "6px", paddingLeft: "6px", fontSize: "14px", lineHeight: "120%", margin: "0", backgroundColor: TagBackgroundColorStringToRgba(props.backgroundColor)}'
    >
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { TagBackgroundColorStringToRgba } from "../../helpers/globals/TagBackgroundColorStringToRgba";

const props = defineProps({
    backgroundColor: {
        type: String,
        required: true
    }
})

</script>