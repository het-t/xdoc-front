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
                    v-for="option in propertyOptions"
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

                <div style="display: flex; flex-grow: 1; height: 20px; align-items: center; min-width: 0px; max-width: 100%; margin: 0px 6px 6px 0px;"></div>
            </div>
        </div>
    </div>

    <div class="xdoc-scroller vertical"
        style="z-index: 1; flex-grow: 1; min-height: 0px; translate: translateZ(0px); overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
    >
        <base-tag 
            v-for="option in propertyOptions"
            @click.stop="handleOptionSelect(option)"
            :tag=option
            :key="option.id"
        />
    </div>

    <footer style="flex-shrink: 0;">
        {{ propertyValue }}
    </footer>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import BaseTag from './BaseTag.vue';
import BaseButton from './BaseButton.vue';
import { defineProps } from 'vue';

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

const propertyOptions = pageParentCollectionRecordValueInStore.getSchema()[props.propertyId].options;

const propertyValue = recordValuesStore.getRecordValue(
    props.pageId,
    "block",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
).properties?.[props.propertyId];

function handleOptionSelect(option) {
    console.log(option)
}
</script>