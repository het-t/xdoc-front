<template>
    <div style="display: flex; flex-direction: column; min-width: 290px; max-width: 290px; height: 100%; max-height: calc(100% - 16px);">
        <div style="flex-shrink: 0;">
            <base-collection-side-menu-header>
                <slot name="header"></slot>
            </base-collection-side-menu-header>
        </div>
        
        <div v-if="props.topPart === true" style="padding-top: 6px; padding-bottom: 6px;">
            <slot name="top-part"></slot>
        </div>
        
        <div class="xdoc-scroller vertical"
            style="z-index: 1; flex-grow: 0; min-height: 0px; transform: translateZ(0px); overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
        >
            <slot name="mid-part"></slot>
        </div>

        <footer style="flex-shrink: 0;">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseCollectionSideMenuHeader from './BaseCollectionSideMenuHeader.vue';

const props = defineProps({
    topPart: {
        type: Boolean,
        default: true
    }
})
</script>