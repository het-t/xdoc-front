<template>
    <div class="xdoc-scroller vertical"
        style="z-index: 1; flex-shrink: 0; max-height: 240px; box-shadow: rgba(55, 53, 47, 0.16) 0px -1px inset; overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
    >
        <div style="display: flex; flex-direction: column; align-items: stretch; flex: 1 1 0%;">
            <div class="xdoc-scroller vertical horizontal"
                style="z-index: 1; display: flex; flex-wrap: wrap; align-items: flex-start; background: rgba(242, 241, 238, 0.6); cursor: text; overflow: auto; padding: 8px 9px 1px; width: 100%; min-height: 34px; font-size: 14px; margin-right: 0px; margin-bottom: 0px;"
            >
                <base-tag
                    style="padding-left: 6px; padding-right: 0px; margin: 0px 6px 6px 0px;"
                    v-for="option in propertyValue"
                    :tag=option
                    :key="option.id"
                >
                    <base-button
                        :hover-style="{ fill: 'rgb(55, 53, 47, 0.8)' }"
                        style="width: 20px; height: 20px; margin-left: 2px; margin-right: 2px;"
                    >
                        <svg role="graphics-symbol" viewBox="0 0 8 8" class="closeThick" style="width: 8px; height: 8px; display: block; fill: inherit; flex-shrink: 0; opacity: 0.5;"><polygon points="8 1.01818182 6.98181818 0 4 2.98181818 1.01818182 0 0 1.01818182 2.98181818 4 0 6.98181818 1.01818182 8 4 5.01818182 6.98181818 8 8 6.98181818 5.01818182 4"></polygon></svg>
                    </base-button>
                </base-tag>

                <div style="display: flex; flex-grow: 1; height: 20px; align-items: center; min-width: 0px; max-width: 100%; margin: 0px 6px 6px 0px;">
                    <input 
                        v-model.trim="filterOptionString"
                        type="text" 
                        placeholder 
                        size="1" 
                        autocomplete="off" 
                        style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px; height: 18px;"
                    >
                </div>
            </div>
        </div>
    </div>

    <div class="xdoc-scroller vertical"
        style="z-index: 1; flex-grow: 1; min-height: 0px; translate: translateZ(0px); overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
    >
        <div role="menu" tabindex="0">
            <div style="padding-top: 6px; padding-bottom: 6px;">
                <div style="display: flex; padding-right: 14px; padding-left: 14px; margin-top: 6px; margin-bottom: 8px; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); font-size: 12px; font-weight: 500; line-height: 120%; user-select: none;">
                    Select an option or create one
                </div>

                <div style="margin: 0;">
                    <div style="display: flex; flex-direction: column;">
                        <div role="menuitem" tabindex="-1" style="user-select: none; margin-right: 4px; margin-left: 4px; width: calc(100% - 8px); cursor: pointer; border-radius: 4px; transition: background 20ms ease-in 0s;">
                            <div style="display: flex; align-items: center; user-select: none; font-size: 14px; min-height: 28px;"
                                v-for="option in filteredOptions"
                                :key="option.id"
                            >
                                <div style="display: flex; align-items: center; justify-content: center; width: 18px; height: 24px; flex-shrink: 0; cursor: -webkit-grab; margin-left: 8px; margin-right: -4px;">
                                    <svg role="graphics-symbol" viewBox="0 0 10 10" class="dragHandle" style="width: 12px; height: 12px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path></svg>
                                </div>

                                <base-tag 
                                    style="margin-left: 12px; padding-right: 6px; padding-left: 6px;"
                                    :tag=option
                                >
                                </base-tag>

                                <div style="margin-left: auto; margin-right: 12px; min-width: 0px; flex-shrink: 0;">
                                    <base-button style="height: 24px; width: 24px; user-select: none; cursor: pointer; transition: background 20ms ease-in 0s; opacity: 1; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; margin-right: -6px;">
                                        <svg role="graphics-symbol" viewBox="0 0 13 3" class="dots" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><g><path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path><path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path><path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path></g></svg>
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer style="flex-shrink: 0;"></footer>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import BaseTag from './BaseTag.vue';
import BaseButton from './BaseButton.vue';
import { computed, defineProps, ref } from 'vue';

const props = defineProps({
    multiselect: {
        type: Boolean,
        default: false
    },
    collectionId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    pageId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const pageParentCollectionRecordValueInStore = recordValuesStore.getRecordValue(
    props.collectionId,
    "collection",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
);

const propertyOptions = pageParentCollectionRecordValueInStore?.schema[props.propertyId].options;

const propertyValue = recordValuesStore.getRecordValue(
    props.pageId,
    "block",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
).properties?.[props.propertyId]?.[0]?.map(optionValue => {
    return propertyOptions.find(option => option.value === optionValue);
});

const filterOptionString = ref("");

const filteredOptions = computed(function() {
    if (!filterOptionString.value) return [...propertyOptions];
    return [...propertyOptions.filter(option => option.value.toLowerCase().indexOf(filterOptionString.value?.toLowerCase()) !== -1)];
})
</script>