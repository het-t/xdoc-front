<template>
    <div
        style="border-radius: 4px; background: white; position: relative; max-width: calc(100vw - 24px); box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px; overflow: hidden;"
    >
        <div
            style="display: flex; flex-direction: column; width: 324px; min-width: 180px; max-width: calc(100vw - 24px); height: 100%; max-height: 40vh;"
        >

            <div
                style="display: flex; flex-direction: row; width: 100%; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); font-size: 12px; font-weight: 500;"
            >

                <div
                    style="text-overflow: ellipsis; margin-top: 6px; margin-bottom: 6px; padding-right: 3px; padding-left: 3px;"
                >
                    Basic blocks
                </div>

                <div 
                    style="margin-left: auto; overflow: hidden;"
                >
                </div>
            </div>

            <div 
                v-for="(block, index) in possibleBlocks()" 
                @click.prevent="handleBlockSelection(block.id)"
                :key="index"
            >
                {{ block.label }}    
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import Paragraph from '@/models/blocks/Paragraph';

const emits = defineEmits([
    'handleSelection'
])

const allBlocks = [
    { label: 'Paragraph', id: 1 },
    { label: 'Checkbox', id: 2 },
    { label: 'List', id: 3 },
]

function possibleBlocks(filter) {
    if (filter) filter = filter?.toLowerCase()
    else filter = ''

    return allBlocks.filter((block) => block.label.toLowerCase().includes(filter))
}

function handleBlockSelection(createBlockWithId) {
    let childBlockData;

    switch(createBlockWithId) {
        case 1: {
            childBlockData = new Paragraph({})
            break
        }
        // case 2: {
        //     childBlockData = new 
        // }
    }

    emits('handleSelection', {
        blockData: childBlockData
    })
}
</script>