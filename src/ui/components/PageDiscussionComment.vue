<template>
    <div 
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
        style="display: flex; align-items: flex-start; position: relative; font-size: 14px;"
    >
        <div style="flex-grow: 1; min-width: 0;">
            <div style="align-items: center; position: relative; display: flex; padding: 6px 16px 0px 18px; user-select: none;">
                <div style="margin-right: 10px; margin-top: 2px; user-select: none;">
                    <div style="height: 20px; width: 20px;"></div>
                </div>

                <div style="overflow: hidden;">
                    <span style="font-weight: 600; white-space: normal;">
                        Het Tarkhala
                    </span>

                    <div style="font-size: 12px; line-height: 16px; color: rgba(55, 53, 47, 0.5); margin: 0px 6px; white-space: normal; display: inline;">
                        <div style="display: inline;">
                            1 hour ago
                        </div>
                    </div>
                </div>
            </div>
       
            <div style="padding-left: 47px; padding-right: 16px;">
                <div style="cursor: text;"></div>
            </div>
    
            <div style="padding: 0px 16px 3px;">
                <div style="position: relative;">
                    <div style="display: -webkit-box; -webkit-box-orient: vertical;">
                        <div>
                            <div 
                                spellcheck="true"
                                data-content-editable-leaf="true"
                                contenteditable="false"
                                style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); cursor: text; padding-left: 32px;"
                            >{{ commentInRecordValuesStore.text[0][0] }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div 
            v-show="hovered === true" 
            style="position: absolute; z-index: 1; top: 0; right: 16px; padding: 2px; margin-right: 8px; margin-top: 0; border-radius: 4px; display: flex; gap: 1px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px 0px"
        >
            <base-button 
                @click.stop="updateResolveStatus"
                style="height: 22px; width: 22px;"
            >
                <svg role="graphics-symbol" viewBox="0 0 16 16" class="resolve" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M6.6123 14.2646C7.07715 14.2646 7.43945 14.0869 7.68555 13.7109L14.0566 3.96973C14.2344 3.69629 14.3096 3.44336 14.3096 3.2041C14.3096 2.56152 13.8311 2.09668 13.1748 2.09668C12.7236 2.09668 12.4434 2.26074 12.1699 2.69141L6.57812 11.5098L3.74121 7.98926C3.48828 7.68848 3.21484 7.55176 2.83203 7.55176C2.16895 7.55176 1.69043 8.02344 1.69043 8.66602C1.69043 8.95312 1.7793 9.20605 2.02539 9.48633L5.55273 13.7588C5.84668 14.1074 6.1748 14.2646 6.6123 14.2646Z"></path></svg>
            </base-button>
        </div>
    </div>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import { defineProps, ref, defineEmits } from 'vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
    commentId: {
        type: String,
        required: true
    }
});

const emits = defineEmits(['update_status']);

const hovered = ref(false);

const recordValuesStore = useRecordValuesStore();

const commentInRecordValuesStore = recordValuesStore.getRecordValue(
    props.commentId,
    "comment",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
)

function updateResolveStatus() {
    emits('update_status', { 
        resolved: true
    });
}
</script>