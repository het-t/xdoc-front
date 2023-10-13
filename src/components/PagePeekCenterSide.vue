<template>
    <div class="layout layout-center-peek"
        style="padding-bottom: 80px; transform: translateX(0px);"
    >
        <div class="layout-full">
            <div 
                contenteditable="false" 
                class="pseudoSelector"
                data-content-editable-void="true"
                style="user-select: none; --pseudoSelection--background: transparent; width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0; z-index: 2;"
            >
            </div>
        </div>

        <div class="layout-content">
        </div>

        <div class="layout-content">
            <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0;">
                <div style="max-width: 100%; padding-left: calc(0px + env(safe-area-inset-left)); width: 100%;">
                    <div style="user-select: none; width: calc(100% - 0px);">
                        
                    </div>

                    <div 
                        contenteditable="false"
                        class="pseudoSelection"
                        data-content-editable-void="true"
                        style="user-select: none; --pseudoSelection--background: transparent; pointer-events: none;"
                    >

                    </div>

                    <div style="padding-right: calc(0 + env(safe-area-inset-right));">
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div 
            class="layout-nested-grid layout-header-detailSections"
            data-content-editable-void="true"
            contenteditable="false"
        >
            <div class="layout-content">
                <page-properties />                    
            </div>

            <div class="layout-content">
                <page-discussion />
            </div>
        </div>

        <div class="layout-content layout-editor" style="min-height: 170px;">
            <div class="layout-full">
                <div class="xdoc-page-content"
                    style="flex-shrink: 0; flex-grow: 1; max-width: 100%; display: flex; align-items: flex-start; flex-direction: column; font-size: 16px; line-height: 1.5; width: 100%; z-index: 1; padding-bottom: 15vh; padding-left: 0px; padding-right: 0px; min-height: 240px;"
                >
                    <page-content />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PageProperties from "@/components/PageProperties.vue";
import PageDiscussion from "@/components/PageDiscussion.vue";
import PageContent from "@/components/PageContent.vue";
</script>

<style scoped>
.hvr:hover {
    background: rgba(55, 53, 47, 0.08);
}
.layout {
    --content-width: minmax(auto, 768px);
    --margin-width: minmax(96px, 1fr);
    display: grid;
    grid-template-columns: [full-start] var(--margin-left-width,var(--margin-width)) [content-start] var(--content-width) [content-end] var(--margin-right-width,var(--margin-width)) [full-end];
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