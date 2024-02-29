<template>
    <div class="xdoc-page-content"
        style="flex-shrink: 0; flex-grow: 1; max-width: 100%; display: flex; align-items: flex-start; flex-direction: column; font-size: 16px; line-height: 1.5; width: 100%; z-index: 1; padding-bottom: 15vh; padding-left: 0px; padding-right: 0px; min-height: 240px;"
    >
        <template v-if="!pageContentInStore?.length">
            <div
                :data-block-id="props.blockId"
                class="xdoc-selectable xdoc-page-block"
            ></div>
        
            <div style="width: 100%; display: flex; flex-direction: column; margin-bottom: 14vh;"> 
                <div
                    @click="appendNewChildToPage"
                    style="width: 100%;"
                >
                    <div 
                        style="color: rgba(55, 53, 47, 0.5); padding: 5px 2px 24px;"
                    >
                        Press Enter to continue with an empty page, or pick a template 
                    </div>
                </div>
            </div>
        </template>

        <block-render v-else
            v-for="blockId in pageContentInStore"
            :key="blockId"
            :block-id="blockId"
            :space-id="props.spaceId"
        >
        </block-render>
    </div>
</template>

<script setup lang="ts">
import BlockRender from "./BlockRender.vue";
import { computed, defineProps } from "vue";
import { useRecordValuesStore } from "@/stores/recordValues";
import uuid from "@/helpers/globals/uuid";

const props = defineProps({
    blockId: {
        type: String,
        required: true,
    },
    spaceId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const pageContentInStore = computed(function() {
    return recordValuesStore.getRecordValue(
        props.blockId,
        "block",
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    )?.content
})

function appendNewChildToPage() {
    const blockId = uuid();
    
    recordValuesStore.setNewChild(
        props.blockId,
        "content",
        blockId,
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    )

}

// const keystrokesStore = useKeyStrokeStore();

// function handleKeyUpEvent(e: Event): void {
//     const selection = window.getSelection();
//     const range = selection?.getRangeAt(0);
//     const rect = range?.getBoundingClientRect();

//     if (e.code === "Slash") {
//         keystrokesStore.setTrackCommand(true);
//         keystrokesStore.setAnchorOffset(selection?.anchorOffset as number - 1);
//         keystrokesStore.setPositions(rect?.x || 0, rect?.y || 0);
//     }

//     keystrokesStore.setFocusOffset(selection?.focusOffset as number);

//     keystrokesStore.handleKeyStroke(e.code, e.key, {
//         text: selection?.focusNode?.textContent
//     });
// }
</script>