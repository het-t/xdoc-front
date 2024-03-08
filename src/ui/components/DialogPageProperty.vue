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
                v-else-if="propertyType === 'relation'"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
            />

            <dialog-page-property-status
                v-else-if="propertyType === 'status'"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
                space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
            />

            <dialog-page-property-person
                v-else-if="propertyType === 'person'"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
            />

            <dialog-page-property-title 
                v-else-if="propertyType === 'title'"
                @value-change="handlePropertyValueChange"
                :page-id="props.pageId"
                :collection-id="props.collectionId"
            />
        </div>
    </dialog-view>
</template>

<script setup>
import { Collection } from '@/entities/Collection';
import DialogView from './DialogView.vue';
import DialogPagePropertyTitle from "./DialogPagePropertyTitle.vue";
import DialogPagePropertyMultiselect from './DialogPagePropertyMultiselect.vue';
import DialogPagePropertyRelation from './DialogPagePropertyRelation.vue';
import DialogPagePropertyStatus from './DialogPagePropertyStatus.vue';
import DialogPagePropertyPerson from './DialogPagePropertyPerson.vue';
import { useRecordValuesStore } from '@/stores/recordValues';
import { defineProps } from 'vue';
import { set as setUsecase } from '@/usecases/set';
import { useGeneralStore } from '@/stores/general';

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

function handlePropertyValueChange(value) {
    setUsecase(
        value,
        ['properties', props.propertyId],
        {
            table: "block",
            id: props.pageId,
            spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
        }
    );

    useGeneralStore().propertyValueDialog = {
        pageId: props.pageId,
        propertyId: props.propertyId
    };
}
</script>