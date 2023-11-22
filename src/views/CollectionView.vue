<template>
    
    <div class="xdoc-scroller vertical horizontal"
        style="z-index: 1; display: flex; flex-direction: column; flex-grow: 1; position: relative; margin-bottom: 0;"
        :style="`${state.displayCollectionSideMenu ? 'overflow: auto hidden; margin-right: 10px;' : 'overflow: auto; margin-right: 0;'}`"
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
                    <base-button class="xdoc-record-icon notranslate"
                        aria-label="Change page icon" style="user-select: none;"
                    ></base-button>
                    
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
                <div style="display: flex; align-items: center; height: 40px; left: 96px; width: 100%;">
                    <!-- collection-tabs -->
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

                        <base-button
                            class="notion-collection-add-view"
                            style="user-select: none; transition-behavior: normal;
                            transition-delay: 0s; cursor: pointer; flex-shrink: 0; height: 24px; width: 24px; opacity: 1;"
                        >
                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg>
                        </base-button>
                    </div>

                    <!-- collection-view buttons -->
                    <div style="display: flex; align-items: center; gap: 2px; opacity: 1;">
                        <base-button style="flex-shrink: 0; white-space: nowrap; height: 28px; min-width: 0px; font-size: 14px; line-height: 1; color: rgba(55, 53, 47, 0.65); font-weight: 400; padding: 6px;"
                        >
                            Filter
                        </base-button>

                        <base-button style="flex-shrink: 0; white-space: nowrap; height: 28px; min-width: 0px; font-size: 14px; line-height: 1; color: rgba(55, 53, 47, 0.65); font-weight: 400; padding: 6px;"
                        >
                            Sort
                        </base-button>

                        <base-button style="flex-shrink: 0; height: 28px; width: 28px; font-size: 14px; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); padding: 6px;"
                        >
                            <svg role="graphics-symbol" viewBox="0 0 14 22" class="boltFilled" style="height: 14px; display: block; fill: rgba(55, 53, 47, 0.65); flex-shrink: 0;"><path d="M0 12.117c0 .38.293.664.703.664h5.518l-2.91 7.91c-.381 1.006.664 1.543 1.318.723l8.877-11.094c.166-.205.254-.4.254-.625 0-.371-.293-.664-.703-.664H7.539l2.91-7.91C10.83.115 9.785-.422 9.131.408L.254 11.492c-.166.215-.254.41-.254.625z"></path></svg>
                        </base-button>

                        <base-button style="flex-shrink: 0; height: 28px; width: 28px; font-size: 14px; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); padding: 6px;"
                        >
                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="collectionSearch" style="width: 14px; display: block; fill: rgba(55, 53, 47, 0.65); flex-shrink: 0;"><path d="M0 6.35938C0 9.86719 2.85156 12.7188 6.35938 12.7188C7.66406 12.7188 8.85938 12.3203 9.85938 11.6406L13.4531 15.2344C13.6719 15.4609 13.9766 15.5625 14.2812 15.5625C14.9453 15.5625 15.4219 15.0625 15.4219 14.4141C15.4219 14.1016 15.3125 13.8125 15.1016 13.5938L11.5312 10.0156C12.2734 8.99219 12.7188 7.72656 12.7188 6.35938C12.7188 2.85156 9.86719 0 6.35938 0C2.85156 0 0 2.85156 0 6.35938ZM1.65625 6.35938C1.65625 3.76562 3.75781 1.65625 6.35938 1.65625C8.95312 1.65625 11.0625 3.76562 11.0625 6.35938C11.0625 8.95312 8.95312 11.0625 6.35938 11.0625C3.75781 11.0625 1.65625 8.95312 1.65625 6.35938Z"></path></svg>
                        </base-button>

                        <base-button style="font-size: 14px; height: 28px; width: 28px; display: flex; align-items:  center; justify-content: center; flex-shrink: 0; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); line-height: 1; padding: 6px; font-weight: 400;"
                            @click.stop="changeCollectionMenuVisibilityAndHeight(!state.collectionMenuShow)"
                        >
                            <svg role="graphics-symbol" viewBox="0 0 13 3" class="dots" style="height: 3px; display: block; fill: rgba(55, 53, 47, 0.65); flex-shrink: 0;"><g><path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path><path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path><path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path></g></svg>
                        </base-button>

                        <div class="xdoc-collection-view-item-add"
                            style="font-size: 14px; position: relative; display: inline-flex; flex-shrink: 0; border-radius: 3px; overflow: hidden; height: 28px; margin-left: 8px;"
                        >
                            <base-button style="white-space: nowrap; border-radius: 0; border-top-left-radius: 3px; border-bottom-left-radius: 3px; padding-left: 8px; padding-right: 8px; color: white; font-weight: 500;"
                                :hover-style="{background: 'rgb(0, 119, 212)'}"
                                :default-style="{background: 'rgb(35, 131, 226)'}"
                            >
                                New
                            </base-button>

                            <base-button
                                style="width: 24px; align-self: stretch; border-radius: 0; border-top-right-radius: 3px; border-bottom-right-radius: 3px; box-shadow: rgba(55, 53, 47, 0.16) 1px 0px 0px inset;"
                                :hover-style="{background: 'rgb(0, 119, 212)'}"
                                :default-style="{background: 'rgb(35, 131, 226)'}"
                            >
                                <svg role="graphics-symbol" viewBox="0 0 30 30" class="chevronDown" style="width: 10px; height: 100%; display: block; fill: white; flex-shrink: 0; margin-top: 2px;"><polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon></svg>
                            </base-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- collection side menu -->
        <div ref="propertyMenuTopParent" style="position: sticky; height: 0px; left: 0px; z-index: 87;">
            <transition name="fade">
                <collection-side-menu-view v-if="state.displayCollectionSideMenu"
                    @close="state.displayCollectionSideMenu = false"
                    :height=state.sideMenuHeight
                />
            </transition>
        </div>

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

        <div v-if="state.displayCollectionSideMenu" style="padding-left: 96px; padding-right: 96px; border-top: solid 1px rgb(233, 233, 231); height: 12px;"></div>
        <div
            class="notion-presence-container" 
            style="position: absolute; top: 0px; left: 0px; z-index: 89;"
        >
            <div></div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, defineProps, provide } from 'vue';
import CollectionViewTable from '../components/CollectionViewTable.vue';
import BaseButton from '../components/BaseButton.vue';
import CollectionSideMenuView from './CollectionSideMenuView.vue';
import { useStore } from 'vuex';

const props = defineProps({
    collectionId: {
        type: String,
        required: true
    }
})

provide('CollectionId', props.collectionId);

const state = reactive({
    displayCollectionSideMenu: false,
    sideMenuHeight: ''
})

const propertyMenuTopParent = ref('')
const store = useStore()

function changeCollectionMenuVisibilityAndHeight(value) {
    store.commit('collectionSideMenu/setCurrentComponent', {
        collectionId: props.collectionId,
        component: 'main'
    })
    state.displayCollectionSideMenu = value
    setSideMenuHeight()
}

function setSideMenuHeight() {
    state.sideMenuHeight = window.innerHeight - propertyMenuTopParent.value.getBoundingClientRect().top;
}
</script>

<style>
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
</style>