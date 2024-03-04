<template>
    <dialog-view>
        <div style="display: flex; flex-direction: column; overflow-y: auto; flex-grow: 1; height: 100%;">
            <dialog-page-property-multiselect 
                v-if="propertyType === 'multi_select' || propertyType === 'select'"
                :multiselect="propertyType === 'multi_select' ? true : false"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
            />

            <dialog-page-property-relation
                v-if="propertyType === 'relation'"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
            />

            <dialog-page-property-status
                v-if="propertyType === 'status'"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
                space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
            />

            <dialog-page-property-person
                v-if="propertyType === 'person'"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
            />

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
    </dialog-view>
</template>

<script setup>
import { Collection } from '@/entities/Collection';
import DialogView from './DialogView.vue';
import DialogPagePropertyMultiselect from './DialogPagePropertyMultiselect.vue';
import DialogPagePropertyRelation from './DialogPagePropertyRelation.vue';
import DialogPagePropertyStatus from './DialogPagePropertyStatus.vue';
import DialogPagePropertyPerson from './DialogPagePropertyPerson.vue';
import { useRecordValuesStore } from '@/stores/recordValues';
import { defineProps } from 'vue';

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

const propertyType = Collection.prototype.getPropertyById.call(
    recordValuesStore.getRecordValue(
        props.collectionId,
        "collection",
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    ),
    ...[props.propertyId]
).type;
</script>