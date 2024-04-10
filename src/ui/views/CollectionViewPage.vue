<template>
    <base-data-provider
        :pointer="{
            id: collectionId,
            table: 'collection',
            spaceId: 'f2cf1fd1-8789-4ddd-9190-49f41966c446'
        }"
        v-slot="{ recordValueInStore: collectionRecordValueInStore}"
    >
        <div 
            v-if="collectionRecordValueInStore !== undefined"
            class="xdoc-scroller vertical horizontal"
            style="z-index: 1; display: flex; flex-direction: column; flex-grow: 1; position: relative; margin-bottom: 0;"
            :style="`${state.displayCollectionSideMenu ? 'overflow: auto hidden; margin-right: 10px;' : 'overflow: auto; margin-right: 0;'}`"
        >
            <div style="position: absolute; top: 0; left: 0;">
                <div></div>
            </div>

            <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0; position: sticky; left: 0px;">
                <div
                    class="pseudoSelection"
                    data-content-editable-void="true"
                    style="user-select: none; --psuedoSelection--background: transparent; width: 100%; display: flex; flex-direction: column; align-items: center; flex-shrink: 0; flex-grow: 0; position: sticky; left: 0px; z-index: 2;"
                ></div>

                <div style="max-width: 100%; padding-left: calc(96px + env(safe-area-inset-left)); width: 100%; transition-property: width; transition-duration: 270ms; transition-timing-function: ease;">
                    <div 
                        class="xdoc-page-controls"
                        style="display: flex; justify-content: flex-start; flex-wrap: wrap; margin-top: 4px; margin-bottom: 4px; margin-left: -1px; color: rgba(55, 53, 47, 0.5); font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; height: 24px; pointer-events: auto;"
                    ></div>

                    <div style="padding-right: calc(96px + env(safe-area-inset-right)); margin-bottom: 8px;">
                        <base-button class="xdoc-record-icon notranslate"
                            aria-label="Change page icon" style="user-select: none;"
                        ></base-button>
                        
                        <div style="display: flex; align-items: flex-start;">
                            <div>
                                <div :data-block-id="props.pageId"
                                    style="color: rgb(55, 53, 47); font-weight: 700; line-height: 1.2; font-size: 32px; cursor: text; display: flex; align-items: center;"
                                >
                                    <h1 contenteditable="true"
                                        placeholder="Untitled"
                                        style="max-width: 100%; width: 100%; font-size: 1em; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); font-weight: inherit; margin: 0;"
                                    >{{ collectionRecordValueInStore.name?.[0]?.[0] }}</h1>
                                </div>
                            </div>
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
                <div :data-block-id="collectionId"
                    class="xdoc-selectable xdoc-collection_view-block"
                >
                    <div style="display: flex; align-items: center; height: 40px; left: 96px; width: 100%;">
                        <!-- collection-tabs -->
                        <collection-views-tabs-list
                            :collection-id="props.pageId"
                            space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
                        ></collection-views-tabs-list>

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
                                    @click.stop="handleClickNew"
                                    :hover-style="{background: 'rgb(0, 119, 212)'}"
                                    :default-style="{background: 'rgb(35, 131, 226)'}"
                                >
                                    New
                                </base-button>

                                <base-button
                                    @click.stop="handleDisplayTemplatesList"
                                    :hover-style="{background: 'rgb(0, 119, 212)'}"
                                    :default-style="{background: 'rgb(35, 131, 226)'}"
                                    style="width: 24px; align-self: stretch; border-radius: 0; border-top-right-radius: 3px; border-bottom-right-radius: 3px; box-shadow: rgba(55, 53, 47, 0.16) 1px 0px 0px inset;"
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
                    <collection-side-menu-view 
                        v-if="state.displayCollectionSideMenu && noComponentInSideMenu"
                        @close="state.displayCollectionSideMenu = false"
                        :collection-id="collectionId"
                        :collection-view-id="currentCollectionViewId"
                        :height=state.sideMenuHeight
                    />
                </transition>
            </div>

            <!-- collection view -->
            <div contenteditable="false"
                data-content-editable-void="true"
                style="flex-grow: 1; flex-shrink: 0; display: flex; flex-direction: column; position: relative;"
            >
                <div class="xdoc-scroller xdoc-collection-view-body"
                    style="z-index: 1; flex-grow: 1; flex-shrink: 0; margin-right: 0px; margin-bottom: 0px;"
                    v-if="isQueryCollectionRequestComplete"
                >

                    <base-data-provider
                        :pointer="{
                            id: currentCollectionViewId,
                            table: 'collection_view',
                            spaceId: 'f2cf1fd1-8789-4ddd-9190-49f41966c446'
                        }"
                        v-slot="{ recordValueInStore}"
                    >
                        <template v-if="recordValueInStore">          
                            <collection-view-table 
                                v-if="recordValueInStore.type === 'table'"  
                                @add-items="addRecordInItemsList"
                                @collapse="handleItemCollapse($event)"
                                :items="collectionItems"
                                :collection-id="collectionId"
                                :collection-view-id="currentCollectionViewId"
                            ></collection-view-table>
                        </template>
                    </base-data-provider>
                </div>
            </div>

            <div v-if="state.displayCollectionSideMenu && noComponentInSideMenu" style="padding-left: 96px; padding-right: 96px; border-top: solid 1px rgb(233, 233, 231); height: 12px;"></div>
            
            <div
                class="xdoc-presence-container" 
                style="position: absolute; top: 0px; left: 0px; z-index: 89;"
            >
                <div></div>
            </div>
        </div>
    </base-data-provider>
