<script setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import BlockRenderRichText from './BlockRenderRichText.vue'

const props = defineProps({
    treeId: String,
    blockId: String,
})

const store = useStore()

const blockDataInStore = computed(() => 
    store.getters['blocks/getBlockData'](props.blockId).list
)
</script>

<template>
    <div
        :data-block-id="props.blockId"      
        contenteditable="true"
        class="xdoc-list xdoc-selectable"
    >
        <template v-for="(richText, index) in blockDataInStore" :key="index">
            <BlockRenderRichText
                :richText="richText"
                :blockId="blockId"
                data-contenteditable-leaf="true"
            ></BlockRenderRichText>
        </template>
    </div>
</template>