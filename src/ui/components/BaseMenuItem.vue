<template>
    <div role="menuitem"
        style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; width: calc(100% - 8px); margin-left: 4px; margin-right: 4px; border-radius: 4px;"
        tabindex="-1"
        class="notranslate"
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