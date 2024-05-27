<template>
    <dialog-view :show="showDialogView">
        <div style="display: flex; flex-direction: column; overflow-y: auto; flex-grow: 1; height: 100%;">
            <dialog-page-property-multiselect 
                v-if="propertyType === 'multi_select' || propertyType === 'select'"
                @value-change="handlePropertyValueChange"
                :multiselect="propertyType === 'multi_select' ? true : false"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
                :space-id="props.spaceId"
            />

            <dialog-page-property-relation
                v-else-if="propertyType === 'relation'"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
            />

            <dialog-page-property-status
                v-else-if="propertyType === 'status'"
                @value-change="handlePropertyValueChange"
                :page-id="props.pageId"
                :property-id="props.propertyId"
                :collection-id="props.collectionId"
                :space-id="props.spaceId"
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
                :space-id="props.spaceId"
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
import { defineProps, ref } from 'vue';
import { useGeneralStore } from '@/stores/general';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { makeOperation } from '@/services/transactions/factories/makeOperation';

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
    },
    spaceId: {
        type: String,
        default: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    }
})

const recordValuesStore = useRecordValuesStore();

const propertyType = Collection.prototype.getPropertyById.call(
    recordValuesStore.getRecordValue({
        id: props.collectionId,
        table: "collection",
        spaceId: props.spaceId
    }),
    ...[props.propertyId]
).type;

const showDialogView = ref(true);

function handlePropertyValueChange({value, dialogShow=true}) {
    const operations = [
        makeOperation(
            "set",
            value,
            ["properties", props.propertyId],
            {
                table: "block",
                id: props.pageId,
                spaceId: props.spaceId
            }
        )
    ];
    
    useTransactionsQueue().enqueue(
        makeTransaction({
            spaceId: props.spaceId,
            debug: {
                userAction: "DialogPageProperty=>handlePropertyValueChange"
            },
            operations
        })
    );

    useGeneralStore().propertyValueDialog = {
        pageId: props.pageId,
        propertyId: props.propertyId
    };

    showDialogView.value = dialogShow;
}
</script>