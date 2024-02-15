<template>
    <div class="xdoc-collection-view-tab-button"
        style="display: flex; align-items: center; background: none; height: 100%;"
        @click="handleViewBtnClick"
    >
        <div role="tab"
            tabindex="0"
            aria-selected="false"
            style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; flex-shrink: 0; white-space: nowrap; height: 28px; border-radius: 4px; font-size: 14px; line-height: 1.2; min-width: 0px; padding-left: 8px; padding-right: 8px; color: rgba(55, 53, 47, 0.65); font-weight: 500; max-width: 220px;"
        >
            <svg v-if="collectionViewTabRecordValueInStore.type === 'table'" role="graphics-symbol" viewBox="0 0 16 16" class="collectionTable" style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.65); flex-shrink: 0; margin-right: 6px;">
                <path d="M2.39697 14.4634H13.5964C15.0532 14.4634 15.8311 13.6921 15.8311 12.2485V4.24609C15.8311 2.80249 15.0532 2.03125 13.5964 2.03125H2.39697C0.940186 2.03125 0.162354 2.7959 0.162354 4.24609V12.2485C0.162354 13.6987 0.940186 14.4634 2.39697 14.4634ZM1.63232 4.39771C1.63232 3.79126 1.94214 3.50122 2.52222 3.50122H7.28809V5.74243H1.63232V4.39771ZM13.4712 3.50122C14.0447 3.50122 14.3611 3.79126 14.3611 4.39771V5.74243H8.70532V3.50122H13.4712ZM1.63232 9.3811V7.10693H7.28809V9.3811H1.63232ZM8.70532 9.3811V7.10693H14.3611V9.3811H8.70532ZM2.52222 12.9934C1.94214 12.9934 1.63232 12.7034 1.63232 12.0969V10.7522H7.28809V12.9934H2.52222ZM14.3611 12.0969C14.3611 12.7034 14.0447 12.9934 13.4712 12.9934H8.70532V10.7522H14.3611V12.0969Z">
                </path>
            </svg>

            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px;">
                {{ collectionViewTabRecordValueInStore.getName() }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useRecordValuesStore } from '@/stores/recordValues';

const emits = defineEmits([
    "view-change"
])

const props = defineProps({
    blockId: {
        type: String,
        required: true
    },
    spaceId: {
        type: String,
        required: true
    }
})

const recordValuesStore = useRecordValuesStore();

const collectionViewTabRecordValueInStore = recordValuesStore.getRecordValue(
    props.blockId,
    "collection_view",
    props.spaceId
)

function handleViewBtnClick() {
    console.log(collectionViewTabRecordValueInStore.id)
    emits("view-change", collectionViewTabRecordValueInStore.id)
}
</script>