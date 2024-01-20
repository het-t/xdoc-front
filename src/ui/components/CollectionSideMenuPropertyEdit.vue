<template>
    <base-collection-side-menu
        :top-part="false"
    >
        <template #header>Edit property</template>

        <template #top-part>

        </template>

        <template #mid-part>
            <div style="padding-top: 6px; padding-bottom: 6px;">
                <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                    <div style="margin-left: 12px; margin-right: auto; min-width: 0; flex-shrink: 0;">
                        <base-button style="padding-left: 6px; padding-right: 0; height: 28px; width: 28px; border: 1px solid rgba(55, 53, 47, 0.16);">
                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="typesText" style="width: 14px; height: 14px; display: block; fill: rgb(85, 83, 78); flex-shrink: 0; margin-right: 6px;"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg>
                        </base-button>
                    </div>

                    <div style="margin-right: 12px; margin-left: 6px; min-width: 0; flex: 1 1 auto;">
                        <div style="display: flex;">
                            <div class="xdoc-focusable-within" style="display: flex; align-items: center; width: 100%; font-size: 14px; line-height: 20px; padding: 3px 6px; position: relative; border-radius: 4px; box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset; background: rgba(242, 241, 238, 0.6); cursor: text; height: 28px;">
                                <input 
                                    :value="state.propertyName"
                                    type="text" 
                                    placeholder="Property name" 
                                    style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px;"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="padding-top: 6px; padding-bottom: 6px;">              
                <base-collection-side-menu-item-col-3
                    :graphic="false"
                    @click.stop="handlePropertyTypeChange"
                >
                    <template #item>
                        Type
                    </template>

                    <template #itemMeta>
                        <svg role="graphics-symbol" viewBox="0 0 16 16" class="typesText" style="width: 14px; height: 14px; display: block; fill: inherit; flex-shrink: 0; margin-right: 6px;"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg>
                        {{ state.propertyType }}
                    </template>
                </base-collection-side-menu-item-col-3>
            </div>
        </template>
    </base-collection-side-menu>
</template>

<script setup>
import { computed, onMounted, reactive } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseCollectionSideMenu from './BaseCollectionSideMenu.vue';
import BaseCollectionSideMenuItemCol3 from './BaseCollectionSideMenuItemCol3.vue';
import { useCollectionsStore } from '@/stores/collections';

const state = reactive({
    propertyName: '',
    propertyType: ''
})

const collectionStore = useCollectionsStore();

const propertyEditData = computed(function () {
    return collectionStore.getCollectionPropertyEditData;
})

function handlePropertyTypeChange() {
    console.log("CollectionSideMenuPropertyEdit.vue => handlePropertyTypeChange()")
    collectionStore.setCurrentComponent("propertyTypes")
}

onMounted(function() {
    if (propertyEditData.value?.name && propertyEditData.value?.type) {
        state.propertyName = propertyEditData.value.name;
        state.propertyType = propertyEditData.value.type;
    }
})
</script>