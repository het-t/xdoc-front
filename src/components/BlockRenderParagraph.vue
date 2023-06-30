<template>
    <div
        :data-block-id="props.blockDataRaw.id"      
        contenteditable="true"
        style="display: flex;"
    >
        <template v-for="(richText, index) in content?.rich_text" :key="index">
            <BlockRenderRichText
                :richText="richText"
                :blockId="props.blockDataRaw.id.toString()"
                data-contenteditable-leaf="true"
            ></BlockRenderRichText>
        </template>
    </div>
</template>

<script setup>
import { onMounted, defineProps, ref } from 'vue'
import BlockRenderRichText from './BlockRenderRichText.vue'

const props = defineProps({
    blockDataRaw: Object,
})

let content = ref('')

onMounted(() => {
    content.value = props.blockDataRaw['paragraph']
})

</script>