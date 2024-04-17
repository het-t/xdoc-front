<template>
    <div class="xdoc-table-view"
        style="position: relative; float: left; min-width: 100%; user-select: none; font-variant-numeric: lining-nums tabular-nums; padding-bottom: 180px; padding-left: 96px; padding-right: 96px;"
    >
        <div :data-block-id="props.blockId"
            class="xdoc-selectable xdoc-collection_view-block"
            style="position: relative;"
        >
            <div class="xdoc-table-view-header-row"
                style="display: flex; position: absolute; background: white; z-index: 86; height: 33px; color: rgba(55, 53, 47, 0.65); box-shadow: white -3px 0px 0px, rgb(233, 233, 231) 0px 1px 0px; border-top: 1px solid rgb(233, 233, 231); min-width: calc((100% - 192px) - 0px); left: 0px; right: 0px;"
            >
                <div style="position: sticky; left: 0px; z-index: 83;">
                    <div style="background: white; border-bottom: rgb(233, 233, 231); height: 100%; opacity: 0; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                        <label style="height: 100%; align-items: flex-start; justify-content: center; display: flex; cursor: pointer; z-index: 1; opacity: 0; padding-left: 0px; padding-right: 0px; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                            <div style="width: 32px; height: 31px; display: flex; justify-content: center; align-items: center; padding-right: 0px;">
                                <input type="checkbox"
                                    style="width: 14px; height: 14px; cursor: pointer; position: relative; right: 2px;"
                                >
                            </div>
                        </label>
                    </div>
                </div>

                <div style="display: inline-flex; margin: 0px;">
                    <div 
                        v-for="(propertyObject) in collectionViewPropertiesRecordValueInStore"
                        :key="propertyObject.property"
                        style="display: flex; flex-direction: row;"
                    >
                        <div style="display: flex; position: relative;">
                            <div class="xdoc-table-view-header-cell"
                                style="display: flex; flex-shrink: 0; overflow: hidden; font-size: 14px; padding: 0px; width: 276px; border-right: 1px solid rgb(233, 233, 231);"
                            >
                                <div role="button"
                                    tabindex="0"
                                    style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; width: 100%; height: 100%; padding-left: 8px; padding-right: 8px;"
                                >
                                    <div style="display: flex; align-items: center; line-height: 120%; min-width: 0px; font-size: 14px;">
                                        <div style="margin-right: 6px;">
                                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="typesTitle" style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path></svg>
                                        </div>

                                        <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                        >{{ getCollectionPropertyById(propertyObject.property).name }}</div>
                                    </div>
                                </div>
                            </div>

                            <div style="position: absolute; right: 0px; width: 0px; flex-grow: 0; z-index: 1;"></div>
                        </div>
                    </div>
                </div>

                <div role="button"
                    tabindex="0"
                    class="xdoc-table-view-add-column"
                    style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; justify-content: flex-start; width: 32px;"
                >
                    <div style="display: flex; width: 32px; height: 100%; align-items: center; justify-content: center;"></div>
                </div>

                <div role="button"
                    tabindex="0"
                    class="xdoc-table-view-add-column"
                    style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; justify-content: flex-start;  flex-grow: 1; width: 32px;"
                >
                    <div style="display: flex; width: 32px; height: 100%; align-items: center; justify-content: center;"></div>
                </div>
            </div>

            <div style="height: 34px;"></div>
            
            <div style="position: relative; min-width: calc((100% - 192px) - 0px);">
                <div class="xdoc-table-view-frozen-column-repositioner"
                    style="z-index: 87; display: flex; position: absolute; width: 100%; height: 100%; cursor: grab; pointer-events: none;"
                >
                    <div style="display: flex; width: calc(100% - 64px); height: 100%;">
                        <div style="position: sticky; left: 0px; height: 100%;">
                            <div style="position: absolute; left: 23px; z-index: 30; height: 100%; opacity: 0; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                                <div style="position: absolute; left: -3px; top: 0px; width: 8px; pointer-events: auto; cursor: grab; height: 100%;"></div>
                                <div style="position: absolute; top: 0px; width: 1px; height: 100%; background: rgb(132, 177, 206); opacity: 0;"></div>
                                <div style="position: absolute; left: -1px; top: 0px; width: 2px; height: 100%; background: rgb(199, 198, 196);"></div>
                                <div style="position: absolute; left: -2px; top: 7.6px; width: 4px; height: 28px; background: rgb(91, 151, 189); border-radius: 3px;"></div>
                            </div>
                        </div>

                        <div style="position: absolute; top: 0px; width: 1px; height: 100%; background: rgb(132, 177, 206); left: 23px; opacity: 0;"></div>
                    </div>
                </div>

                <template
                    v-for="({id: pageId, nestingLevel}, rowIndex) in props.items"
                    :key="pageId"
                >
                    <base-button v-if="pageId == 'btn'"
                        @click.stop="handleAddNewItem(rowIndex, nestingLevel)"
                        :hover-style="{'background': 'rgba(55, 53, 47, 0.08)', width: '100%', display: 'flex', 'align-items': 'center', 'justify-content': 'unset', height: '32px', 'padding-left': '8px', 'font-size': '14px', 'line-height': '20px', left: 0, right: 0}"
                        :default-style="{ width: '100%', display: 'flex', 'align-items': 'center', 'justify-content': 'unset', height: '32px', 'padding-left': '8px', 'font-size': '14px', 'line-height': '20px', 'background': 'white', left: 0, right: 0 }"
                        :style="{paddingLeft: `${56+nestingLevel*28}px`, borderBottom: '1px solid rgb(233, 233, 231)'}"
                        class="xdoc-table-view-add-row"
                    >
                        <span style="display: inline-flex; position: sticky; align-items: center; left: 104px; color: rgba(55, 53, 47, 0.5);">
                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; margin-left: -1px; margin-right: 6px;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg>
                            New sub-item
                        </span>
                    </base-button>

                    <template v-else>
                        <div 
                            :data-block-id="pageId" 
                            class="xdoc-selectable xdoc-page-block xdoc-collection-item"
                            style="display: flex; height: calc(100% + 2px); border-bottom: 1px solid rgb(233, 233, 231);"
                            :style="rowSelectStatus[pageId] ? { position: 'relative' } : {}"
                        >
                            <base-data-provider
                                :pointer="{
                                    id: pageId,
                                    table: 'block',
                                    spaceId: 'f2cf1fd1-8789-4ddd-9190-49f41966c446'
                                }"
                                v-slot="{ recordValueDeferInStore }"
                            >
                                <collection-view-table-row
                                    v-if="recordValueDeferInStore"
                                    @table-view-row-selected="setRowSelectStatus(pageId, $event.value === true ? 2 : 3)"
                                    @mouseover="setRowSelectStatus(pageId, 1)"
                                    @mouseleave="setRowSelectStatus(pageId, 0)"
                                    :select-checkbox-opacity="rowSelectStatus[pageId] ? 1 : 0"
                                >
                                    <collection-view-table-cell v-for="(propertyFormat, colIndex) in collectionViewPropertiesRecordValueInStore" :key="`r${rowIndex}c${colIndex}`" class="xdoc-table-view-cell"
                                        :data-row-index="rowIndex"
                                        :data-col-index="colIndex"
                                    >    
                                        <div v-if="colIndex === 0" style="padding-top: 4px; display: flex; margin-right: 4px;">
                                            <div v-if="nestingLevel > 0"
                                                :style="{ width: `${nestingLevel*28}px`}"    
                                            ></div>
                                            <base-button style="height: 24px; width: 24px;"
                                                @click.stop="handleCollectionItemExpand(pageId, rowIndex+1, nestingLevel+1)"
                                            >
                                                <svg v-if="rowSelectStatus[pageId] === 1"
                                                    :style="expandedItemsIds[pageId] ? { transform: 'rotateZ(180deg)' } : { transform: 'rotateZ(90deg)' }"
                                                    role="graphics-symbol" viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em; display: block; fill: rgba(55, 53, 47, 0.85); flex-shrink: 0; transition: transform 200ms ease-out 0s; opacity: 1;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg>
                                            </base-button>
                                        </div>
    
                                        <collection-view-table-property-value
                                            @open-record="handleOpenRecord(pageId)"
                                            :page-id="pageId"
                                            :collection-id="props.collectionId"
                                            :property-id="propertyFormat.property"
                                            :type="getCollectionPropertyById(propertyFormat.property).type"
                                            space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
                                            :style="colIndex === 0 ? { 'padding-left': 0 } : {}"
                                            style="flex-grow: 1; width: unset;"
                                            :key="pageId === dialogPropertyValue.pageId && propertyFormat.property === dialogPropertyValue.propertyId 
                                                ? handlePropertyValueRerender(1) 
                                                : handlePropertyValueRerender(0)
                                            "
                                        />
                                    </collection-view-table-cell>      
                                </collection-view-table-row>
                                
                                <div class="xdoc-selectable-halo"
                                    v-if="rowSelectStatus[pageId] === 2"
                                    style="position: absolute; pointer-events: none; inset: 0; background: rgba(35, 131, 226, 0.14); z-index: 86; border-radius: 0px; opacity: 1; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;"
                                ></div>
                            </base-data-provider>
                            <div style="display: flex; justify-content: flex-start; flex-grow: 1; width: 64px;"></div>
                        </div>
    
                        <div
                            :data-block-id="pageId"
                            class="xdoc-selectable xdoc-page-block xdoc-collection-item"
                            style="display: flex; height: calc(100% + 2px); border-bottom: 1px solid rgb(233, 233, 231);"
                            :style="rowSelectStatus[pageId] ? { position: 'relative' } : {}"
                        ></div>
                    </template>
                </template>
            </div>


            <div style="width: 1668px;"></div>

            <base-button
                @click.stop="handleAddNewItem"
                :hover-style="{'background': 'rgba(55, 53, 47, 0.08)', width: '100%', display: 'flex', 'align-items': 'center', 'justify-content': 'unset', height: '32px', 'padding-left': '8px', 'font-size': '14px', 'line-height': '20px', left: 0, right: 0}"
                :default-style="{width: '100%', display: 'flex', 'align-items': 'center', 'justify-content': 'unset', height: '32px', 'padding-left': '8px', 'font-size': '14px', 'line-height': '20px', 'background': 'white', left: 0, right: 0 }"
                class="xdoc-table-view-add-row"
            >
                <span style="display: inline-flex; position: sticky; align-items: center; left: 104px; color: rgba(55, 53, 47, 0.5);">
                    <svg role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; margin-left: -1px; margin-right: 6px;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg>
                    New
                </span>
            </base-button>

            <!-- <div contenteditable="false"
                class="pseudoSelection"
                data-content-editable-void="true"
                style="user-select: none; --pseudoSelection--background: transparent; display: flex; position: absolute; background: white; z-index: 83; font-size: 14px; height: 43px; min-width: 100%; clip-path: polygon(0% -20%, 100% -20%, 100% 100%, 0% 100%); left: 0px; border-top: 1px solid rgb(233, 233, 231); transform: translate3d(0px, -288px, 0px);"
            ></div> -->

            <div style="height: 32px;"></div>
        </div>

        <div></div>
    </div>
