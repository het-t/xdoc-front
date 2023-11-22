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
                    <collection-side-menu-category>Type</collection-side-menu-category>
                </div>

                <div style="padding-top: 6px; padding-bottom: 6px;">
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
import BaseCollectionSideMenu from './BaseCollectionSideMenu.vue';
import BaseCollectionPropertyTypes from './BaseCollectionPropertyTypes.vue';
import CollectionSideMenuCategory from './CollectionSideMenuCategory.vue';
import { inject, reactive } from 'vue';
import { useStore } from 'vuex';

const collectionId = inject('CollectionId');

const store = useStore();

const state = reactive({
    filterString: ''
})

function handlePropertyTypeSelect({name, noMatchingTypeFound}) {
    console.log("CollectionPropertyTypeEdit.vue => handlePropertyTypeSelect()")
    
    const propertyType = noMatchingTypeFound === true ? 'Text' : name;

    const propertyName = store.getters['collection/getPropertyEdit'](collectionId)?.name;

    store.commit('collection/setPropertyEdit', {
        collectionId,
        name: propertyName,
        type: propertyType
    })

    store.commit('collectionSideMenu/removeCurrentComponent', {
        collectionId
    })
}
</script>