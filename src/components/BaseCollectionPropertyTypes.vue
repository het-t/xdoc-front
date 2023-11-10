<template>
    <base-collection-side-menu-item-col-2
        v-for="propertyType in propertyTypes" :key="propertyType"
        @click.stop="handleUserSelectType(propertyType)"
    >
        <template #graphic>
            <svg role="graphics-symbol" viewBox="0 0 16 16" class="typesText" style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.85); flex-shrink: 0;"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg>
        </template>

        <template #item>
            {{ propertyType }}
        </template>
    </base-collection-side-menu-item-col-2>
</template>

<script setup>
import BaseCollectionSideMenuItemCol2 from './BaseCollectionSideMenuItemCol2.vue';
import { computed, defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const emits = defineEmits([
    'property-type-select'
]);

const props = defineProps({
    filterTypesOnUserInput: {
        type: Boolean,
        default: false
    },
    filterString: {
        type: String,
        default: ''
    }
})

const propertyTypes = computed(function() {
    return (
        props.filterTypesOnUserInput === true ?
        handleUserInputPropertyName.value :
        propertyTypesInStore.value
    )
})

const propertyTypesInStore = computed(function () {
    return store.getters['warehouseCollection/getPropertyTypes']
})

const handleUserInputPropertyName = computed(function() {
    console.log("CollectionSideMenuPropertyCreate.vue => handleUserInputPropertyName()")
    const filteredTypes = propertyTypesInStore.value.filter((type) => type.toLowerCase().includes(props.filterString.toLowerCase()))

    return (filteredTypes?.length === 0 ? [props.filterString] : filteredTypes)
})

function handleUserSelectType(propertyType) {
    const noMatchingTypeFound = (
        propertyTypesInStore.value.filter((type) => type.toLowerCase().includes(props.filterString.toLowerCase())).length === 0
    )

    emits('property-type-select', {
        name: propertyType,
        noMatchingTypeFound
    })
}
</script>