</template>

<script setup>
import CollectionViewTableRow from './CollectionViewTableRow.vue';
import BaseDataProvider from './BaseDataProvider.vue';
import BaseButton from './BaseButton.vue';
import { computed, defineProps, defineEmits, ref, watch } from 'vue';
import { useRecordValuesStore } from '@/stores/recordValues';
import CollectionViewTableCell from './CollectionViewTableCell.vue';
import CollectionViewTablePropertyValue from './CollectionViewTablePropertyValue.vue';
import { useRouter } from 'vue-router';
import uuid from '@/helpers/globals/uuid';
import { transformToStandardUUIDFormat } from '../helpers/router/transformToStandardUUIDFormat';
import { CollectionView } from '@/entities/CollectionView';
import { useGeneralStore } from '@/stores/general';

const emits = defineEmits([
    "add-items",
    "collapse"
]);

const props = defineProps({
    collectionId: {
        type: String,
        required: true
    },
    collectionViewId: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const collectionRecordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue({
        id: props.collectionId,
        table: "collection",
        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    })
})

const collectionViewRecordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue({
        id: props.collectionViewId,
        table: "collection_view",
        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    })
})
const collectionViewPropertiesRecordValueInStore = computed(function() {
    const collectionPropertyIds = Object.keys(collectionRecordValueInStore.value.schema);

    return CollectionView.prototype.getProperties.call(
        collectionViewRecordValueInStore.value
    ).filter(({property}) => {
        return collectionPropertyIds.indexOf(property) !== -1;
    });
})

