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
import BaseCollectionPropertyTypes from './BaseCollectionPropertyTypes.vue';
import BaseCollectionSideMenu from './BaseCollectionSideMenu.vue';
import CollectionSideMenuCategory from './CollectionSideMenuCategory.vue';
import { useStore } from 'vuex';
import { inject, reactive } from 'vue';

const state = reactive({
    filterString: ''
})

const collectionId = inject('CollectionId');

const store = useStore();

function handlePropertyTypeSelect({name, noMatchingTypeFound}) {
    console.log("CollectionSideMenuPropertyCreate.vue => handlePropertyTypeSelect()", name)

    const propertyName = name;
    //put logic to calculate name, ex 'Text 2'
    const propertyType = noMatchingTypeFound === true ? 'Text' : propertyName;

    store.commit('collection/setPropertyEdit', {
        collectionId,
        name: propertyName,
        type: propertyType
    })

    store.commit('collectionSideMenu/setCurrentComponent', {
        collectionId,
        component: 'propertyEdit'
    })
}
</script>