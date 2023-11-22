<template>
    <div 
        class="xdoc-scroller vertical" 
        style="z-index: 1; display: flex; flex-direction: column; flex-grow: 1; position: relative; margin-right: 0; margin-bottom: 0; overflow: hidden auto;"
    >
        <div style="position: absolute; top: 0; left: 0;">
            <div></div>
        </div>

        <div
            data-contenteditable-root="true" 
            contenteditable="true"
            class="whenContentEditable"
            style="display: flex; flex-direction: column; position: relative; align-items: center; caret-color: rgb(55, 53, 47); width: 100%; flex-grow: 1; --whenContentEditable--WebkitUserModify: read-write-plaintext-only"
        >
            <span style="height: 1px; width: 1px; caret-color: transparent;"></span>

            <!-- full page -->
            <page-peek-full v-if="props.peekMode !== 'c' && props.peekMode !== 's'" />

            <!-- center peek -->
            <page-peek-center-side v-if="props.peekMode === 'c' || props.peekMode === 's'" />

            <span style="height: 1px; width: 1px; caret-color: transparent;"></span>
        </div>

        <div 
            class="xdoc-presence-container"
            style="position: absolute; top: 0; left: 0; z-index: 89;"
        >
            <div></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue';
import PagePeekFull from "@/components/PagePeekFull.vue";
import PagePeekCenterSide from "@/components/PagePeekCenterSide.vue";

import { useStore } from 'vuex';

const store = useStore()

const props = defineProps({
    peekMode: String,
    pageId: String
})

onMounted(() => {
    fetchPageData()
})

function fetchPageData() {
    store.dispatch('blocks/fetchBlockData', {
        blockId: props.pageId
    })
        .then((page) => {
            store.commit('trees/setNewTreeIfNotInStore', {
                treeId: props.pageId
            })
            return page
        })
        .then((page) => {
            for (let i = 0; i !== page.children.length; i++) {
                store.dispatch('trees/addChild', {
                    treeId: props.pageId,
                    parentBlockId: props.pageId,
                    childBlockId: page.children[i]
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}
</script>


<style scoped>
[contenteditable]:empty:after {
    content: attr(placeholder);
}
</style>