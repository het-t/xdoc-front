<template>
    <base-button style="display: flex; justify-content: space-between;"
        :style="props.active ? { fontWeight: 600, background: 'rgba(55, 53, 47, 0.08)' } : {}"
    >
        <div style="display: flex; align-items: center;">
            <div style="width: 20px; height: 20px; margin-right: 8px; color: rgba(55, 53, 47, 0.85); fill: rgba(55, 53, 47, 0.85);">
                <slot name="graphic"></slot>
            </div>
            
            <div style="font-size: 14px; line-height: 20px; color: rgb(55, 53, 47);"
            ><slot name="text"></slot></div>
        </div>
    </base-button>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})
</script>