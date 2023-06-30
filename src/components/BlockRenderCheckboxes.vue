<template>
    <div :data-block-id="props.blockId">
        <input type="checkbox" :checked="checked">
        
        <BlockRenderRichText v-if="content !== ''"
            :richText="content.rich_text"
            :blockId="blockId"
        ></BlockRenderRichText>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import BlockRenderRichText from './BlockRenderRichText.vue';

    const props = defineProps({
        blockDataRaw: Object,
        blockId: String
    })

    let content = ref('')
    let checked = ref(false)

    onMounted(() => {
        content.value = props.blockDataRaw['checkbox']
        checked.value = props.blockDataRaw['checkbox'].checked
    })
</script>