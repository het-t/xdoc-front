<template>
    <div 
        @input="textChange"
        :style="getStyleFromHeadingType"
        :data-block-id="props.blockId"
        contenteditable="true"
    >
        <BlockRenderRichText 
            v-if="headingType"
            :richText="heading.rich_text"
            :blockId="blockId"
        ></BlockRenderRichText>
    </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';
import BlockRenderRichText from './BlockRenderRichText.vue';
import { Block } from '@/api';

    const props = defineProps({
        blockDataRaw: Object,
        blockId: String
    })

    let heading = ref('')
    let headingType = ref('')
    let blockDataRawLocal = ''
        
    onMounted(() => {
        blockDataRawLocal = props.blockDataRaw
        headingType.value = blockDataRawLocal.type 
        heading.value = blockDataRawLocal[headingType.value]
    })

    function textChange(e) {
        blockDataRawLocal[headingType.value].rich_text.content = e.target.innerText
        Block.edit()
    }

    function getStyleFromHeadingType() {
        switch(headingType.value) {
            case 'heading_1': 
                return 'font-weight: 600';
            case 'heading_2':
                return 'font-weight: 500';
            case 'heading_3':
                return 'font-weight: 400'; 
        }
    }
</script>