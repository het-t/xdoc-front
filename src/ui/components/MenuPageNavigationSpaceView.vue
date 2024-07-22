<template>
    <div :class="`xdoc-outliner-${props.header}-header-container`"
        style="display: flex; flex-direction: column; gap: 1px; margin-bottom: 12px;"
        v-if="existance || props.table === 'team'"
    >
        <base-button :class="`xdoc-outliner-${props.header}-header`"
            @click.stop="showPages = !showPages"
            style="padding: 0 8px; justify-content: unset; text-transform: capitalize; height: 30px; border-radius: 6px;"
            :hover-style="{ color: 'rgba(55, 53, 47, 0.8) !important', background: 'rgba(55, 53, 47, 0.08)' }"
            :default-style="{ color: 'rgb(145, 145, 142)' }"
            @mouseover.stop="showActions = true"
            @mouseleave.stop="showActions = false"
        >
            <span style="font-size: 12px; line-height: 1; font-weight: 500;"
            >{{ props.header }}</span>

            <div style="margin-left: auto;"
                v-if="showActions"
            >
                <slot name="navigation-options"></slot>
            </div>
        </base-button>
        
        
        <template v-if="showPages">
            <div style="display: flex; flex-direction: column; gap: 1px; width: 100%;">
                <div role="tree" :class="`xdoc-outliner-${props.header}`"
                    style="display: block;"
                >
                    <div style="display: flex; flex-direction: column; gap: 1px;">
                        <menu-tree-item v-for="id in props.pageIds" :key="id"
                            :data-block-id="id"
                            :pointer="{ id, table: props.table, spaceId: 'f2cf1fd1-8789-4ddd-9190-49f41966c446'}"
                        >
                            <template #actions>
                                <base-button class="xdoc-action-menu xdoc-fadein" style="border-radius: 4px; width: 20px; height: 20px; padding: 4px; margin-left: 4px;"
                                    @click.stop="props.onActionBtnClick(id)"
                                >
                                    <svg role="graphics-symbol" viewBox="0 0 13 3" class="dots" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><g><path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path><path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path><path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path></g></svg>
                                </base-button> 
                            </template>
                        </menu-tree-item>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { defineProps, ref, toRef } from "vue";
import MenuTreeItem from "./MenuTreeItem.vue";
import BaseButton from "./BaseButton.vue";
import { useDataExistanceCheck } from "../composables/useDataExistanceCheck";

const props = defineProps({
    pageIds: {
        type: Array,
        required: true
    },
    table: {
        type: String,
        default: "block"
    },
    header: {
        type: String,
        required: true
    },
    onActionBtnClick: {
        type: Function,
        required: true
    }
});

const { existance } = useDataExistanceCheck(toRef(() => props.pageIds));

const showPages = ref(true);
const showActions = ref(false);
</script>

<style>
div.xdoc-selectable a[role="treeitem"]:hover {
    background: rgba(55, 53, 47, 0.08);
}
</style>