<template>
    <div>
        <h1 
            v-if="headingType === 'heading_1'"
            style="font-weight: 600;"
        >
            <BlockRenderRichText 
                :richText="heading"
                :blockId="blockId"
            ></BlockRenderRichText>
        </h1>

        <h2 
            v-else-if="headingType === 'heading_2'"
            style="font-weight: 500 !important;"
        >
            <BlockRenderRichText 
                :richText="heading"
                :blockId="blockId"    
            ></BlockRenderRichText>
        </h2>

        <h3 
            v-else-if="headingType === 'heading_3'"
            style="font-weight: 400;"    
        >
            <BlockRenderRichText 
                :richText="heading"
                :blockId="blockId"
            ></BlockRenderRichText>
        </h3>
    </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';
import BlockRenderRichText from './BlockRenderRichText.vue';

    const props = defineProps({
        blockDataRaw: Object,
        blockId: String
    })
    
    let heading = ref('')
    let headingType = ref('')

    onMounted(() => {
        headingType.value = props.blockDataRaw.type 
        heading.value = props.blockDataRaw[headingType.value]
    })
</script>