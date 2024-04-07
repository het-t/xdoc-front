<template>
    <base-collection-side-menu
        :top-part="false"
    >
        <template #header>Edit property</template>

        <template #top-part>

        </template>

        <template #mid-part>      
            <div style="padding-top: 6px; padding-bottom: 6px;">
                <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                    <div style="margin-left: 12px; margin-right: auto; min-width: 0; flex-shrink: 0;">
                        <base-button style="padding-left: 6px; padding-right: 0; height: 28px; width: 28px; border: 1px solid rgba(55, 53, 47, 0.16);">
                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="typesText" style="width: 14px; height: 14px; display: block; fill: rgb(85, 83, 78); flex-shrink: 0; margin-right: 6px;"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg>
                        </base-button>
                    </div>

                    <div style="margin-right: 12px; margin-left: 6px; min-width: 0; flex: 1 1 auto;">
                        <div style="display: flex;">
                            <div class="xdoc-focusable-within" style="display: flex; align-items: center; width: 100%; font-size: 14px; line-height: 20px; padding: 3px 6px; position: relative; border-radius: 4px; box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset; background: rgba(242, 241, 238, 0.6); cursor: text; height: 28px;">
                                <input 
                                    @blur.stop="handlePropertyNameChange"
                                    :value="property.name"
                                    type="text" 
                                    placeholder="Property name" 
                                    style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px;"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="padding-top: 6px; padding-bottom: 6px;">              
                <base-collection-side-menu-item-col-3
                    :graphic="false"
                    @click.stop="displayTypesList"
                    :style="property.type === 'title' ? { opacity: 0.4, cursor: 'default', background: 'none !important' } : {}"
                >
                    <template #item>
                        Type
                    </template>

                    <template #itemMeta>
                        <svg v-if="property.type === 'title'" role="graphics-symbol" viewBox="0 0 16 16" class="lockedFilled" style="width: 14px; height: 100%; display: block; fill: rgba(55, 53, 47, 0.85); flex-shrink: 0;"><path d="M4.69141 14.6338H11.3018C12.2178 14.6338 12.6689 14.1826 12.6689 13.1914V8.08496C12.6689 7.18945 12.293 6.72461 11.541 6.64941V4.96094C11.541 2.36328 9.81152 1.1123 7.99316 1.1123C6.18164 1.1123 4.45215 2.36328 4.45215 4.96094V6.67676C3.74805 6.78613 3.32422 7.2373 3.32422 8.08496V13.1914C3.32422 14.1826 3.77539 14.6338 4.69141 14.6338ZM5.75098 4.83105C5.75098 3.22461 6.76953 2.35645 7.99316 2.35645C9.2168 2.35645 10.2422 3.22461 10.2422 4.83105V6.64258L5.75098 6.64941V4.83105Z"></path></svg>
                        <svg v-else role="graphics-symbol" viewBox="0 0 16 16" class="typesText" style="width: 14px; height: 14px; display: block; fill: inherit; flex-shrink: 0; margin-right: 6px;"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg>
                        {{ getPropertyLabelFromType(property.type)}}
                    </template>
                </base-collection-side-menu-item-col-3>

                <collection-side-menu-property-edit-handle-options
                    v-if="property.type === 'multi_select' || property.type === 'select'"
                    :property-id="props.propertyId"
                    :options="property.options"
                    space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
                    :collection-id="props.collectionId"
                />

                <collection-side-menu-property-edit-handle-groups
                    v-if="property.type === 'status'"
                    :collection-id="props.collectionId"
                    :property-id="props.propertyId"
                    space-id="f2cf1fd1-8789-4ddd-9190-49f41966c446"
                />

                <collection-side-menu-property-edit-relation
                    v-if="property.type === 'relation'"
                />
            </div>

        </template>

        <template #footer>
            <div style="padding-top: 6px; padding-bottom: 6px; box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px; margin-top: 1px;">
                <collection-side-menu-property-edit-footer
                    @property-delete="handlePropertyDelete"
                />
            </div>
        </template>
    </base-collection-side-menu>
