<template>
    <div style="box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px; padding-top: 6px; padding-bottom: 0px; margin-top: 6px;">
        <div style="display: flex; font-weight: 500; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); font-size: 12px; line-height: 120%; margin-top: 6px; margin-bottom: 8px; padding-right: 14px; padding-left: 14px; user-select: none;">
            <div style="align-self: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                Options
            </div>

            <div style="margin-left: auto;">
                <base-button 
                    @click.stop="state.createNewOption = !state.createNewOption"
                    style="height: 20px; width: 20px;"
                >
                    <svg
                        :style="state.createNewOption ? 'transform: rotate(45deg);' : ''"
                        role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="transition: transform .1s ease-in-out; width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg>
                </base-button>
            </div>
        </div>

        <div
            v-if="state.createNewOption === true"
            style="margin-top: 2px; margin-bottom: 8px; padding-top: 14px; padding-bottom: 14px; padding-right: 14px; padding-left: 14px; height: 20px; display: flex; align-items: center; border-radius: 6px; width: 100%; font-size: 14px;"
        >
            <div style="display: flex; width: 100%;">
                <div class="xdoc-focusable-within" style="display: flex; align-items: center; width: 100%; font-size: 14px; line-height: 20px; padding: 3px 6px; position: relative; border-radius: 4px; box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset;cursor: text; height: 28px; background: rgba(242, 241, 238, 0.6);">
                    <input 
                        type="text" 
                        placeholder="Type a new option" 
                        style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px;"
                        @keydown.stop="handleCreateNewOption"
                        @input.stop=""
                    >
                </div>
            </div>
        </div>
    </div>

    <div style="margin: 0;">
        <div 
            @click.stop="handleOptionEdit($event, option.id)"
            v-for="option in props.options"
            :key="option.id"
            style="display: flex; flex-direction: column;"
        >
            <base-button style="margin-left: 4px; margin-right: 4px;">
                <div style="display: flex; align-items: center; min-height: 28px; font-size: 14px; width: 100%; line-height: 120%;">
                    <div style="margin-right: 6px; margin-left: 12px; min-width: 0px; flex: 1 1 auto;">
                        <div style="display: flex; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            <page-property-tag-value
                                :tag="option"
                                style="padding-left: 6px; padding-right: 6px; border-radius: 4px;"
                            />
                        </div>
                    </div>
                </div>
            </base-button>
        </div>
    </div>
</template>

<script setup>
import uuid from '@/helpers/globals/uuid';
import BaseButton from './BaseButton.vue';
import PagePropertyTagValue from "./PagePropertyTagValue.vue";
import { defineProps, reactive } from 'vue';
import { transformToStandardUUIDFormat } from '../helpers/router/transformToStandardUUIDFormat';
import { tagColorStringToRgbaRandom } from '@/helpers/globals/tagColorStringToRgbaRandom';
import { useGeneralStore } from '@/stores/general';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { makeOperation } from '@/services/transactions/factories/makeOperation';

const props = defineProps({
    spaceId: {
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
    options: {
        type: Array,
        required: true
    }
})

const state = reactive({
    createNewOption: false
})

function handleOptionEdit(e, optionId) {
    const generalStore = useGeneralStore();

    const measures = e.target.getBoundingClientRect();

    generalStore.dialog.top = measures.top;
    generalStore.dialog.left = measures.left;

    generalStore.setCurrentComponentInDefaultOverlay(
        'page_property_option_edit', 
        {
            optionId,
            propertyId: props.propertyId,
            collectionId: props.collectionId,
            spaceId: props.spaceId
        }
    );
}

function handleCreateNewOption(e) {
    const targetDiv = e.target;
    
    // keyCode 13 represets "enter"(keyboards) and "go"(phones) keys
    if (e.keyCode === 13) {
        if (targetDiv.value) {
            useTransactionsQueue().enqueue(
                makeTransaction({
                    spaceId: "",
                    debug: {
                        userAction: "CollectionSideMenuPropertyEditHandleOptions->handleCreateNewOption"
                    },
                    operations: [
                        makeOperation(
                            "keyedObjectListBefore",
                            {
                                value: {
                                    id: transformToStandardUUIDFormat(uuid()),
                                    color: tagColorStringToRgbaRandom(),
                                    value: targetDiv.value
                                }
                            },
                            ["schema", props.propertyId, "options"],
                            {
                                id: props.collectionId,
                                table: "collection",
                                spaceId: props.spaceId
                            }
                        )
                    ]
                })
            );

            targetDiv.value = "";
        }
    }
}
</script>