<template>
    <div>
        <div 
            @click.self.stop="handleClickOutsideDialog"
            style="position: fixed; top: 0; right: 0; height: 100vh; width: 100vw;"
        ></div>

        <div
            style="position: fixed; pointer-events: none;"
            :style="{ top: `${dialog.top}px`, left: `${dialog.left}px` }"
        >
            <div style="height: 0;" :style="{ width: `${dialog.width}px`}"></div>

            <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;">
                <div style="position: relative; top: 100%; pointer-events: auto;">
                    <div style="display: flex; align-items: center; position: relative; flex-direction: column-reverse; transform-origin: 0% top; left: 0; top: 0;">
                        <div role="dialog" style="border-radius: 6px; background: white; backdrop-filter: none; position: relative; max-width: calc(-24px + 100vw); box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px; overflow: visible; width: 272.2px; min-height: 54px; max-height: 710px; display: flex; flex-direction: column;">
                            <div style="display: flex; flex-direction: column; overflow-y: auto; flex-grow: 1; height: 100%;">
                                <!-- for multiselect -->
                                <page-property-value-edit-multiselect 
                                    v-if="propertyType === 'multi_select' || propertyType === 'select'"
                                    :multiselect="propertyType === 'multi_select' ? true : false"
                                    :page-id="props.pageId"
                                    :property-id="props.propertyId"
                                    :collection-id="props.collectionId"
                                />

                                <!-- for relation -->
                                <page-property-value-edit-relation
                                    v-if="propertyType === 'relation'"
                                    :page-id="props.pageId"
                                    :property-id="props.propertyId"
                                    :collection-id="props.collectionId"
                                />

                                <!-- for text value -->
                                <div v-else style="padding: 6px 9px; font-size: 14px; min-height: 34px; display: flex; height: 100%; flex-direction: column; justify-content: space-between; flex-grow: 1; font-weight: 500;">
                                    <div 
                                        class="notranslate"
                                        spellcheck="true"
                                        data-content-editable-leaf="true"
                                        contenteditable="true"
                                        style="width: 100%; height: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47);"
                                    >
                                        {{ props.propertyId }}
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
import PagePropertyValueEditMultiselect from './PagePropertyValueEditMultiselect.vue';
import PagePropertyValueEditRelation from './PagePropertyValueEditRelation.vue';
import { handlePropertyValueOverlay } from '@/helpers/globals/handlePropertyValueOverlay';
import { useGeneralStore } from '@/stores/general';
import { useRecordValuesStore } from '@/stores/recordValues';
import { computed, defineProps } from 'vue';

const props = defineProps({
    propertyId: {
        type: String,
        required: true
    },
    collectionId: {
        type: String,
        required: true
    },
    pageId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();
const generalStore = useGeneralStore();

const dialog = computed(() => generalStore.dialog);

// const propertyValue = recordValuesStore.getRecordValue(
//     overlayData.pageId,
//     "block",
//     "f2cf1fd1-8789-4ddd-9190-49f41966c446"
// ).properties?.[overlayData.propertyId];

const propertyType = recordValuesStore.getRecordValue(
    props.collectionId,
    "collection",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
).getPropertyById(props.propertyId).type;

function handleClickOutsideDialog() {
    handlePropertyValueOverlay(null, null, null, {});
}
</script>