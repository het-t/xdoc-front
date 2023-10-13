<template>
    
    <div class="xdoc-scroller vertical horizontal"
        style="z-index: 1; display: flex; flex-direction: column; flex-grow: 1; position: relative; margin-right: 0; margin-bottom: 0; overflow: auto;"
    >
        <div style="position: absolute; top: 0; left: 0;">
            <div></div>
        </div>

        <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0; position: sticky; left: 0px;">
            <div contenteditable="false"
                class="pseudoSelection"
                data-content-editable-void="true"
                style="user-select: none; --psuedoSelection--background: transparent; width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0; position: sticky; left: 0px; z-index: 2;"
            ></div>

            <div style="max-width: 100%; padding-left: calc(96px + env(safe-area-inset-left)); width: 100%; transition-property: width; transition-duration: 270ms; transition-timing-function: ease;">
                <div class="xdoc-page-controls"
                style="display: flex; justify-content: flex-start; flex-wrap: wrap; margin-top: 4px; margin-bottom: 4px; margin-left: -1px; color: rgba(55, 53, 47, 0.5); font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; height: 24px; pointer-events: auto;"></div>

                <div style="padding-right: calc(96px + env(safe-area-inset-right)); margin-bottom: 8px;">
                    <div role="button"
                        tabindex="0"
                        class="xdoc-record-icon notranslate"
                        aria-label="Change page icon" style="user-select: none;"
                    ></div>
                    
                    <div style="display: flex; align-items: flex-start;">
                        <!-- block containing name of collection -->
                        Paid Task
                    </div>

                    <div style="margin-left: 4px">
                    </div>
                </div>
            </div>
        </div>

        <div contenteditable="false"
            data-content-editable-void="true"
            style="min-height: 40px; padding-left: 96px; padding-right: 96px; flex-shrink: 0; position: sticky; z-index: 86; left: 0;"
        >
            <!-- data-block-id = block id of collection -->
            <div data-block-id=""
                class="notion-selectable notion-collection_view-block"
            >
                <div style="display: flex; align-items: center; height: 40px; left: 96px; width: 100%; box-shadow: rgb(233, 231, 231) 0px -1px 0px inset;">
                    <div role="tablist"
                        style="display: flex; align-items: center; height: 100%; flex-grow: 1;"
                    >
                        <div style="display: inline-flex; margin: 0px; height: 100%;">

                            <!-- do this for each tab button -->
                            <div style="display: flex; flex-direction: row;">
                                <div class="xdoc-collection-view-tab-button"
                                    style="display: flex; align-items: center; background: none; height: 100%;"
                                >
                                    <div role="tab"
                                        tabindex="0"
                                        aria-selected="false"
                                        style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; flex-shrink: 0; white-space: nowrap; height: 28px; border-radius: 4px; font-size: 14px; line-height: 1.2; min-width: 0px; padding-left: 8px; padding-right: 8px; color: rgba(55, 53, 47, 0.65); font-weight: 500; max-width: 220px;"
                                    >
                                        <!-- collection-view svg -->
                                        <svg role="graphics-symbol" viewBox="0 0 16 16" class="collectionTable" style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.65); flex-shrink: 0; margin-right: 6px;"><path d="M2.39697 14.4634H13.5964C15.0532 14.4634 15.8311 13.6921 15.8311 12.2485V4.24609C15.8311 2.80249 15.0532 2.03125 13.5964 2.03125H2.39697C0.940186 2.03125 0.162354 2.7959 0.162354 4.24609V12.2485C0.162354 13.6987 0.940186 14.4634 2.39697 14.4634ZM1.63232 4.39771C1.63232 3.79126 1.94214 3.50122 2.52222 3.50122H7.28809V5.74243H1.63232V4.39771ZM13.4712 3.50122C14.0447 3.50122 14.3611 3.79126 14.3611 4.39771V5.74243H8.70532V3.50122H13.4712ZM1.63232 9.3811V7.10693H7.28809V9.3811H1.63232ZM8.70532 9.3811V7.10693H14.3611V9.3811H8.70532ZM2.52222 12.9934C1.94214 12.9934 1.63232 12.7034 1.63232 12.0969V10.7522H7.28809V12.9934H2.52222ZM14.3611 12.0969C14.3611 12.7034 14.0447 12.9934 13.4712 12.9934H8.70532V10.7522H14.3611V12.0969Z"></path></svg>

                                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px;">
                                            Table
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div role="button" tabindex="0"
                            class="notion-collection-add-view"
                            style="user-select: none; transition-behavior: normal;
                            transition-delay: 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 24px; width: 24px; padding: 0px; opacity: 1;"
                        >
                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 2px; opacity: 1;">

                    </div>
                </div>
            </div>
        </div>

        <div style="position: sticky; height: 0px; left: 0px; z-index: 87;"></div>

        <div contenteditable="false"
            data-content-editable-void="true"
            style="flex-grow: 1; flex-shrink: 0; display: flex; flex-direction: column; position: relative;"
        >
            <div class="xdoc-scroller xdoc-collection-view-body"
                style="z-index: 1; flex-grow: 1; flex-shrink: 0; margin-right: 0px; margin-bottom: 0px;"
            >
                <!-- all records goes here -->
                <collection-view-table />
            </div>
        </div>

        <div
            class="notion-presence-container" 
            style="position: absolute; top: 0px; left: 0px; z-index: 89;"
        >
            <div></div>
        </div>
    </div>
</template>

<script setup>
import CollectionViewTable from './CollectionViewTable.vue';
</script>