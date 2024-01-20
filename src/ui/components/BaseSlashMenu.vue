<script setup>
import BaseSlashMenuItem from './BaseSlashMenuItem.vue';
import { onMounted, onBeforeUnmount } from 'vue';
import { useKeyStrokeStore } from '@/stores/keyStrokes';
import { computed, defineProps } from 'vue';

const props = defineProps({
    pos: Object
})

const keystrokesStore = useKeyStrokeStore();

function handleClickOutside(e) {
    const menuNode = document.getElementsByClassName("xdoc-page-slash-menu")[0];
    const isClickOutside = !menuNode.contains(e.target);
    if (isClickOutside === true) {
        keystrokesStore.setTrackCommand(false);
        keystrokesStore.setCommandString("");
    }
}

const filteredBlocksOptions = computed(function () {
    if (!keystrokesStore.commandString) {
        return allBlocks;
    }

    return allBlocks.filter(block => block.label.toLowerCase().includes(keystrokesStore.commandString.slice(1)))
});

const positions = computed(function() {
    //adjustment for current line = 24px

    if (window.innerHeight > props.pos.y + window.innerHeight * 0.4) {
        return {
            top: props.pos.y + "px",
            left: props.pos.x + "px"
        }
    }

    return {
        bottom: -1 * (window.innerHeight - props.pos.y) + "px",
        left: props.pos.x + "px"
    }
})

const allBlocks = [
    { label: 'Paragraph', type: 'paragraph', id: 'paragraph', description: "Just start writing with plain text." },
    { label: 'Checkbox', type: 'checkbox', id: 'checkbox', description: "to do list" },
    { label: 'List', type: 'list', id: 'list', description: "make a list" },
]

function handleBlockSelection(id, type) {
    console.log(id, type)
}

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
})

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
})
</script>

<template>
    <div data-overlay="true"
        style="pointer-events: auto; position: relative; z-index: 0;"
    >
        <div>
            <div
                style="position: fixed; pointer-events: none;"
                :style="positions"
                class="xdoc-page-slash-menu"
            >
                <div style="height: 22px; width: 0;"></div>

                <div
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-start;"
                >

                    <div
                        style="position: relative; pointer-events: auto; bottom: 100%;"
                    >

                        <div style="display: flex; align-items: center; position: relative; flex-direction: column; transform-origin: 0% bottom; left: 0px; opacity: 1; bottom: 4px; transition-property: opacity, transform; transition-duration: 270ms; transition-timing-function: ease;">
                            <div 
                                role="dialog" 
                                style="border-radius: 6px; background: white; backdrop-filter: none; position: relative; max-width: calc(100vw - 24px); box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px; overflow: hidden;"
                            >
                                <div style="display: flex; flex-direction: column; width: 324px; min-width: 180px; max-width: calc(100vw - 24px); height: 100%; max-height: 40vh;">
                                    <div class="xdoc-scroller vertical"
                                        style="z-index: 1; flex-grow: 1; min-height: 0px; transform: translateZ(0px); overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
                                    >
                                        <div tabindex="0" role="menu">
                                            <div style="padding-top: 6px; padding-bottom: 6px;">
                                                <div style="display: flex; padding-left: 14px; padding-right: 14px; margin-top: 6px; margin-bottom: 8px; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); font-size: 12px; font-weight: 500; line-height: 120%; user-select: none;">
                                                    <div style="align-self: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Basic blocks</div>

                                                    <div style="margin-left: auto;"></div>
                                                </div>

                                                <base-slash-menu-item
                                                    v-for="(block, i) in filteredBlocksOptions"
                                                    :key="block.id"
                                                    @click="handleBlockSelection(block.id, block.type)"
                                                    :style="focusedMenuItemIndex === i ? 'background: rgba(55, 53, 47, 0.08);' : ''"
                                                >
                                                    {{ block.label }}

                                                    <template #description>
                                                        {{ block.description }}
                                                    </template>
                                                </base-slash-menu-item>
                                            </div>
                                        </div>
                                    </div>

                                    <footer style="flex-shrink: 0;"></footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>