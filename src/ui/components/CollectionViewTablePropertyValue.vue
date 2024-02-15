<template>    
    <base-button
        @click.prevent="handleClickTableViewCell"
        :hover-style="{ background: 'none' }"
        data-testid="property-value"
        style="position: relative; width: 100%; display: block; font-size: 14px; overflow: clip;border-right: none; white-space: normal; min-height: 32px; padding: 5px 8px 5px 0px; border-radius: unset; align-items: unset; justify-content: unset;"
    >
        <div v-if="props.propertyId === 'title' && props.displayOpenBtn"
            style="display: flex; justify-content: end; position: absolute; top: 4px; right: 0px; left: 0px; z-index: 2; margin: 0px 6px; pointer-events: none;"
        >
            <div style="display: flex; gap: 4px; pointer-events: auto; position: sticky; right: 6px;">
                <div>
                    <base-button
                        :hover-style="{background: 'rgb(239, 239, 238)'}"
                        :default-style="{background: 'white'}"
                        style="font-weight: 500; white-space: nowrap; border-radius: 4px; height: 24px; padding-left: 6px; padding-right: 6px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: rgba(15, 15, 15, 0.1); font-size: 12px; line-height: 1.2; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.65); box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 26, 15, 0.1) 0px 2px 4px;"
                        @click.stop="emits('open_record')"
                    >   
                        Open
                    </base-button>
                </div>
            </div>
        </div>
        
        <span style="line-height: 1.5; white-space: pre-wrap; word-break: break-word; display: inline; font-weight: 500; background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.1) 100%); background-repeat: repeat-x; background-position: 0px 100%; background-size: 100% 1px;">
            {{ propertyValueRecordValueInStore }}
        </span>
    </base-button>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import { computed, defineProps, defineEmits } from 'vue';
import BaseButton from './BaseButton.vue';
import { overlayHandle } from '@/helpers/globals/overlayHandle';

const emits = defineEmits([
    "open_record"
])

const props = defineProps({
    pageId: {
        type: String,
        required: true
    },
    collectionId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    displayOpenBtn: {
        type: Boolean,
        default: false
    }
})

const recordValuesStore = useRecordValuesStore();

const propertyValueRecordValueInStore = computed(function() {
    return recordValuesStore.getRecordValue(
        props.pageId,
        "block",
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    )?.properties?.[props.propertyId]
})

function handleClickTableViewCell(e) {    
    const cellElement = e.target.closest(".xdoc-table-view-cell");
    const measures = cellElement.getBoundingClientRect();

    overlayHandle(props.pageId, props.collectionId, props.propertyId, measures, "page_property_value_edit");
}
</script>