<template>
    <dialog-view>
        <div style="display: flex; flex-direction: column; width: 360px; min-width: 180px; max-width: calc(-24px + 100vw); height: 100%; max-height: 70vh;">
            <div style="flex-shrink: 0;">
                <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px; margin-top: 6px;">
                    <div style="margin-left: 12px; margin-right: 6px; min-width: 0px; flex: 1 1 auto;">
                        <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            <div style="position: relative; width: 100%;">
                                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; position: relative; inset: 0px;">Templates for<span style="margin-left: 4px; font-weight: 600;">Paid tasks</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="xdoc-scroller vertical" style="z-index: 1; flex-grow: 1; min-height: 0px; transform: translateZ(0px); overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;">
                <div id=":r10:" tabindex="0" role="menu">
                    <div style="padding-top: 6px; padding-bottom: 6px;">
                        <div style="margin: 0px;">
                            <div style="display: flex; flex-direction: column; cursor: grab;">
                                <base-data-provider
                                    v-for="template in templates"
                                    :key="template.id"
                                    :block-id="template.id"
                                    :space-id="props.spaceId"
                                    table="block"
                                    v-slot="{ recordValueDeferInStore}"
                                >
                                    <base-button 
                                        @click.stop="handleTemplateSelect(template.id)"
                                        style="margin-right: 4px; margin-left: 4px;"
                                        v-if="recordValueDeferInStore"
                                    >
                                        <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                                            <div style="display: flex; align-items: center; justify-content: center; width: 18px; height: 24px; flex-shrink: 0; cursor: -webkit-grab; margin-left: 8px; margin-right: -4px;">
                                                <svg role="graphics-symbol" viewBox="0 0 10 10" class="dragHandle" style="width: 12px; height: 12px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;">
                                                    <path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path>
                                                </svg>
                                            </div>
                                            
                                            <div style="display: flex; align-items: center; justify-content: center; margin-left: 10px; margin-right: 4px;">
                                                <div class="xdoc-record-icon notranslate" style="display: flex; align-items: center; justify-content: center; height: 20px; width: 20px; border-radius: 0.25em; flex-shrink: 0;">
                                                    <span role="img">
                                                        <svg role="graphics-symbol" viewBox="0 0 16 16" class="page" style="width: 18px; height: 18px; display: block; fill: rgb(145, 145, 142); flex-shrink: 0;">
                                                            <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div style="margin-left: 6px; margin-right: 6px; min-width: 0px; flex: 1 1 auto;">
                                                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                                        <div class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                            {{ getTemplatePageTitle(template.id) }}
                                                        </div>
                                                        
                                                        <span style="display: flex; justify-content: space-between; align-items: center;"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div style="margin-left: auto; margin-right: 12px; min-width: 0px; flex-shrink: 0;">
                                                <base-button class="notion-template-picker-item-action-menu notion-fadein" style="border-radius: 4px; width: 24px; height: 24px; margin-right: -6px; padding: 4px;">
                                                    <svg role="graphics-symbol" viewBox="0 0 13 3" class="dots" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><g><path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path><path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path><path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path></g></svg>
                                                </base-button>
                                            </div>
                                        </div>
                                    </base-button>
                                </base-data-provider>
                            </div>
                        </div>

                        <base-button 
                            @click.stop="handleTemplateSelect(null)"
                            style="width: calc(100% - 8px); margin-right: 4px; margin-left: 4px;"
                        >
                            <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                                <div style="display: flex; align-items: center; justify-content: center; width: 18px; height: 24px; flex-shrink: 0; cursor: -webkit-grab; margin-left: 8px; margin-right: -4px;"></div>
                                
                                <div style="display: flex; align-items: center; justify-content: center; margin-left: 10px; margin-right: 4px;">
                                    <div style="display: flex; align-items: center; justify-content: center; height: 20px; width: 20px; border-radius: 0.25em; flex-shrink: 0;">
                                        <span role="img">
                                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="page" style="width: 18px; height: 18px; display: block; fill: rgb(145, 145, 142); flex-shrink: 0;">
                                                <path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                
                                <div style="margin-left: 6px; margin-right: 6px; min-width: 0px; flex: 1 1 auto;">
                                    <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                        <div style="display: flex; justify-content: space-between; align-items: center;">
                                            <div class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                Empty
                                            </div>
                                            
                                            <span style="display: flex; justify-content: space-between; align-items: center;">
                                                <span style="font-size: 12px; font-weight: 500; color: rgba(55, 53, 47, 0.65);">DEFAULT</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style="margin-left: auto; margin-right: 12px; min-width: 0px; flex-shrink: 0;">
                                    <base-button class="notion-template-picker-item-action-menu notion-fadein" style="border-radius: 4px; width: 24px; height: 24px; margin-right: -6px; padding: 4px;">
                                        <svg role="graphics-symbol" viewBox="0 0 13 3" class="dots" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><g><path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path><path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path><path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path></g></svg>
                                    </base-button>
                                </div>
                            </div>
                        </base-button>
                    </div>

                    <div style="padding-top: 6px; padding-bottom: 6px; box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px; margin-top: 1px;">
                        <base-menu-item>
                            <div style="display: flex; line-height: 120%; align-items: center; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                                <div style="display: flex; align-items: center; justify-content: center; margin-left: 10px; margin-right: 4px;">
                                    <div style="width: 16px;"><svg role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="width: 100%; height: 100%; display: block; fill: rgb(35, 131, 226); flex-shrink: 0;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg></div>
                                </div>

                                <div style="margin-right: 12px; margin-left: 6px; min-width: 0px; flex: 1 1 auto;">
                                    <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                        <div style="color: rgb(35, 131, 226); fill: rgb(35, 131, 226);">New template</div>
                                    </div>
                                </div>
                            </div>
                        </base-menu-item>
                    </div>
                </div>
            </div>
        </div>
    </dialog-view>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import BaseMenuItem from './BaseMenuItem.vue';
