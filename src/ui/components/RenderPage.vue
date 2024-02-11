<template>
    <div 
        class="xdoc-scroller vertical" 
        style="z-index: 1; display: flex; flex-direction: column; flex-grow: 1; position: relative; margin-right: 0; margin-bottom: 0; overflow: hidden auto;"
    >
        <div style="position: absolute; top: 0; left: 0;">
            <div></div>
        </div>

        <div
            class="whenContentEditable"
            data-contenteditable-root="true" 
            style="display: flex; flex-direction: column; position: relative; align-items: center; caret-color: rgb(55, 53, 47); width: 100%; flex-grow: 1; --whenContentEditable--WebkitUserModify: read-write-plaintext-only"
        >
            <span style="height: 1px; width: 1px; caret-color: transparent;"></span>

            <div 
                class="layout" 
                style="padding-bottom: 30vh;"
            >
                <div class="layout-full">
                    <div 
                        contenteditable="false" 
                        class="pseudoSelection" 
                        data-content-editable-void="true"
                        style="
                            user-select: none; 
                            --pseudoSelection--background: transparent; 
                            width: 100%; 
                            display: flex; 
                            flex-direction: column; 
                            align-items: center; 
                            flex-shrink: 0; 
                            flex-grow: 0; 
                            z-index: 2;
                        ">
                    </div>
                </div>

                <div class="layout-content">
                    <div style="
                        width: 100%; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        flex-shrink: 0; 
                        flex-grow: 0;"
                    >

                        <div style="
                            max-width: 100%; 
                            padding-left: calc(0px + env(safe-area-inset-left)); 
                            width: 100%;"
                        >
                            <div 
                                contenteditable="false" 
                                class="pseudoSelection" 
                                data-content-editable-void="true"
                                    style="
                                        user-select: none; 
                                        --pseudoSelection--background: transparent; 
                                        pointer-events: none;
                                    "
                            >
                                <div class="xdoc-page-controls"></div>
                            </div>

                            <div style="padding-right: calc(0 + env(safe-area-inset-right));">
                                <div>
                                    <div
                                        :data-block-id="props.blockId"
                                        class="xdoc-selectable xdoc-page-block"
                                        style="
                                            color: rgb(55, 53, 47);
                                            font-weight: 700;
                                            line-height: 1.2;
                                            font-size: 40px;
                                            font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont,
                                                'Segoe UI', Helvetica, 'Apple Color Emoji', Arial,
                                                sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
                                            cursor: text;
                                            display: flex;
                                            align-items: center;
                                        "
                                    >
                                        <h1 class="notranslate"
                                            spellcheck="true"
                                            placeholder="Untitled"
                                            data-content-editable-leaf="true"
                                            contenteditable="true"
                                            style="
                                                max-width: 100%;
                                                width: 100%;
                                                white-space: pre-wrap;
                                                word-break: break-word;
                                                caret-color: rgb(55, 53, 47);
                                                padding: 3px 2px;
                                                font-size: 1em;
                                                font-weight: inherit;
                                                margin: 0px;
                                            "   
                                            :style="!pageHeadingText?.length ? 'min-height: 1em; color: rgb(55, 53, 47); -webkit-text-fill-color: rgba(55, 53, 47, 0.15); cursor: text;' : ''"
                                        >
                                            {{ pageHeadingText }}
                                        </h1>

                                        <div style="
                                            margin-left: 4px;
                                        "></div>
                                    </div>

                                    <div style="margin-left: 4px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="layout-content layout-content-with-divider">
                    <div contenteditable="false" data-content-editable-void="true">
                        <page-properties 
                            :block-id="props.blockId"
                        />
                    </div>
                </div>

                <div class="layout-content layout-content-with-divider">
                    <div contenteditable="false" data-content-editable-void="true">
                        <base-data-provider
                            v-for="discussionId in discussions"
                            :block-id="discussionId"
                            space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
                            table="discussion"
                            v-slot="{ recordValueDeferInStore }"
                            :key="discussionId"
                        >
                            <page-discussion 
                                v-if="recordValueDeferInStore === 1"
                                :discussion-id="discussionId"
                            />
                        </base-data-provider>
                    </div>
                </div>

                <div class="layout-content layout-editor" style="min-height: 170px;">
                    <page-content 
                        :block-id="props.blockId"
                    />
                </div>
            </div>

            <span style="height: 1px; width: 1px; caret-color: transparent;"></span>
        </div>

        <div 
            class="xdoc-presence-container"
            style="position: absolute; top: 0; left: 0; z-index: 89;"
        >
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PageProperties from "@/ui/components/PageProperties.vue";
import PageDiscussion from "@/ui/components/PageDiscussion.vue";
import PageContent from "@/ui/components/PageContent.vue";
import { defineProps } from 'vue';
import { useRecordValuesStore } from "@/stores/recordValues";
import { syncRecordValueFromApi } from "@/helpers/globals/SyncRecordValueFromApi";
import BaseDataProvider from "./BaseDataProvider.vue";

const props = defineProps({
    blockId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const pageRecordValue = recordValuesStore.getRecordValue(
    props.blockId,
    "block",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
)

const pageHeadingText = pageRecordValue?.properties?.title?.[0]?.[0]
const { 
    parent_table: pageParentTable, 
    parent_id: pageParentId,
    discussions,
    content
} = pageRecordValue;

if (pageParentTable === "collection") {
    syncRecordValueFromApi(
        "collection",
        pageParentId,
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    )

    discussions?.forEach((id: string) => {
        syncRecordValueFromApi(
            "discussion",
            id,
            "f2cf1fd1-8789-4ddd-9190-49f41966c446"
        )
    });

    content?.forEach((id: string) => {
        syncRecordValueFromApi(
            "block",
            id,
            "f2cf1fd1-8789-4ddd-9190-49f41966c446"
        )
    })
}

// const pageDiscussionRecordValueInStore = computed(function() {
//     return recordValuesStore.getRecordValue(
//         pageRecordValue.discussion,
//         "collection",
//         "f2cf1fd1-8789-4ddd-9190-49f41966c446"
//     )?.defer
// })
</script>


<style scoped>
[contenteditable]:empty:after {
    content: attr(placeholder);
}
.hvr:hover {
    background: rgba(55, 53, 47, 0.08);
}

.layout {
    --content-width: minmax(auto, 768px);
    --margin-width: minmax(96px, 1fr);
    display: grid;
    grid-template-columns: [full-start] var(--margin-left-width, var(--margin-width)) [content-start] var(--content-width) [content-end] var(--margin-right-width, var(--margin-width)) [full-end];
    width: 100%;
}

.layout.layout-center-peek {
    --content-width: 1fr;
    --margin-width: 126px;
}

.layout.layout-side-peek {
    --content-width: 1fr;
    --margin-width: 48px;
}

.layout-full {
    grid: inherit;
    grid-column: full;
}

.layout-content {
    grid: inherit;
    grid-column: content;
}

.layout-content {
    min-width: 0;
}

.layout-nested-grid {
    align-items: center;
    display: grid;
    gap: inherit;
    grid-column: full;
    grid-template: inherit;
}

.layout-header-detailSections .layout-content+.layout-content {
    border-top: 1px solid rgba(55, 53, 47, 0.09);
}

.layout-header-detailSections>:last-child {
    border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

.layout-editor {
    padding-top: 5px;
}

</style>