</template>

<script setup>
import { defineProps } from 'vue';
import { Collection } from '@/entities/Collection';
import BaseButton from '@/ui/components/BaseButton.vue';
import BaseCollectionSideMenu from '@/ui/components/BaseCollectionSideMenu.vue';
import BaseCollectionSideMenuItemCol3 from '@/ui/components/BaseCollectionSideMenuItemCol3.vue';
import CollectionSideMenuPropertyEditHandleOptions from '@/ui/components/CollectionSideMenuPropertyEditHandleOptions.vue';
import CollectionSideMenuPropertyEditRelation from "@/ui/components/CollectionSideMenuPropertyEditRelation.vue";
import CollectionSideMenuPropertyEditHandleGroups from '../components/CollectionSideMenuPropertyEditHandleGroups.vue';
import CollectionSideMenuPropertyEditFooter from '@/ui/components/CollectionSideMenuPropertyEditFooter.vue';
import { useCollectionsStore } from '@/stores/collections';
import { useRecordValuesStore } from '@/stores/recordValues';
import { makeOperation } from '@/services/transactions/factories/makeOperation';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { CollectionView } from '@/entities/CollectionView';

const props = defineProps({
    collectionId: {
        type: String,
        required: true
    },
    collectionViewId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const collectionStore = useCollectionsStore();

const collectionRecordInStore = recordValuesStore.getRecordValue({
    id: props.collectionId,
    table: "collection",
    spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
});

const property = Collection.prototype.getPropertyById.call(
    collectionRecordInStore,
    ...[props.propertyId]
)

function displayTypesList() {
    if (property.type === 'title') return;
    collectionStore.setCurrentComponent("propertyTypes", {
        id: props.propertyId
    })
}

function handlePropertyNameChange(e) {  
    useTransactionsQueue().enqueue(
        makeTransaction({
            spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446",
            debug: {
                userAction: "CollectionSideMenuPropertyEditView->handlePropertyDelete"
            },
            operations: [                
                makeOperation(
                    "set",
                    e.target.value,
                    ['schema', props.propertyId, "name"],        
                    {
                        id: props.collectionId,
                        table: "collection",
                        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
                    }
                )
            ]
        })
    );
}

function handlePropertyDelete() {
    const updatedSchema = {};

    for(const key in collectionRecordInStore.schema) {
        if(key !== props.propertyId) {
            updatedSchema[key] = collectionRecordInStore.schema[key];
        }
    }

    const collectionViewRecordValueInStore = recordValuesStore.getRecordValue({
        id: props.collectionViewId,
        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446",
        table: "collection_view"
    });

    const collectionViewProperties = CollectionView.prototype.getProperties.call(collectionViewRecordValueInStore);
    const targetIndex = collectionViewProperties.findIndex(({property: propertyId}) => propertyId === props.propertyId);

    if(targetIndex !== -1) collectionViewProperties.splice(targetIndex, 1);

    useTransactionsQueue().enqueue(
        makeTransaction({
            spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446",
            debug: {
                userAction: "CollectionSideMenuPropertyEditView->handlePropertyDelete"
            },
            operations: [
                makeOperation(
                    "update",
                    {
                        schema: updatedSchema
                    },
                    [],
                    {
                        id: props.collectionId,
                        table: "collection",
                        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
                    }
                ),
                makeOperation(
                    "update",
                    {
                        format: collectionViewRecordValueInStore.format
                    },
                    [],
                    {
                        id: props.collectionViewId,
                        table: "collection_view",
                        spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
                    }
                )
            ]
        })
    );

    collectionStore.removeCurrentComponent();
}

function getPropertyLabelFromType(_type) {
    if (_type === "title") {
        return "Title"
    }
    
    return collectionStore.types.find(({type}) => type === _type).label;
}
</script>