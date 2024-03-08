<template>
    <div style="display: flex; flex-direction: column; min-width: 180px; max-width: calc(100vw -24px); height: 100%; max-height: 70vh;">
        <div class="xdoc-scroller vertical"
            style="z-index: 1; flex-shrink: 0; max-height: 240px; box-shadow: rgba(55, 53, 47, 0.16) 0px -1px inset; overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
        >
            <div style="display: flex; flex-direction: column; align-items: stretch; flex: 1 1 0%;">
                <div class="xdoc-scroller vertical horizontal"
                    style="z-index: 1; display: flex; align-items: flex-start; cursor: text; flex-wrap: wrap; padding: 8px 9px 1px; overflow: auto; background: rgba(242, 241, 238, 0.6); width: 100%; min-height: 34px; font-size: 14px; margin-right: 0px; margin-bottom: 0px;"
                >
                    <page-property-status-value
                        :key="propertyValueParsed[0].id"
                        :status="propertyValueParsed[0]"
                    />
                </div>
            </div>
        </div>

        <div class="xdoc-scroller vertical"
            style="z-index: 1; flex-grow: 1; min-height: 0px; transform: translateZ(0px); overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
        >
            <div id=":r11:" role="menu" tabindex="0">
                <div 
                    style="padding-top: 6px; padding-bottom: 6px;"
                    v-for="(group, index) in property.groups"
                    :key="group.id"
                    :style="index !== 0 ? { boxShadow: 'rgba(55, 53, 47, 0.09) 0 -1px 0', marginTop: '1px' } : {}"
                >
                    <div style="display: flex; margin-top: 6px; margin-bottom: 8px; padding-right: 14px; padding-left: 14px; color: rgba(55, 53, 47, 0.65); font-size: 12px; font-weight: 500; line-height: 120%; user-select: none;"
                    >{{ group.name }}</div>
                    
                    <base-menu-item v-for="(optionId) in group.optionIds"
                        @click.stop="handleStatusSelect(optionId)"
                        :key="optionId"
                    >
                        <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                            <div style="margin-left: 12px; margin-right: 12px; min-width: 0px; flex: 1 1 auto;">     
                                <div style="display: flex;">
                                    <page-property-status-value
                                        :status="getOptionById(optionId)"
                                        :group-color="group.color"
                                        style="margin: unset;"
                                    />
                                </div>
                            </div>
                        </div>
                    </base-menu-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseMenuItem from './BaseMenuItem.vue';
import PagePropertyStatusValue from './PagePropertyStatusValue.vue';
import { defineProps, defineEmits, toRef, ref } from 'vue';
import { usePropertyData } from "@/ui/composables/usePropertyData";
import { parseCommaSeparatedPropertyValues } from "@/helpers/globals/parseCommaSeparatedPropertyValues";

const emits = defineEmits([
    "value-change"
]);

const props = defineProps({
    pageId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    collectionId: {
        type: String,
        required: true
    },
    spaceId: {
        type: String,
        required: true
    }
})

const { propertyValue = "", property } = usePropertyData(
    toRef(() => props),
    () => {}
);

const propertyValueParsed = ref([]);

parseCommaSeparatedPropertyValues(
    "status",
    propertyValueParsed,
    property,
    propertyValue
);

function getOptionById(_id) {
    return property.options.find(({id}) => id === _id);
}

function handleStatusSelect(optionId) {
    emits("value-change", {
        value: [[getOptionById(optionId).value]],
        dialogShow: false
    });
}
</script>