</template>

<script setup>
import BaseDataProvider from '../components/BaseDataProvider.vue';
import CollectionViewTable from '../components/CollectionViewTable.vue';
import BaseButton from '../components/BaseButton.vue';
import CollectionSideMenuView from './CollectionSideMenuView.vue';
import CollectionViewsTabsList from "../components/CollectionViewsTabsList.vue"
import { reactive, ref, defineProps, computed, onMounted } from 'vue';
import { useCollectionsStore } from '@/stores/collections';
import { useRecordValuesStore } from '@/stores/recordValues';
import { transformToStandardUUIDFormat } from '../helpers/router/transformToStandardUUIDFormat';
import uuid from '@/helpers/globals/uuid';
import { useGeneralStore } from '@/stores/general';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { makeOperation } from '@/services/transactions/factories/makeOperation';

const props = defineProps({
    pageId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const collectionViewPageRecordValue = recordValuesStore.getRecordValue({
    id: props.pageId,
    table: "block",
    spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
})

const collectionId = collectionViewPageRecordValue.collection_id;

const isQueryCollectionRequestComplete = ref(false);
const collectionItems = ref([]);

onMounted(async function() {
    const queryCollectionResults = await useTransactionsQueue().performQueryCollection(collectionId);
    collectionItems.value = queryCollectionResults.result.reducerResults.collection_group_results.blockIds.map((id) => {
        return {
            id,
            nestingLevel: 0
        }
    });

    isQueryCollectionRequestComplete.value = true;
});

const currentCollectionViewId = ref(collectionViewPageRecordValue.view_ids[0]);

const currentCollectionViewRecordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue({
        id: currentCollectionViewId.value,
        table: "collection_view",
        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    })
})

const collectionStore = useCollectionsStore();

const state = reactive({
    displayCollectionSideMenu: false,
    sideMenuHeight: ''
})

const propertyMenuTopParent = ref('')

const noComponentInSideMenu = computed(function () {
    return collectionStore.getCurrentComponent !== undefined
})

function changeCollectionMenuVisibilityAndHeight(value) {
    collectionStore.setCurrentComponent('main');
    state.displayCollectionSideMenu = value
    setSideMenuHeight()
}

function setSideMenuHeight() {
    state.sideMenuHeight = window.innerHeight - propertyMenuTopParent.value.getBoundingClientRect().top;
}
//

