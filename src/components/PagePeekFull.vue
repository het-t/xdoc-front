<template>
    <div class="pseudoSelection"
        contenteditable="false"
        data-content-editable-void="true"
        style="user-select: none; --pseudoSelection--background: transparent; width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0; z-index: 2;"
    ></div>

    <div style="width: 100%; display: flex; justify-content: center; z-index: 3; flex-shrink: 0;">
        <div style="max-width: 100%; min-width: 0px; width: 900px;">
            <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0;">
                <div style="max-width: 100%; padding-left: calc(96px + env(safe-area-inset-left)); width: 100%;">
                    <div style="width: calc(100% - 0px); user-select: none;"></div>

                    <div contenteditable="false"
                        class="pseudoSelection"
                        data-content-editable-void="true"
                        style="user-select: none; --pseudoSelection--background: transparent; pointer-events: none;"
                    >
                        <div class="xdoc-page-controls"
                            style="display: flex; justify-content: center; flex-start: flex-wrap; margin-top: 80px; margin-bottom: 4px; margin-left: -1px; color: rgba(55, 53, 47, 0.5); height: 24px; pointer-events: auto;"
                        ></div>
                    </div>

                    <!-- page title goes here -->
                    <div style="padding-right: calc(96px + env(safe-area-inset-right));">
                        <h1 style="color: #37352f;">New Task</h1>
                    </div>
                </div>
            </div>

            <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0;">
                <div contenteditable="false"
                    data-content-editable-void="true"
                    style="padding-left: calc(96px + env(safe-area-inset-left)); padding-right: calc(96px + env(safe-area-inset-right)); max-width: 100%; width: 100%;"
                >
                    <page-properties />

                    <!-- separator -->
                    <div style="width: 100%; height: 1px; background: rgba(55, 53, 47, 0.09); margin-bottom: 8px;"></div>

                    <page-discussion />

                    <!-- separator -->
                    <div style="width: 100%; height: 1px; background: rgba(55, 53, 47, 0.09); margin-bottom: 8px;"></div>
                </div>
            </div>
        </div>
    </div>

    <div style="display: flex; width: 100%; justify-content: center; padding-top: 5px;">
        <div style="width: 900px; max-width: 100%; min-width: 0px;">
            <div class="notion-page-content"
                style="flex-shrink: 0; flex-grow: 1; max-width: 100%; display: flex; align-items: flex-start; flex-direction: column; font-size: 16px; line-height: 1.50; width: 100%; z-index: 4; padding-bottom: 30vh; padding-left: calc(96px + env(safe-area-inset-left)); padding-rigth
                calc(96px + env(safe-area-inset-right));"
            >
                <!-- page's children blocks goes here -->
                <page-content />
            </div>
        </div>
    </div>
</template>

<script setup>
import PageDiscussion from '@/components/PageDiscussion.vue';
import PageProperties from '@/components/PageProperties.vue';
import PageContent from '@/components/PageContent.vue';
</script>