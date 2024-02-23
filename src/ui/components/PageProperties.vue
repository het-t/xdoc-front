<template>
    <div style="width: 100%; font-size: 14px;">
        <div style="width: 100%; max-width: 100%; padding: 8px 0px; margin: 0px auto;">
            <div style="width: 100%; max-width: 100%; padding-top: 8px; margin: 0px auto;">
                <div style="padding-bottom: 8px;">
                    <div role="table"
                        aria-label="Page properties"
                        style="margin: 0px;"
                    >
                        <div style="display: flex; flex-direction: column;">
                            <div v-for="(value, propertyId) in pagePropertiesRecordValueInStore"
                                :key="propertyId" 
                                role="row" aria-labelledby="aria-labelledby"
                                style="display: flex; width: 100%; padding-bottom: 4px;"
                            >
                                <div style="width: 160px; height: 34px; display: flex; align-items: center; flex: 0 0 auto; color: rgba(55, 53, 47, 065);">          
                                    <div style="width: 22px; margin-left: -22px; opacity: 0.5;">
                                        <div 
                                            role="cell" 
                                            tabindex="-1" 
                                            aria-label="Drag"
                                            style="user-select: none; transition: background 20ms ease-in 0s; cursor: grab; display: flex; align-items: center; justify-content: center; width: 18px; height: 24px; border-radius: 4px; fill: rgba(55, 53, 47, 0.35);"    
                                        >
                                            <svg role="graphics-symbol" viewBox="0 0 10 10" class="dragHandle" style="width: 14px; height: 14px; display: block; fill: inherit; flex-shrink: 0;"><path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path></svg>
                                        </div>
                                    </div>
    
                                    <div role="cell"
                                        tabindex="0"
                                        id="aria-labelledby"
                                        style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; height: 100%; width: 100%; border-radius: 4px; padding: 0px 6px;"
                                    >
                                        <div style="display: flex; align-items: center; line-height: 120%; min-width: 0px; font-size: 14px;">
                                            <div style="margin-right: 6px;"></div>
                                            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                {{ propertyNameFromId(propertyId) }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    @click.stop="handlePropertyEdit($event, propertyId)" 
                                    role="cell"
                                    style="display: flex; margin-left: 4px; height: 100%; flex: 1 1 auto; flex-direction: column; min-width: 0px;"
                                >
                                    <div style="display: flex; align-items: center; margin-left: 4px; height: 100%; flex: 1 1 auto; min-width: 0px;">
                                        <div role="button" tabindex="0" data-testid="property-value" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; position: relative; font-size: 14px; overflow: hidden; display: inline-block; border-radius: 3px; width: 100%; min-height: 34px; padding: 7px 8px;">
                                            <div style="display: flex; flex-wrap: wrap; gap: 6px 8px;">
                                                {{ value }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex;">
                        <div role="button"
                            tabindex="0"
                            style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; color: rgba(55, 53, 47, 0.5); border-radius: 3px; padding-left: 6px; padding-right: 6px; height: 34px; width: auto;"
                            class="hvr"
                        >
                            <svg 
                                role="graphics-symbol" 
                                viewBox="0 0 16 16" 
                                class="plus" 
                                style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; margin-right: 9px; margin-top: 1px;"
                            >
                                <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z">
                                </path>
                            </svg>    

                            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0px; line-height: 16px;">Add a property</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { handlePropertyValueOverlay } from '@/helpers/globals/handlePropertyValueOverlay';
import { useRecordValuesStore } from '@/stores/recordValues';
import { computed, defineProps } from 'vue';

const props = defineProps({
    pageId: {
        type: String,
        required: true
    },
    collectionId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const pagePropertiesRecordValueInStore = computed(function() { 
    return recordValuesStore.getRecordValue(
        props.pageId,
        "block",
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    ).properties
});

const pageCollectionRecordValueInStore = recordValuesStore.getRecordValue(
    props.collectionId,
    "collection",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
)

function propertyNameFromId(id) {
    return pageCollectionRecordValueInStore.getPropertyById(id).name
}

function handlePropertyEdit(e, propertyId) {    
    const cellElement = e.target.closest("[role='cell']");
    const measures = cellElement.getBoundingClientRect();

    handlePropertyValueOverlay(
        props.pageId, 
        props.collectionId, 
        propertyId, 
        measures, 
    );
}
</script>