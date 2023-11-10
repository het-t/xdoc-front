<template>
    <div style="position: absolute; top: 1px; right: -96px; height: 200px; background: white; border-left: 1px solid rgb(233, 233, 231); padding-right: 96px; z-index: 87; transition-property: opacity, transform; transition-duration: 270ms; transition-timing-function: ease;"
        :style="`height: ${props.height}px;`"
        v-if="componentInView !== null"
    >
        <div style="display: flex; height: 100%;">
            <div style="box-shadow: rgb(233, 233, 231) 0px -1px 0px;">
                <div style="display: flex; flex-direction: column; min-width: 290px; max-width: 290px; height: 100%; max-height: calc(100% - 16px);">
                    <collection-side-menu-options v-if="componentInView === 'main'"></collection-side-menu-options>
                    
                    <collection-side-menu-properties 
                        v-if="componentInView === 'properties'"
                    ></collection-side-menu-properties>
                    
                    <collection-side-menu-property-create 
                        v-if="componentInView === 'propertyCreate'"
                    ></collection-side-menu-property-create>
                    
                    <collection-side-menu-property-edit 
                        v-if="componentInView === 'propertyEdit'"
                    ></collection-side-menu-property-edit>
                
                    <collection-property-type-edit
                        v-if="componentInView === 'propertyTypes'"
                    ></collection-property-type-edit>
                </div>
            </div>

            <div style="width: 96px;"></div>
        </div>

    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';
import CollectionSideMenuProperties from '@/components/CollectionSideMenuProperties.vue';
import CollectionSideMenuOptions from '@/components/CollectionSideMenuOptions.vue';
import CollectionSideMenuPropertyCreate from '@/components/CollectionSideMenuPropertyCreate.vue';
import CollectionSideMenuPropertyEdit from '@/components/CollectionSideMenuPropertyEdit.vue';
import CollectionPropertyTypeEdit from '@/components/CollectionPropertyTypeEdit.vue';

const props = defineProps({
    height: {
        type: Number,
        required: true
    }
})

const store = useStore()

const componentInView = computed(() => store.getters['collectionSideMenu/getCurrentComponent']({collectionId: "test"}))
</script>