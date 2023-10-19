<template>
    <div
        role="button"
        tabindex="0"
        style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; padding: 0px;"
        :style="state.style"
        @mouseover="state.style = props.hoverStyle"
        @mouseleave="state.style = props.defaultStyle"
    >
        <slot></slot>
    </div>
</template>

<script setup>
import { reactive, defineProps } from "vue";

const props = defineProps({
    hoverStyle: {
        type: Object,
        default: () => ({background: 'rgba(55, 53, 47, 0.08)'})
    },
    defaultStyle: {
        type: Object,
        default: () => ({})
    }
})


const state = reactive({
    style: props.defaultStyle
})
</script>