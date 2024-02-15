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

                        <base-data-provider
                            v-for="commentId in discussionRecordValueInStore.comments"
                            :block-id="commentId"
                            :key="commentId"
                            space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
                            table="comment"
                            v-slot="{ recordValueDeferInStore }"
                        >    
                            <page-discussion-comment 
                                v-if="recordValueDeferInStore === 1"
                                @update_status="updateResolvedStatus"
                                :comment-id="commentId"
                                :key="commentId"
                            />
                        </base-data-provider>

                        <div style="padding: 4px 16px 0px 13px; position: relative;">
                            <div class="xdoc-discussion-input"
                                style="display: flex; flex-direction: column; cursor: pointer; width: 100%; padding-left: 5px; padding-right: 2px;"
                            >
                                <div style="display: flex; align-items: center; flex-grow: 1;">
                                    <div style="flex-shrink: 0; flex-grow: 0; margin-right: 6px; margin-top: 6px;">
                                        <div style="width: 20px; height: 20px;"></div>
                                    </div>

                                    <div tabindex="-1" style="display: flex; flex-direction: column; min-height: 32px; width: 100%; font-size: 14px; padding-top: 4px; padding-bottom: 4px; border-radius: 4px; transition-delay: 0s; background: inherit; cursor: pointer; align-self: center; position: relative;">
                                        <div style="display: flex; flex-grow: 1;">
                                            <div
                                                ref="newCommentDiv"
                                                @input.stop="newCommentUpdated"
                                                class="notranslate"
                                                spellcheck="true"
                                                placeholder="Add a comment..."
                                                data-content-editable-leaf="true"
                                                contenteditable="true"
                                                style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); font-size: 14px; margin-top: 3px; margin-bottom: 2px; padding-left: 4px; padding-right: 10px; max-height: 70vh; overflow: hidden auto; user-select: auto; min-height: 1em;"
                                                :style="newCommentContentLength === 0 ? { '-webkit-text-fill-color': 'rgba(55, 53, 47, 0.5)' } : { color: 'rgb(55, 53, 47)' }"
                                                autocomplete="on"
                                            >
                                            </div>

                                            <div 
                                                style="display: flex; align-items: end; margin-right: 8px; opacity: 1;"
                                            >
                                                <div style="display: flex; align-items: center;">
                                                    <base-button
                                                        @click.stop="handleNewComment"
                                                        :hover-style="{}"
                                                    >
                                                        <svg
                                                            role="graphics-symbol" viewBox="0 0 20 20" class="sendArrow" style="width: 24px; height: 24px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"
                                                            :style="newCommentContentLength === 0 ? {} : { fill: 'rgb(35, 121, 226) !important' }"
                                                            ><path d="M9.79883 18.5894C14.6216 18.5894 18.5894 14.6216 18.5894 9.79883C18.5894 4.96777 14.6216 1 9.79053 1C4.95947 1 1 4.96777 1 9.79883C1 14.6216 4.96777 18.5894 9.79883 18.5894ZM9.79883 14.3062C9.20947 14.3062 8.76953 13.9077 8.76953 13.3433V9.69922L8.86914 8.00586L8.25488 8.84424L7.3916 9.81543C7.23389 10.0063 6.98486 10.1143 6.72754 10.1143C6.21289 10.1143 5.84766 9.75732 5.84766 9.25928C5.84766 8.99365 5.92236 8.79443 6.12158 8.58691L8.96045 5.61523C9.19287 5.35791 9.4585 5.2417 9.79883 5.2417C10.1309 5.2417 10.4048 5.36621 10.6372 5.61523L13.4761 8.58691C13.667 8.79443 13.75 8.99365 13.75 9.25928C13.75 9.75732 13.3848 10.1143 12.8618 10.1143C12.6128 10.1143 12.3638 10.0063 12.2061 9.81543L11.3428 8.86914L10.7202 7.99756L10.8281 9.69922V13.3433C10.8281 13.9077 10.3799 14.3062 9.79883 14.3062Z"></path></svg>
                                                    </base-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import { defineProps, ref } from 'vue';
import BaseDataProvider from './BaseDataProvider.vue';
import BaseButton from './BaseButton.vue';
import uuid from '@/helpers/globals/uuid';
import { Comment } from '@/entities/Comment';
import { transformToStandardUUIDFormat } from '../helpers/router/transformToStandardUUIDFormat';
import PageDiscussionComment from "@/ui/components/PageDiscussionComment.vue";

const props = defineProps({
    discussionId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const discussionRecordValueInStore = recordValuesStore.getRecordValue(
    props.discussionId,
    "discussion",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
);

const newCommentContentLength = ref(0);

function newCommentUpdated(e) {
    newCommentContentLength.value = e.target.innerText.length;
}

const newCommentDiv = ref("");

function handleNewComment() {
    const id = transformToStandardUUIDFormat(uuid());
    discussionRecordValueInStore.addNewComment(id);

    const comment = new Comment({
        id,
        text: [[newCommentDiv.value.innerText]],
    });

    recordValuesStore.setRecordValue(
        id,
        "comment",
        { ...comment, defer: 1 },
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    );

    newCommentDiv.value.innerText = "";
}

function updateResolvedStatus({ resolved }) {
    discussionRecordValueInStore.updateResolvedStatus(
        resolved
    );
}
</script>