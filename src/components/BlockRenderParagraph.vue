<template>
    <div
        :data-block-id="props.blockId"      
        contenteditable="true"
        placeholder='Press "/" for commands'
    >
        <div v-if="blockDataInStore?.length" 
            style="display: flex; min-height: 1em;"
        >
            <template v-for="(richText, index) in blockDataInStore" :key="index">
                <BlockRenderRichText
                    :richText="richText"
                    :blockId="props.blockId.toString()"
                    data-contenteditable-leaf="true"
                ></BlockRenderRichText>
            </template>
        </div>

        <template
            v-if="childBlocksInStore?.length && childBlocksInStore?.[0] !== null"
        >
            <RenderBlock v-for="block in childBlocksInStore"
                :treeId="props.treeId"
                :blockId="block.id.toString()"
                @propogateKeyUp="propogateKeyUp($event)"
                :key="block.id"
                style="margin-left: 12px;"
            ></RenderBlock>
        </template>
    </div>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue'
import { useStore } from 'vuex'
import BlockRenderRichText from './BlockRenderRichText.vue'
import RenderBlock from './RenderBlock.vue'

const props = defineProps({
    treeId: String,
    blockId: String,
})

const emits = defineEmits([
    'propogateKeyUp'
])

const store = useStore()
const blockDataInStore = computed(() => store.getters['blocks/getBlockData'](props.blockId).paragraph.rich_text)
const childBlocksInStore = computed(() => store.getters['trees/getNode'](props.treeId, props.blockId).children)

//handles key up events for `slash` to allow user to append block
function propogateKeyUp(e, defaultBlockId = "1") {
    if (['Enter', '/', 'Backspace', 'Escape'].includes(e.key)) {
        if (e.key === 'Enter') {            
            if (!e.__customEventData) e.__customEventData = {}
            e.__customEventData.defaultBlockId = defaultBlockId
        }

        emits('propogateKeyUp', e)
    }
}
</script>