<template>
    <div 
        class="xdoc-peek-renderer"
        role="region"
        aria-label="Side peek"
        style="position: fixed;"
        :style="props.peekMode === 'c' ? 'inset: 0px; z-index: 99; background: rgba(0, 0, 0, 0.4);' : 'top: 0px; right: 0px; bottom: 0px; width: 522px; z-index: 109; transition-property: transform; transition-duration: 270ms; transition-timing-function: ease;'"
    >
        <RenderPage />
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import RenderPage from "@/components/RenderPage.vue";

const props = defineProps({
    peekMode: {
        type: String,
        default: "s"
    }
})

</script>