<template>
    <div
        style="display: flex; flex-direction: column; gap: 1px; padding-bottom: 0px;"
    >
        <a rel="noopener noreferrer" role="treeitem" aria-expanded="false" 
            style="display: block; color: inherit; text-decoration: none; user-select: none; transition: background 100ms ease-out 0s; cursor: pointer; width: 100%; border-radius: 6px;"
            @mouseover="linkInFocus = true"
            @mouseleave="linkInFocus = false"
            @click.stop="handleLinkExpand"
            :style="linkInFocus ? { background: 'rgba(55, 53, 47, 0.08)' } : {}"
        >
            <div style="display: flex; align-items: center; width: 100%; font-size: 14px; min-height: 27px; padding: 5px 8px; margin-top: 1px; margin-bottom: 1px; border-radius: 3px;"
                :style="{ paddingLeft: 8*props.nestingLevel+'px' }"
            >                                       
                <div style="flex: 1 1 auto; white-space: nowrap; min-width: 0; overflow: visible; text-overflow: clip;">
                    <div id=":r2j:" class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
                    >{{ labelTreeItem() }}</div>
                </div>
                
                <div v-show="linkInFocus" style="display: flex;">
                    <slot name="actions"></slot>
                </div>
            </div>
        </a> 

        <div v-if="linkExpand" role="group">
            <a v-if="nestedItemPointers.length === 0"
                style="display: block; color: inherit; text-decoration: none; user-select: none; transition: background 100ms ease-out 0s; cursor: pointer; width: 100%; border-radius: 6px;"
            >
                <div style="display: flex; align-items: center; width: 100%; font-size: 14px; min-height: 27px; padding: 5px 8px; margin-top: 1px; margin-bottom: 1px; border-radius: 3px;"
                    :style="{ paddingLeft: 8*(props.nestingLevel + 1)+'px' }"
                >                                       
                    <div style="flex: 1 1 auto; white-space: nowrap; min-width: 0; overflow: visible; text-overflow: clip;">
                        <div id=":r2j:" class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: rgba(55, 53, 47, 0.5);"
                        >No pages inside</div>
                    </div>
                </div>
            </a> 


            <menu-tree-item 
                v-for="item in nestedItemPointers"
                :pointer="item"
                :nesting-level="props.nestingLevel+1"
                :key="item.id"
            >
                <template #actions>
                    <base-button class="xdoc-template-picker-item-action-menu xdoc-fadein" style="border-radius: 4px; width: 20px; height: 20px; padding: 4px; margin-left: 4px;">
                        <svg role="graphics-symbol" viewBox="0 0 13 3" class="dots" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><g><path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path><path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path><path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path></g></svg>
                    </base-button> 
                </template>
            </menu-tree-item>
        </div>
    </div>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import BaseButton from './BaseButton.vue';
import { ref, defineProps, computed } from 'vue';
import { useDataExistanceCheck } from '../composables/useDataExistanceCheck';

const props = defineProps({
    pointer: {
        type: Object,
        required: true
    },
    nestingLevel: {
        type: Number,
        default: 1
    }
});

const linkExpand = ref(false);
const linkInFocus = ref(false);
const nestedItemPointers = ref([]);
const { existance: nestedItemsAvailable } = useDataExistanceCheck(nestedItemPointers);

const record = computed(() => useRecordValuesStore().getRecordValue(props.pointer));

function handleLinkExpand() {
    if(!record.value) return;

    linkExpand.value = !linkExpand.value;
    if(linkExpand.value === true) {
        if(props.pointer.table === "block") nestedItemPointers.value = [];
        else nestedItemPointers.value = record.value.team_pages.map((id) => {
            return {
                id,
                table: "block",
                spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
            }
        });

        console.log(nestedItemsAvailable.value)
    }
}

function labelTreeItem() {
    if(!record.value) return;
    if (props.pointer.table === "block") return record.value.properties?.title?.[0]?.[0] || "Untitled";
    return record.value.name;
}
</script>