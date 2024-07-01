<template>
    <base-menu-page-navigation
        css-class="bookmarks"
    >
        <template #header>
            <slot name="header"
                :onClick="() => showPages = !showPages"
            ></slot>
        </template>
        
        <template #navigation-options>
            <slot name="navigation-options"></slot>
        </template>

        <template v-if="showPages">
            <menu-page-navigation-page-link v-for="id in props.pageIds" 
                :id="id" 
                :key="id"
            >{{ id }}</menu-page-navigation-page-link>
        </template>
    </base-menu-page-navigation>
</template>

<script setup>
import { defineProps, ref } from "vue";
import BaseMenuPageNavigation from "./BaseMenuPageNavigation.vue";
import MenuPageNavigationPageLink from "./MenuPageNavigationPageLink.vue";

const props = defineProps({
    pageIds: {
        type: Array,
        required: true
    }
});

const showPages = ref(true);
</script>

<style>
div.xdoc-selectable a[role="treeitem"]:hover {
    background: rgba(55, 53, 47, 0.08);
}
</style>