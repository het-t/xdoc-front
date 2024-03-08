<template>
    <div style="display: inline-flex; align-items: center; flex-shrink: 1; min-width: 0px; max-width: 100%; height: 20px; border-radius: 10px; padding-left: 7px; padding-right: 9px; font-size: 14px; line-height: 1.2; color: rgb(50, 48, 44); margin: 0px 6px 6px 0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
        :style="{ ...tagColorStringToRgba(color) }"
    >
        <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inline-flex; align-items: center; height: 20px; line-height: 20px;">
            <div style="display: flex; align-items: center;">
                <div style="margin-right: 5px; border-radius: 99px; height: 8px; width: 8px; display: inline-flex; flex-shrink: 0;"
                    :style="{ background: darkBackgroundColorStringToRgba(color)}"
                ></div>
            </div>

            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                {{ props.status.value }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { darkBackgroundColorStringToRgba } from "@/helpers/globals/darkBackgroundColorStringToRgba";
import { tagColorStringToRgba } from "@/helpers/globals/tagColorStringToRgba";
import { defineProps } from "vue";

const props = defineProps({
    status: {
        type: Object,
        required: true
    },
    groupColor: {
        type: String,
        default: ""
    }
})

const color = props.status.color ? props.status.color : props.groupColor;
</script>