<template>
    <base-button 
        style="margin-right: 4px; margin-left: 4px; width: calc(100% - 8px);"
        :hover-style="props.hoverStyle"
        :default-style="props.defaultStyle"
    >
        <div style="display: flex; align-items: center; min-height: 28px; font-size: 14px; line-height: 120%; user-select: none; width: 100%;">
            <div style="margin-left: 10px; margin-right: 4px; display: flex; justify-content: center; align-items: center;">
                <slot name="graphic"></slot>
            </div>

            <div style="margin-left: 6px; margin-right: 6px; flex: 1 1 auto; min-width: 0;">
                <div style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">
                    <slot name="item"></slot>
                </div>
            </div>
        </div>
    </base-button>
</template>

<script setup>
import { defineProps } from "vue";
import BaseButton from "./BaseButton.vue";

const props = defineProps({
    hoverStyle: {
        type: Object,
        default: () => {}
    },
    defaultStyle: {
        type: Object,
        default: () => {}
    }
})
</script>