<template>
    <base-collection-side-menu
        :top-part="false"
    >
        <template #header>Sub-items</template>

        <template #mid-part>
            <div style="margin-left: 12px; margin-right: 12px; font-size: 12px; padding-top: 6px; padding-bottom: 6px; font-weight: 400; color: rgba(55, 53, 47, 0.65);"
            >Use sub-items to break large items into smaller, more manageable chunks.</div>
        
            <div style="display: flex; padding-top: 6px; padding-bottom: 6px; margin: 0 12px;">
                <base-button style="height: 32px; flex: 1 1 0%; white-space: nowrap; border-radius: 3px; border-bottom-left-radius: 3px; padding-left: 12px; padding-right: 12px; font-weight: 500;"
                    :default-style="isSubItemOn ? {background: 'rgba(55, 53, 47, 0.08)'} : {background: 'rgb(35, 131, 226)', color: 'white'}"
                    :hover-style="isSubItemOn ? {background: 'rgba(55, 53, 47, 0.08)', color: 'rgb(235, 87, 87) !important'} : {background: 'rgb(0, 119, 212)', color: 'white'}"
                    @click.stop="handleSubItems"
                >Turn {{ isSubItemOn ? 'off' : 'on' }} sub-items</base-button>
            </div>
        </template>
    </base-collection-side-menu>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import BaseCollectionSideMenu from './BaseCollectionSideMenu.vue';
import BaseButton from './BaseButton.vue';
import { useRecordValuesStore } from '@/stores/recordValues';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { makeOperation } from '@/services/transactions/factories/makeOperation';
import { CollectionProperty } from '@/entities/CollectionProperty';

const props = defineProps({
    collectionId: {
        type: String,
        required: true
    },
    collectionViewId: {
        type: String,
        required: true
    }
})

const collectionViewRecordValueInStore = useRecordValuesStore().getRecordValue({
    id: props.collectionViewId,
    table: "collection",
    spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
});

const isSubItemOn = ref(false);
if (
    collectionViewRecordValueInStore?.format?.subitem_property === true
) isSubItemOn.value = true;


function handleSubItems() {
    isSubItemOn.value = !isSubItemOn.value;
    if(isSubItemOn.value) {
        const propertyIds = Object.keys(
            useRecordValuesStore().getRecordValue({
                id: props.collectionId,
                table: "collection",
                spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
            })?.schema
        )

        const [propertyId, propertyValue] = Object.entries(
            new CollectionProperty({
                bannedIds: propertyIds,
                type: 'relation',
                name: 'Sub-item'
            })
        )[0];

        const collectionPageProperties = collectionViewRecordValueInStore?.format?.collection_page_properties || [];

        collectionPageProperties.push({
            property: propertyId,
            visible: true
        });

        const collectionViewPointer = {
            table: "collection_view",
            id: props.collectionViewId,
            spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
        };

        const collectionPointer = {
            table: "collection",
            id: props.collectionId,
            spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
        };

        useTransactionsQueue().enqueue(
            makeTransaction({
                spaceId: "",
                debug: {
                    userAction: "CollectionSideMenuSubItemssMenu"
                },
                operations: [
                    makeOperation(
                        "update",
                        {
                            collection_page_properties: collectionPageProperties
                        },
                        ["format"],
                        collectionViewPointer
                    ),
                    makeOperation(
                        "update",
                        {
                            [propertyId]: propertyValue
                        },
                        ["schema"],
                        collectionPointer
                    ),
                    makeOperation(
                        "update",
                        {
                            [propertyId]: {
                                type: "relation",
                                name: propertyValue.name,
                                collection_id: props.collectionId,
                                collection_pointer: collectionPointer,
                                // property: ""
                            }
                        },
                        ["schema"],
                        collectionPointer
                    ),
                    makeOperation(
                        "update",
                        {
                            subitem_property: propertyId
                        },
                        ["format"],
                        collectionPointer
                    )
                ]
            })
        )
    }
}
</script>