<script setup>
import { computed, defineProps } from 'vue';
import { useStore } from 'vuex';
import BlockRenderRichText from './BlockRenderRichText.vue';

    const props = defineProps({
        treeId: String,
        blockId: String
    })

    const store = useStore()
    const blockDataInStore = computed(() => 
        store.getters['blocks/getBlockData'](props.blockId)
    )
    const headingType = computed(() => 
        blockDataInStore.value.type
    )
    const headingValue = computed(() => 
        blockDataInStore.value[headingType.value]
    )
</script>

<template>
    <div 
        :data-block-id="props.blockId"
        contenteditable="true"
        class="xdoc-heading xdoc-selectable"
    >
        <BlockRenderRichText 
            :richText="headingValue.rich_text"
            :blockId="blockId"
            data-contenteditable-leaf="true"
        ></BlockRenderRichText>
    </div>
</template>