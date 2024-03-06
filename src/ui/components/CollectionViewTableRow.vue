<template>
    <div class="xdoc-table-view-row">
        <div style="display: flex;">   
            <div style="position: sticky; left: 0px; z-index: 85; display: flex;">
                <div style="display: flex; opacity: 1; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                    <div :style="{ opacity }" style="background: white; border-bottom: rgb(233, 233, 231); height: 100%; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                        <div style="height: 100%">
                            <label :style="{ opacity }" style="height: 100%;align-items: flex-start; justify-content: center; display: flex; cursor: pointer; z-index: 1; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                                <div style="height: 31px; width: 32px; display: flex; justify-content: center; align-items: center; padding-right: 0px;">
                                    <input type="checkbox"
                                        v-model="isRowSelected"
                                        @click.stop="emits('table-view-row-selected', { value: !isRowSelected})"
                                        style="width: 14px; height: 14px; cursor: pointer; position: relative; right: 2px; accent-color: rgb(35, 131, 226);"
                                    >
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <slot></slot>
        </div>

    </div>
</template>

<script setup>
import { defineEmits, ref, defineProps, computed } from "vue"

const props = defineProps({
    selectCheckboxOpacity: {
        type: Number,
        default: 0
    }
})

const emits = defineEmits([
    "table-view-row-selected"
])

const isRowSelected = ref(false);

const opacity = computed(() => props.selectCheckboxOpacity === 1 || isRowSelected.value ? 1 : 0); 
</script>