// functionality to handle new record in collection
function addRecordInItemsList({ items, index = null, makeApiCallToSetRecord }) {
    if (index === null || index === undefined) {
        collectionItems.value.push(...items);
        return;
    }

    const before = collectionItems.value.slice(0, index);
    const after = collectionItems.value.slice(index);

    collectionItems.value = [
        ...before,
        ...items,
        ...after
    ];

    if(makeApiCallToSetRecord) {
        const transactionQueue = useTransactionsQueue();

        items.forEach((item) => {
            const itemPointer = {
                id: item.id,
                table: "block",
                spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
            }

            const operations = [
                makeOperation(
                    "set",
                    {
                        id: item.id,
                        type: "page",
                        space_id: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
                    },
                    [],
                    itemPointer
                )
            ];

            if(item.nestingLevel !== 0) {
                console.log("set parent operation should be performed");
            }

            operations.push(
                makeOperation(
                    "update",
                    {
                        created_by_id: "ca5f99c6-879b-4562-bd41-6651fc8d2099",
                        created_by_table: "xdoc_user",
                        created_time: 1712676869405,
                        last_edited_time: 1712676869405,
                        last_edited_by_id: "ca5f99c6-879b-4562-bd41-6651fc8d2099",
                        last_edited_by_table: "xdoc_user"
                    },
                    [],
                    itemPointer
                )
            );
            
            transactionQueue.enqueue(
                makeTransaction({
                    spaceId: "",
                    debug: {
                        userAction: "CollectionViewPage=>addRecordInItemsList"
                    },
                    operations
                })
            )
        })
    }

}

function handleItemCollapse({itemId}) {
    let index = collectionItems.value.findIndex(({id}) => id === itemId);
    if (index < 0) return;

    const nestingLevel = collectionItems.value[index].nestingLevel;
    let item = collectionItems.value[++index];

    while(item && (item.nestingLevel > nestingLevel)) {
        if(item.nestingLevel > nestingLevel) {
            collectionItems.value.splice(index, 1);
        }
        else break;
        item = collectionItems.value[index];
    }
}

function handleClickNew() {
    const blockId = transformToStandardUUIDFormat(uuid());
    const spaceId = "f2cf1fd1-8789-4ddd-9190-49f41966c446";

    recordValuesStore.setRecordValue(
        blockId,
        "block",
        { id: blockId },
        spaceId
    );

    const blockPointer = {
        id: blockId,
        table: "block",
        spaceId
    };

    useTransactionsQueue().enqueue(
        makeTransaction({
            spaceId: "",
            debug: {
                userAction: "CollectionViewPage->handleClickNew"
            },
            operations: [
                makeOperation(
                    "set",
                    {
                        type: "page",
                        space_id: spaceId,
                        id: blockId,
                        // version: 1
                    },
                    [],
                    blockPointer
                ),
                makeOperation(
                    "setParent",
                    {
                        parentId: collectionId,
                        parentTable: "collection"
                    },
                    [],
                    blockPointer
                ),
                makeOperation(
                    "listBefore",
                    {
                        id: blockId,
                        before: currentCollectionViewRecordValueInStore.value.page_sort[0]
                    },
                    ["page_sort"],
                    {
                        id: currentCollectionViewId.value,
                        table: "collection_view",
                        spaceId
                    }
                ),
                makeOperation(
                    "update",
                    {
                        created_by_id: "",
                        created_by_table: "xdoc_user",
                        created_time: Date.now(),
                        last_edited_time: Date.now(),
                        last_edited_by_id: "",
                        last_edited_by_table: "xdoc_user"
                    },
                    [],
                    blockPointer
                )
            ]
        })
    );
}

//fetches templates
function handleDisplayTemplatesList(e) {
    const generalStore = useGeneralStore();

    generalStore.setCurrentComponentInDefaultOverlay("collection_templates_list", {
        collectionId,
        collectionViewId: currentCollectionViewId,
        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    });

    const measures = e.target.getBoundingClientRect();

    generalStore.dialog.width = measures?.width;
    generalStore.dialog.top = measures?.top;
    generalStore.dialog.left = measures?.left;
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

<style scoped>
h1::after {
    -webkit-text-fill-color: rgba(55, 53, 47, 0.15);
}
</style>