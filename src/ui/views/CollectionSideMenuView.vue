<template>
    <div style="position: absolute; top: 1px; right: -96px; height: 200px; background: white; border-left: 1px solid rgb(233, 233, 231); padding-right: 96px; z-index: 87; transition-property: opacity, transform; transition-duration: 270ms; transition-timing-function: ease;"
        :style="`height: ${props.height}px;`"
        v-if="componentInView !== null"
    >
        <div style="display: flex; height: 100%;">
            <div style="box-shadow: rgb(233, 233, 231) 0px -1px 0px;">
                <div style="display: flex; flex-direction: column; min-width: 290px; max-width: 290px; height: 100%; max-height: calc(100% - 16px);">
                    <collection-side-menu-options 
                        :collection-view-id="props.collectionViewId"
                        v-if="componentInView.name === 'main'"
                    ></collection-side-menu-options>
                    
                    <collection-side-menu-properties 
                        v-if="componentInView.name === 'properties'"
                        :collection-id="props.collectionId"
                        :collection-view-id="props.collectionViewId"
                    ></collection-side-menu-properties>

                    <collection-side-menu-property-create-relation 
                        v-if="componentInView.name === 'propertyCreateRelationChooseCollection'"
                        :collection-id="props.collectionId"
                        :collection-view-id="props.collectionViewId"
                        :property-id="componentInView.props.id"
                    />

                    <collection-side-menu-property-create 
                        v-if="componentInView.name === 'propertyCreate'"
                        :collection-id="props.collectionId"
                        :collection-view-id="props.collectionViewId"
                    ></collection-side-menu-property-create>

                    <collection-side-menu-property-edit-view 
                        v-if="componentInView.name === 'propertyEdit'"
                        :collection-id="props.collectionId"
                        :collection-view-id="props.collectionViewId"
                    ></collection-side-menu-property-edit-view>
                
                    <collection-side-menu-property-edit-type
                        v-if="componentInView.name === 'propertyTypes'"
                    ></collection-side-menu-property-edit-type>
                </div>
            </div>

            <div style="width: 96px;"></div>
        </div>

    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import CollectionSideMenuProperties from '@/ui/components/CollectionSideMenuProperties.vue';
import CollectionSideMenuOptions from '@/ui/components/CollectionSideMenuOptions.vue';
import CollectionSideMenuPropertyCreate from '@/ui/components/CollectionSideMenuPropertyCreate.vue';
import CollectionSideMenuPropertyCreateRelation from '../components/CollectionSideMenuPropertyCreateRelation.vue';
import CollectionSideMenuPropertyEditView from '@/ui/views/CollectionSideMenuPropertyEditView.vue';
import CollectionSideMenuPropertyEditType from '@/ui/components/CollectionSideMenuPropertyEditType.vue';
import { useCollectionsStore } from '@/stores/collections';

const props = defineProps({
    height: {
        type: Number,
        required: true
    },
    collectionId: {
        type: String,
        required: true
    },
    collectionViewId: {
        type: String,
        required: true
    }
})

const collectionStore = useCollectionsStore();

const componentInView = computed(function () {
    return collectionStore.getCurrentComponent;
})
</script>