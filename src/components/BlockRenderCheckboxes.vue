<script setup>
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';
import BlockRenderRichText from './BlockRenderRichText.vue';

    const props = defineProps({
        treeId: String,
        blockId: String
    })

    const store = useStore()
    const blockDataInStore = computed(() => 
        store.getters['blocks/getBlockData'](props.blockId).checkbox
    )
</script>

<template>
    <div 
        :data-block-id="props.blockId"
        contenteditable="true"
        class="xdoc-checkbox xdoc-selectable"
    >
        <div style="display: flex;">
            <input type="checkbox" :checked="blockDataInStore.checked">

            <BlockRenderRichText 
                v-if="blockDataInStore.rich_text.content !== ''" 
                :richText="blockDataInStore.rich_text" 
                :blockId="blockId"
                data-contenteditable-leaf="true"
            ></BlockRenderRichText>
        </div>
    </div>
</template>