<template>
    <div
        style="display: flex; align-items: center; flex-shrink: 1; min-width: 0px; max-width: 100%; height: 20px; border-radius: 3px; font-size: 14px; line-height: 120%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
        :style="{ ...tagColorStringToRgba(props.tag.color) }"
    >
        <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inline-flex; align-items: center; height: 20px; line-height: 20px;">
            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                {{ props.tag.value }}
            </span>
        </div>

        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { tagColorStringToRgba } from "../../helpers/globals/tagColorStringToRgba";

const props = defineProps({
    tag: {
        type: Object,
        required: true
    }
})

</script>