<template>
    <base-collection-side-menu
        :top-part="false"
    >
        <template #header>
            New Property On Paid Task
        </template>

        <template #mid-part>
            <div style="padding-top: 12px; padding-bottom: 4px;">
                <div style="display: flex; align-items: center; min-height: 28px; font-size: 14px; line-height: 120%; user-select: none; max-width: 100%;">
                    <div style="min-width: 0px; margin-right: 12px; margin-left: 12px; flex: 1 1 auto;">
                        <div style="display: flex;">
                            <div class="xdoc-focusable-within" style="display: flex; align-items: center; width: 100%; font-size: 14px; line-height: 20px; padding: 3px 6px; position: relative; border-radius: 4px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset; background: rgba(242, 241, 238, 0.6); cursor: text; height: 28px;">
                                <input
                                    v-model="state.filterString"
                                    placeholder="Search or add new property"
                                    type="text"
                                    style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px;"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                tabindex="0"
                role="menu"
                aria-activedescendant=":ra:"
            >
                <div style="padding-top: 6px; padding-bottom: 6px;">
                    <collection-side-menu-category>Suggested</collection-side-menu-category>
                </div>

                <div style="padding-top: 6px; padding-bottom: 6px;">
                    <collection-side-menu-category>Type</collection-side-menu-category>

                    <base-collection-property-types
                        :filterString="state.filterString"
                        :filterTypesOnUserInput=true
                        @property-type-select="handlePropertyTypeSelect"
                    ></base-collection-property-types>
                </div>
            </div>

        </template>
    </base-collection-side-menu>
</template>

<script setup>
import { reactive, defineProps } from 'vue';
import { useCollectionsStore } from '@/stores/collections';
import { useRecordValuesStore } from '@/stores/recordValues';
import BaseCollectionPropertyTypes from './BaseCollectionPropertyTypes.vue';
import BaseCollectionSideMenu from './BaseCollectionSideMenu.vue';
import CollectionSideMenuCategory from './CollectionSideMenuCategory.vue';
import { CollectionProperty } from "@/entities/CollectionProperty";
import { Collection } from '@/entities/Collection';
import { CollectionView } from '@/entities/CollectionView';
import { makeOperation } from '@/services/transactions/factories/makeOperation';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { useTransactionsQueue } from '@/stores/transactionsQueue';

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

const state = reactive({
    filterString: ''
})

function handlePropertyTypeSelect({type, userInput}) {
    const transactionsStore = useTransactionsQueue();

    const collectionStore = useCollectionsStore();

    if (type === 'relation') {
        collectionStore.setCurrentComponent('propertyCreateRelationChooseCollection');
        return;
    }

    const collectionViewPropertiesRecordValueInStore = CollectionView.prototype.getProperties.call(
        useRecordValuesStore().getRecordValue({
            id: props.collectionViewId,
            table: "collection_view",
            spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
        })
    );

    const collectionRecordValueInStore = useRecordValuesStore().getRecordValue({
        id: props.collectionId,
        table: "collection",
        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    });

    const [propertyId, {name: propertyName}] = Object.entries(
        new CollectionProperty({
            bannedIds: Object.keys(collectionRecordValueInStore.schema),
            name: userInput,
            type
        })
    )[0];

    const propertyNamePostfixed = Collection.prototype.getPropertyNamePostfixed.call(collectionRecordValueInStore, ...[
        propertyId,
        propertyName,
        type
    ]);

    const propertyValue = Object.values(
        new CollectionProperty({
            bannedIds: Object.keys(collectionRecordValueInStore.schema),
            name: propertyNamePostfixed,
            type 
        })
    )[0];

    const updatedCollectionViewProperties = [...collectionViewPropertiesRecordValueInStore]
    updatedCollectionViewProperties.push({
        property: propertyId,
        visible: false
    });
    
    const operations = [
        makeOperation(
            "update",
            {
                table_properties: updatedCollectionViewProperties,
            },
            ["format"],
            {
                id: props.collectionViewId,
                table: "collection_view",
                spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
            }
        ),
        
        makeOperation(
            "update",
            {
                [propertyId]: propertyValue
            },
            ["schema"],
            {
                id: props.collectionId,
                table: "collection",
                spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
            }
        )
    ];

    transactionsStore.enqueue(
        makeTransaction({
            spaceId: props.spaceId,
            debug: {
                userAction: "CollectionSideMenuPropertyCreate.handlePropertyTypeSelect"
            },
            operations
        })
    );

    collectionStore.setCurrentComponent('propertyEdit',{
        id: propertyId
    });
}
</script>