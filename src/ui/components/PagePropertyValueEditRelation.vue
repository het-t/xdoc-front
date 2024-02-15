<template>
    <div style="display: flex; flex-direction: column; min-width: 180px; max-width: calc(-24px + 100vw); height: 100%; max-height: 70vh;">
        <div style="flex-shrink: 0;">
            <div style="display: flex; width: 100%; position: relative; z-index: 2; padding: 6px 10px; font-size: 14px; background: rgba(242, 241, 238, 0.6); box-shadow: rgba(55, 53, 47, 0.16) 0px 1px;">
                <div style="display: flex; align-items: center; border: none; padding: 0px; background: transparent; font-size: inherit; line-height: inherit; flex-grow: 1;">
                    <input type="text"
                        placeholder="Link or create a page..."
                        autocomplete="on"
                        style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px;"
                    >
                </div>
    
                <div style="margin-left: 10px; display: flex; align-items: center; flex-shrink: 1; overflow: hidden; text-overflow: ellipsis;">
                    In  {{ props.pageId }}
                </div>
            </div>
        </div>

        <div class="xdoc-scroller vertical"
            style="z-index: 1; flex-grow: 1; min-height: 0px; transform: translateZ(0px); overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
        >
            <div style="overflow: hidden; max-height: 70vh;">
                <div class="xdoc-scroller vertical"
                    style="z-index: 1; width: 100%; max-height: 300px; position: relative; overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
                >
                    <div style="padding: 4px 0px;"
                        tabindex="0"
                        role="menu"
                    >
                        <div style="padding-top: 0px; padding-bottom: 4px;">
                            <div style="display: flex; padding-left: 12px; padding-right: 9px; margin-top: 6px; margin-bottom: 6px; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); font-size: 12px; font-weight: 500; line-height: 120%; user-select: none; height: 19px; align-items: center;">
                                <div style="display: flex; align-self: center;">1 linked page</div>

                                <div style="margin-left: auto;">
                                    <base-button
                                        style="height: 24px; width: 24px;"
                                    >
                                        <svg role="graphics-symbol" viewBox="0 0 13 3" class="dots" style="width: 16px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; color: rgba(55, 53, 47, 0.45);"><g><path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path><path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path><path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path></g></svg>
                                    </base-button>
                                </div>
                            </div>
                        </div>

                        <div style="padding-top: 0px; padding-bottom: 4px;">
                            <div style="display: flex; padding-left: 12px; padding-right: 9px; margin-top: 6px; margin-bottom: 6px; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); font-size: 12px; font-weight: 500; line-height: 120%; user-select: none; height: 19px; align-items: center;">
                                <div style="display: flex; align-self: center;">Link a page</div>

                                <div style="margin-left: auto;">
                                    <base-button
                                        style="height: 24px; width: 24px;"
                                    >
                                        <svg role="graphics-symbol" viewBox="0 0 13 3" class="dots" style="width: 16px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; color: rgba(55, 53, 47, 0.45);"><g><path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path><path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path><path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path></g></svg>
                                    </base-button>
                                </div>
                            </div>

                            <div style="display: flex; align-items: center; width: calc(100% + 48px); padding-left: 48px; position: relative; left: -48px;">
                                <div style="display: flex; align-items: center; width: 100%;">
                                    <base-button style="position: relative; display: flex; justify-content: unset; margin: 0px 4px; padding: 2px 4px 2px 0px; height: 32px; width: 100%; border-radius: 4px; flex-shrink: 1;">
                                        <div style="display: flex; align-items: center; margin-right: 8px; max-height: 22px; text-overflow: ellipsis; white-space: nowrap;">
                                            <div style="display: flex; align-items: center; line-height: 1.2; height: 20px; font-size: 14px; font-weight: 500; min-width: 0px; margin: 0px; overflow: hidden; white-space: nowrap; padding-left: 6px;">
                                                <div class="xdoc-record-icon notranslate"
                                                    style="display: flex; align-items: center; justify-content: flex-start; height: 20px; width: 20px; border-radius: 0.25em; flex-shrink: 0; margin-right: 4px;" 
                                                >
                                                    <span role="img"><svg role="graphics-symbol" viewBox="0 0 16 16" class="pageEmpty" style="width: 18px; height: 18px; display: block; fill: rgb(145, 145, 142); flex-shrink: 0;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703Z"></path></svg></span>
                                                </div>
                                                
                                                <div class="notranslate"
                                                    style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.16) 100%); background-repeat: repeat-x; background-position: 0px 100%; background-size: 100% 1px; max-width: 100%;"
                                                >
                                                    Untitled
                                                </div>

                                            </div>
                                        </div>
                                        
                                        <div style="position: absolute; gap: 1px; display: inline-flex; right: 6px; top: 4px; height: 24px; width: 24px; padding: 2px;  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; border-radius: 4px;">
                                            <base-button
                                                style="height: 20px; width: 20px;"
                                            >
                                                <svg role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg>
                                                <!-- <svg role="graphics-symbol" viewBox="0 0 14 14" class="checkPartial" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><rect x="1.75" y="6.125" width="10.5" height="1.75"></rect></svg> -->
                                            </base-button>
                                        </div>
                                    </base-button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div>
        </div>

        <footer style="flex-shrink: 0;"></footer>
    </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import { defineProps } from 'vue';

const props = defineProps({
    pageId: {
        type: String,
        required: true
    },
    collectionId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    }
})
</script>