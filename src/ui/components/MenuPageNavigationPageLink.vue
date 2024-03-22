<template>
    <div :data-block-id="props.id" class="xdoc-selectable xdoc-page-block" style="padding-left: 6px;">
        <a rel="noopener noreferrer" role="treeitem" aria-expanded="false" style="display: block; text-decoration: none; user-select: none; transition: background 100ms ease-out 0s; cursor: pointer; width: calc(100% - 8px); border-radius: 3px; margin-left: 4px; margin-right: 4px;">
            <div style="display: flex; align-items: center; width: 100%; font-size: 14px; min-height: 27px; padding: 2px 10px 2px 5px; margin-top: 1px; margin-bottom: 1px; border-radius: 3px;">                                       
                <div style="flex: 1 1 auto; white-space: nowrap; min-width: 0; overflow: visible; text-overflow: clip;">
                    <div id=":r2j:" class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </a> 
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
</script>