function getCollectionPropertyById(id) {
    return collectionRecordValueInStore.value.schema[id];
}

const dialogPropertyValue = computed(function () {
    return useGeneralStore().propertyValueDialog;
});

function handlePropertyValueRerender(needRerender) {
    if(needRerender === 1) {
        const generalStore = useGeneralStore();

        generalStore.propertyValueDialog = {
            pageId: null,
            propertyId: null
        }
    }

    return needRerender;
}

function emitAddItems(items, index = null, makeApiCallToSetRecord = true) {
    emits("add-items", {
        items,
        index,
        makeApiCallToSetRecord
    });
}

function handleAddNewItem(index = null, nestingLevel = 0) {
    const id = transformToStandardUUIDFormat(uuid());
    
    emitAddItems(
        [{ id, nestingLevel }],
        index
    );
}

const expandedItemsIds = ref({});

watch(
    () => props.items,
    (newVal) => {
        for(let itemId in expandedItemsIds.value) {
            if(newVal.findIndex(({id}) => id === itemId) === -1) expandedItemsIds.value[itemId] = false;
        }
    },
    { deep: true}
);

function handleCollectionItemExpand(pageId, index, nestingLevel) {
    const itemRecordValue = recordValuesStore.getRecordValue({
        id: pageId,
        table: "block",
        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    });

    const subItemPropertyId = collectionRecordValueInStore.value.format.subitem_property;

    let itemSubItemsPropertyValue = itemRecordValue?.properties?.[subItemPropertyId]

    let subItemsIds = [];

    itemSubItemsPropertyValue?.map((subItemPointer) => {
        console.log(subItemPointer)
        if(subItemPointer[0] === '‣') {
            subItemsIds.push(subItemPointer[1][0][1]);
        }
    })

    if(!subItemsIds?.length) subItemsIds = [];

    if (expandedItemsIds.value[pageId]) {
        expandedItemsIds.value[pageId] = false;
        emits("collapse", {
            itemId: pageId
        })
        return;
    }

    expandedItemsIds.value[pageId] = true;

    const subItems = subItemsIds.map((id) => {
        return {
            id,
            nestingLevel
        }
    });

    subItems.push({
        id: "btn",
        pageId,
        nestingLevel
    });

    emitAddItems(
        subItems.length >= 0 ? subItems : [],
        index,
        false
    );
}

// 1-hover 2-selected 3-unselect
const rowSelectStatus = ref({});
const router = useRouter();

function setRowSelectStatus(pageId, status) {
    if (rowSelectStatus.value[pageId] === 2) {
        if (status === 0 || status === 1) return;
    }
    rowSelectStatus.value[pageId] = status;
}

function handleOpenRecord(pageId) {
    router.push({ query: { p: pageId.replaceAll("-", ""), pm: 's' } });
}
</script>