import DialogView from './DialogView.vue';
import BaseDataProvider from './BaseDataProvider.vue';
import { useRecordValuesStore } from '@/stores/recordValues';
import { useGeneralStore } from '@/stores/general';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { defineProps, onMounted } from 'vue';
import { transformToStandardUUIDFormat } from '../helpers/router/transformToStandardUUIDFormat';
import uuid from '@/helpers/globals/uuid';
import { set as setUsecase } from "@/usecases/set";
import { setParent as setParentUsecase } from "@/usecases/setParent";
import { listBefore as listBeforeUsecase } from "@/usecases/listBefore";
import { update as updateUsecase } from "@/usecases/update";
import { useRouter } from 'vue-router';
import { ref } from "vue";

const router = useRouter();

const props = defineProps({
    collectionId: {
        type: String,
        required: true
    },
    collectionViewId: {
        type: String,
        required: true
    },
    spaceId: {
        type: String,
        required: true
    }
})

const templates = ref([]);

onMounted(async function() {
    const searchResults = await useTransactionsQueue().performSearch({
        type: "BlocksInCollection"
    })

    templates.value = searchResults.results;
})

const recordValueStore = useRecordValuesStore();

function getTemplatePageById(templatePageId) {
    return recordValueStore.getRecordValue(
        templatePageId,
        'block',
        props.spaceId
    )}

function getTemplatePageTitle(templatePageId) {
    return getTemplatePageById(templatePageId).properties.title[0][0];
}

function handleTemplateSelect(templatePageId) {
    if (templatePageId === null) {
        console.log("empty template")
    }
    else {
        const blockId = transformToStandardUUIDFormat(uuid());

        recordValueStore.setRecordValue(
            blockId,
            "block",
            { id: blockId },
            props.spaceId
        );
        
        setUsecase(
            {
                type: "page",
                space_id: props.spaceId,
                id: blockId,
                // version: 1
            },
            [],
            {
                table: "block",
                id: blockId,
                spaceId: props.spaceId
            }
        );
        
        setParentUsecase(
            {
                parentId: props.collectionId,
                parentTable: "collection"
            },
            [],
            {
                table: "block",
                id: blockId,
                spaceId: props.spaceId
            }
        );

        const collectionViewRecordValueInStore = recordValueStore.getRecordValue(
            props.collectionViewId,
            "collection_view",
            props.spaceId
        );

        listBeforeUsecase(
            {
                id: blockId,
                before: collectionViewRecordValueInStore.page_sort[0]
            },
            ["page_sort"],
            {
                id: props.collectionViewId,
                table: "collection_view",
                spaceId: props.spaceId
            }
        );

        setUsecase(
            getTemplatePageTitle(templatePageId),
            [],
            {
                table: "block",
                id: blockId,
                spaceId: props.spaceId
            }
        );

        updateUsecase(
            {
                copied_from: templatePageId
            },
            [],
            {
                table: "block",
                id: blockId,
                spaceId: props.spaceId
            }
        );

        updateUsecase(
            {
                copied_from_pointer: {
                    id: templatePageId,
                    table: "block"
                }
            },
            ["format"],
            {
                id: blockId,
                table: "block",
                spaceId: props.spaceId
            }
        );

        updateUsecase(
            {
                is_template: null
            },
            [],
            {
                id: blockId,
                table: "block",
                spaceId: props.spaceId
            }
        );

        const currentTime = Date.now();

        updateUsecase(
            {
                created_by_id: "",
                created_by_table: "xdoc_user",
                created_time: currentTime,
                last_edited_time: currentTime,
                last_edited_by_id: "",
                last_edited_by_table: "xdoc_user"
            },
            [],
            {
                id: blockId,
                table: "block",
                spaceId: props.spaceId
            }
        );

        router.push({ query: { p: blockId.replaceAll('-', ''), pm: 's' } });
        
        handleCloseTemplatesList();
    }
}

const generalStore = useGeneralStore();

function handleCloseTemplatesList() {
    generalStore.setCurrentComponentInDefaultOverlay(null, null);
}
</script>