<template>
    <base-collection-side-menu>
        <template #header>
            View options
        </template>

        <template #top-part>
            <div style="display: flex; align-items: center; line-height: 120%; user-select: none; font-size: 14px; min-height: 28px; width: 100%;">
                <div style="margin-left: 12px; flex-shrink: 0; margin-right: auto; min-width: 0px;">
                    <base-button style="height: 28px; padding-left: 6px; padding-right: 0px; line-height: 1.2; width: 28px; border: solid 1px rgba(55, 53, 47, 0.16);">
                        <svg role="graphics-symbol" viewBox="0 0 16 16" class="collectionTable" style="width: 16px; height: 16px; display: block; fill: rgb(85, 83, 78); flex-shrink: 0; margin-right: 6px;"><path d="M2.39697 14.4634H13.5964C15.0532 14.4634 15.8311 13.6921 15.8311 12.2485V4.24609C15.8311 2.80249 15.0532 2.03125 13.5964 2.03125H2.39697C0.940186 2.03125 0.162354 2.7959 0.162354 4.24609V12.2485C0.162354 13.6987 0.940186 14.4634 2.39697 14.4634ZM1.63232 4.39771C1.63232 3.79126 1.94214 3.50122 2.52222 3.50122H7.28809V5.74243H1.63232V4.39771ZM13.4712 3.50122C14.0447 3.50122 14.3611 3.79126 14.3611 4.39771V5.74243H8.70532V3.50122H13.4712ZM1.63232 9.3811V7.10693H7.28809V9.3811H1.63232ZM8.70532 9.3811V7.10693H14.3611V9.3811H8.70532ZM2.52222 12.9934C1.94214 12.9934 1.63232 12.7034 1.63232 12.0969V10.7522H7.28809V12.9934H2.52222ZM14.3611 12.0969C14.3611 12.7034 14.0447 12.9934 13.4712 12.9934H8.70532V10.7522H14.3611V12.0969Z"></path></svg>
                    </base-button>
                </div>

                <div style="margin-left: 6px; flex: 1 1 auto; margin-right: 6px; min-width: 0px;">
                    <div style="display: flex;">
                        <div class="xdoc-focusable-within"
                            style="display: flex; align-items: center; width: 100%; font-size: 14px; line-height: 20px; padding: 3px 6px; position: relative; border-radius: 4px; box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset; background: rgba(242, 241, 238, 0.6); cursor: text; height: 28px;"
                        >
                            <input placeholder="View name" type='text' style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px;" />
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template #mid-part>
            <div style="padding-top: 6px; padding-bottom: 6px;">
                <base-collection-side-menu-item-col-3>
                    <template #graphic>
                        <svg role="graphics-symbol" viewBox="0 0 24 24" class="layoutPadded" style="width: 24px; height: 24px; display: block; fill: inherit; flex-shrink: 0; margin-right: -2px;"><path d="M3.94727 11.832H10.2295C11.3574 11.832 11.9248 11.2715 11.9248 10.1504V7.30664C11.9248 6.18555 11.3574 5.625 10.2295 5.625H3.94727C2.81934 5.625 2.25195 6.18555 2.25195 7.30664V10.1504C2.25195 11.2715 2.81934 11.832 3.94727 11.832ZM15.6572 17.5811H20.0459C21.1738 17.5811 21.7412 17.0273 21.7412 15.8994V8.33203C21.7412 7.21094 21.1738 6.65723 20.0459 6.65723H15.6572C14.5361 6.65723 13.9688 7.21094 13.9688 8.33203V15.8994C13.9688 17.0273 14.5361 17.5811 15.6572 17.5811ZM4.11133 10.5469C3.73535 10.5469 3.53711 10.3486 3.53711 9.95898V7.49805C3.53711 7.10156 3.73535 6.91016 4.11133 6.91016H10.0586C10.4414 6.91016 10.6396 7.10156 10.6396 7.49805V9.95898C10.6396 10.3486 10.4414 10.5469 10.0586 10.5469H4.11133ZM15.8213 16.3027C15.4521 16.3027 15.2471 16.1045 15.2471 15.7148V8.52344C15.2471 8.12695 15.4521 7.93555 15.8213 7.93555H19.875C20.2578 7.93555 20.4561 8.12695 20.4561 8.52344V15.7148C20.4561 16.1045 20.2578 16.3027 19.875 16.3027H15.8213ZM5.66309 18.4629H10.9951C12.1162 18.4629 12.6904 17.9092 12.6904 16.7812V14.8535C12.6904 13.7324 12.1162 13.1787 10.9951 13.1787H5.66309C4.53516 13.1787 3.96777 13.7324 3.96777 14.8535V16.7812C3.96777 17.9092 4.53516 18.4629 5.66309 18.4629ZM5.82715 17.1846C5.45117 17.1846 5.25293 16.9863 5.25293 16.5967V15.0449C5.25293 14.6553 5.45117 14.4639 5.82715 14.4639H10.8242C11.2002 14.4639 11.4053 14.6553 11.4053 15.0449V16.5967C11.4053 16.9863 11.2002 17.1846 10.8242 17.1846H5.82715Z"></path></svg>
                    </template>

                    <template #item>Layout</template>

                    <template #itemMeta>Table</template>
                </base-collection-side-menu-item-col-3>
            </div>

            <div style="padding-top: 6px; padding-bottom: 6px; box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px;">
                <base-collection-side-menu-item-col-3
                    @click.stop="setCurrentComponent('properties')"
                >
                    <template #graphic>
                        <svg role="graphics-symbol" viewBox="0 0 16 16" class="properties" style="width: 24px; height: 16px; display: block; fill: inherit; flex-shrink: 0; margin-right: -2px;"><path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z"></path></svg>                    
                    </template>
                    
                    <template #item>Properties</template>

                    <template #itemMeta>{{ totalPropertiesVisible }} shown</template>
                </base-collection-side-menu-item-col-3>
            </div>
        </template>
    </base-collection-side-menu>
</template>

<script setup>
import { onBeforeMount, defineProps } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseCollectionSideMenu from './BaseCollectionSideMenu.vue';
import BaseCollectionSideMenuItemCol3 from './BaseCollectionSideMenuItemCol3.vue';
import { useCollectionsStore } from '@/stores/collections';
import { useRecordValuesStore } from '@/stores/recordValues';

const props = defineProps({
    collectionViewId: {
        type: String,
        required: true
    }
})

const collectionStore = useCollectionsStore();

function setCurrentComponent(componentName) {
    collectionStore.setCurrentComponent(componentName);
}

let totalPropertiesVisible = -1;

onBeforeMount(() => {
    const recordsValueStore = useRecordValuesStore();

    totalPropertiesVisible = recordsValueStore.getRecordValue(
        props.collectionViewId,
        "collection_view",
        "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    ).getProperties().length;

    if (isNaN(totalPropertiesVisible)) totalPropertiesVisible = 0;
})
</script>