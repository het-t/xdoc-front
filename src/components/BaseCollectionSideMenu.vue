<template>
    <div style="display: flex; flex-direction: column; min-width: 290px; max-width: 290px; height: 100%; max-height: calc(100% - 16px);">
        <div style="flex-shrink: 0;">
            <base-collection-side-menu-header>
                <slot name="header"></slot>
            </base-collection-side-menu-header>
        </div>
        
        <div style="padding-top: 6px; padding-bottom: 6px;">
            <slot name="top-part"></slot>
        </div>
        
        <div class="notion-scroller vertical"
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
import BaseCollectionSideMenuHeader from './BaseCollectionSideMenuHeader.vue';
</script>