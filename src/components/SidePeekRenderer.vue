<template>
    <div 
        class="xdoc-peek-renderer"
        role="region"
        aria-label="Side peek"
        :style="style"
    >
        <div style="width: 100%; height: 100%;"></div>
        
        <div 
            v-if="getSidePeekPageId !== null"
            style="display: flex; flex-direction: column; position: absolute; background: white; margin-left: auto; box-shadow: rgba(15, 15, 15, 0.016) 0 0 0 1px, rgba(15, 15, 15, 0.03) 0 3px 6px, rgba(15, 15, 15, 0.06) 0 9px 24px;"
            :style="getPeekMode === 's' ? ' top: 0; right: 0; width: 100%; height: 100%; border-radius: 0;' : 'top: 72px; left: 72px; right: 72px; margin-right: auto; height: calc(100% - 144px); max-width: 970px; border-radius: 3px;'"
        >
            <div v-if="getPeekMode === 's'" style="position: absolute; top: 0; left: -1px; bottom: -1px; pointer-events: auto; flex-grow: 0; z-index: 109;">
                <div style="cursor: col-resize; height: 100%; width: 12px; margin-left: auto-6px;"></div>
            </div>

            <div style="z-index: 110; background: white; border-top-left-radius: 5px; border-top-right-radius: 5px;">
                <div style="height: 44px; display: flex; justify-content: space-between; align-items: center; padding-left: 12px; padding-right: 12px;">
                    <div style="display: flex; align-items: center;" class="hvr-bg">
                        <div 
                            role="button"
                            tabindex="0"
                            @click="closeSidePeek"
                            style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer;display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 24px; width: 24px; padding: 0;"
                        >
                            <font-awesome-icon style="height: 16px; width: 16px;" :icon="['fas', 'angles-right']"></font-awesome-icon>
                        </div>
                    </div>

                    <div style="flex-grow: 1; flex-shrink: 1;"></div>

                    <div style="display: flex; align-items: stretch; flex-grow: 0; flex-shrink: 0; z-index: 1;">

                    </div>
                </div>
            </div>

            <RenderPage 
                page-id-from="query"
                peek-mode="side-peek"
                :style="getPeekMode === 'c' ? 'transform: translateZ(0);' : ''"
            />
        </div>
    </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import RenderPage from "@/components/RenderPage.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const state = reactive({
    width: 522,
})

const store = useStore();
const route = useRoute();

const getSidePeekPageId = computed(function () {
    return store.getters['getSidePeekPageId'];
})

const getPeekMode = computed(function () {
    return route.query.pm
})

const style = computed(function() {
    let s = "position: fixed; ";

    if (getPeekMode.value !== "c") {
        s += `top: 0px; right: 0px; bottom: 0px; width: ${state.width}px; z-index: 109; transition-property: transform; transition-duration: 270ms; transition-timing-function: ease;`;
    }
    else {
        s += "inset: 0; z-index: 99; background-color: rgba(0, 0, 0, 0.4);"
    }

    if (getSidePeekPageId.value === null) {
        s += "transform: translateX(100%) translateZ(0);"
    }

    return s;
})

function closeSidePeek() {
    store.commit("setSidePeekPageId", {
        pageId: null
    });

    if (getPeekMode.value === 'c') {
        store.commit("resetOverlayComponentsList");
    }
}
</script>