<template>
    <div
        :data-block-id="props.blockId"      
        contenteditable="true"
        class="xdoc-paragraph xdoc-selectable"
        placeholder='Press "/" for commands'
    >
        <div style="display: flex; flex-direction: column; min-height: 1em;">
            <BlockRenderRichText
                :blockId="props.blockId"
                data-contenteditable-leaf="true"
            ></BlockRenderRichText>
        </div>

        <template v-if="blockChildrenRecordValueInStore?.length">
            <BlockRender v-for="childBlockId in blockChildrenRecordValueInStore"
                :blockId="childBlockId"
                style="margin-left: 12px;"
                :key="childBlockId"
            ></BlockRender>
        </template>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import BlockRenderRichText from './BlockRenderRichText.vue'
import BlockRender from './BlockRender.vue'
import { useRecordValuesStore } from '@/stores/recordValues';

const props = defineProps({
    blockId: {
        type: String,
        required: true
    },
})

const recordValuesStore = useRecordValuesStore();

const blockChildrenRecordValueInStore = recordValuesStore.getRecordValue(
    props.blockId,
    "block",
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
)?.content
</script>