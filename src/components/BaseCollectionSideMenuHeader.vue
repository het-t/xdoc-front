<template>
    <div style="display: flex; align-items: center; padding: 14px 16px 6px; height: 42px;">
        <base-button 
            @click.stop="removeLastComponent"
            style="height: 22px; width: 24px; margin-right: 8px; margin-left: -2px;">
            <svg role="graphics-symbol" viewBox="0 0 16 16" class="arrowLeftThick" style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M1.54004 8.05762C1.54004 8.2627 1.62891 8.46094 1.78613 8.61133L6.29102 13.1162C6.45508 13.2734 6.63965 13.3486 6.82422 13.3486C7.25488 13.3486 7.5625 13.041 7.5625 12.6309C7.5625 12.4189 7.48047 12.2344 7.34375 12.1045L5.8125 10.5527L3.78906 8.70703L5.38867 8.80273H13.7012C14.1455 8.80273 14.46 8.49512 14.46 8.05762C14.46 7.61328 14.1455 7.3125 13.7012 7.3125H5.38867L3.7959 7.4082L5.8125 5.5625L7.34375 4.01074C7.48047 3.87402 7.5625 3.68945 7.5625 3.47754C7.5625 3.06738 7.25488 2.7666 6.82422 2.7666C6.63965 2.7666 6.45508 2.83496 6.27734 3.00586L1.78613 7.50391C1.62891 7.64746 1.54004 7.85254 1.54004 8.05762Z"></path></svg>
        </base-button>

        <span style="flex-grow: 1; font-weight: 600; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <slot></slot>
        </span>

        <base-button 
            @click.stop="close"
            style="border-radius: 100%; height: 18px; width: 18px;"
            :default-style="{background: 'rgba(55, 53, 47, 0.08)'}"
            :hover-style="{background: 'rgba(55, 53, 47, 0.16)'}"
        >
            <svg role="graphics-symbol" viewBox="0 0 16 16" class="closeSmall" style="width: 14px; height: 100%; display: block; fill: rgba(55, 53, 47, 0.65); flex-shrink: 0;"><path d="M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"></path></svg>
        </base-button>
    </div>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import { defineEmits } from "vue"
import { useStore } from "vuex"

const emits = defineEmits([
    'close'
])

const store = useStore()

function removeLastComponent() {
    store.commit('collectionSideMenu/removeCurrentComponent', {collectionId: 'test'})
}

function close() {
    store.commit('collectionSideMenu/removeAllComponent', {collectionId: 'test'})
    emits('close')
}
</script>