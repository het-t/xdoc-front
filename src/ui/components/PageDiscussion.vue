<template>
    <div class="xdoc-page-view-discussion"
        style="width: 100%; margin: 0px auto;"
    >
        <div style="padding: 6px 4px 12px;">
            <div data-block-id="test" class="xdoc-selectable xdoc-page-block">
                <div class="xdoc-discussion-input"
                    style="display: flex; flex-direction: column; width: 100%; cursor: pointer;"
                >
                    <div style="display: flex; align-items: center; flex-grow: 1;">
                        discussion will come here
                    </div>
                </div>
            </div>
        </div>
    </div>
    block id in PageDiscussion {{ props.blockId }}
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    blockId: {
        type: String,
        required: true
    }
})
</script>