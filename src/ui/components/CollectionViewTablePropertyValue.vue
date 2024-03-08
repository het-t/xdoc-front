<template>    
    <base-button
        @click.prevent="handleClickTableViewCell"
        :hover-style="{ background: 'none' }"
        data-testid="property-value"
        style="flex-shrink: unset; position: relative; width: 100%; display: block; font-size: 14px; overflow: clip;border-right: none; white-space: normal; min-height: 32px; padding: 6px 8px; border-radius: unset; align-items: unset; justify-content: unset;"
    >
        <div v-if="props.propertyId === 'title' && props.displayOpenBtn"
            style="display: flex; justify-content: end; position: absolute; top: 4px; right: 0px; left: 0px; z-index: 2; margin: 0px 6px; pointer-events: none;"
        >
            <div style="display: flex; gap: 4px; pointer-events: auto; position: sticky; right: 6px;">
                <div>
                    <base-button
                        :hover-style="{background: 'rgb(239, 239, 238)'}"
                        :default-style="{background: 'white'}"
                        style="flex-shrink: 1; font-weight: 500; white-space: nowrap; border-radius: 4px; height: 24px; padding-left: 6px; padding-right: 6px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: rgba(15, 15, 15, 0.1); font-size: 12px; line-height: 1.2; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.65); box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 26, 15, 0.1) 0px 2px 4px;"
                        @click.stop="emits('open_record')"
                    >   
                        Open
                    </base-button>
                </div>
            </div>
        </div>
        
        <span v-if="props.type === 'title'" style="line-height: 1.5; white-space: pre-wrap; word-break: break-word; display: inline; font-weight: 500; background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.1) 100%); background-repeat: repeat-x; background-position: 0px 100%; background-size: 100% 1px;">
            {{ propertyValueRecordValueInStore[0][0] }}
        </span>

        <page-property-status-value
            v-else-if="props.type === 'status'"
            :status="{ value: 'Not started', color: 'gray'}"
            group-color="light gray"
        />

        <div 
            v-else-if="props.type === 'select' || props.type === 'multiselect'"
            style="display: flex;"
        >
            <page-property-tag-value
                style="padding-right: 6px; padding-left: 6px;"
                :tag="{ value: 'High', color: 'red'}"
            />
        </div>

        <page-property-person-value 
            v-else-if="props.type === 'person'"
        />
    </base-button>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import PagePropertyStatusValue from './PagePropertyStatusValue.vue';
import PagePropertyTagValue from './PagePropertyTagValue.vue';
import PagePropertyPersonValue from "./PagePropertyPersonValue.vue";
import { useRecordValuesStore } from '@/stores/recordValues';
import { defineProps, defineEmits } from 'vue';
import { handlePropertyValueOverlay } from '@/helpers/globals/handlePropertyValueOverlay';

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
    type: {
        type: String,
        required: true
    },
    displayOpenBtn: {
        type: Boolean,
        default: false
    }
})

const recordValuesStore = useRecordValuesStore();

const propertyValueRecordValueInStore = recordValuesStore.getRecordValue(
    props.pageId,
    "block",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
)?.properties?.[props.propertyId];

function handleClickTableViewCell(e) {    
    const cellElement = e.target.closest(".xdoc-table-view-cell");
    const measures = cellElement.getBoundingClientRect();

    handlePropertyValueOverlay(props.pageId, props.collectionId, props.propertyId, measures);
}
</script>