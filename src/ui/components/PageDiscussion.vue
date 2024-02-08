<template>
    <div class="xdoc-page-view-discussion"
        style="width: 100%; margin: 0px auto;"
    >
        <div 
            :data-block-id="props.discussionId" 
            class="xdoc-selectable xdoc-page-block"
        >
            <div style="margin: 14px -14px;">
                <div style="position: relative;">
                    <div>
                        <div style="display: flex; align-items: flex-start; position: relative; font-size: 14px;">
                            <div style="flex-grow: 1; min-width: 0;">
                                <div style="align-items: center; position: relative; display: flex; padding: 6px 16px 0px 18px; user-select: none;">
                                    <div style="margin-right: 10px; margin-top: 2px; user-select: none;">
                                    
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
                            </div>
                        </div>
                        <base-data-provider
                            v-for="commentId in discussionCommentsRecordValueInStore"
                            :block-id="commentId"
                            :key="commentId"
                            space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
                            table="comment"
                            v-slot="{ recordValueDeferInStore }"
                        >
                            <div style="display: flex; align-items: center; flex-grow: 1;"
                                v-if="recordValueDeferInStore === 1"
                            >
                                {{ commentId }}
                            </div>
                        </base-data-provider>
                    </div>
                </div>
        
                <div style="padding: 4px 16px 0px 13px; position: relative;">
    
                        <div class="xdoc-discussion-input"
                            style="display: flex; flex-direction: column; width: 100%; cursor: pointer;"
                        >
                            New comment
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import { defineProps } from 'vue';
import BaseDataProvider from './BaseDataProvider.vue';

const props = defineProps({
    discussionId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const discussionCommentsRecordValueInStore = recordValuesStore.getRecordValue(
    props.discussionId,
    "discussion",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
).comments;
</script>