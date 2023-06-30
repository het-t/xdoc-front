<template>
    <template v-if="childBlocksInStore?.length && childBlocksInStore[0] !== null">
        <template v-for="block in childBlocksInStore" :key="block.id">
            <RenderBlock
                @propogateKeyUp="handleKeyUp"
                :treeId="pageId"
                :blockDataRaw="getBlockData(block.id)"
                :blockId="getBlockData(block.id).id.toString()"
            ></RenderBlock>
        </template>
    </template>


    <div 
        v-else
        contenteditable="true"
        @keyup="handleKeyUp"
    >
    </div>

    <BaseMenu
        v-show="state.menuVisibility"
        @handleSelection="appendNewBlock"
    ></BaseMenu>
</template>

<script setup>

import { onMounted, inject, watch, reactive, defineProps, computed } from 'vue';
import RenderBlock from './RenderBlock.vue';
import BaseMenu from './BaseMenu.vue';
import { useStore } from 'vuex';

const state = reactive({
    menuVisibility: false,
    menuOpenForBlockId: '',
    menuOpenForEle: ''
})

let pageId = inject("blockId")

const props = defineProps({
    pageDataRaw: Object
})


const store = useStore()

watch(pageId, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        store.commit('trees/setNewTree', {
            treeId: pageId.value
        })
        getChildBlocksData()
    }
})

onMounted(() => {
    store.commit('trees/setNewTree', {
        treeId: pageId.value
    })
    getChildBlocksData()
})

const childBlocksInStore = computed(() => store.getters['trees/getNode'](pageId.value, pageId.value).children)

// getting data of children blocks if any
function getChildBlocksData() {
    const childBlocksIds = props.pageDataRaw.children

    new Promise((resolve, reject) => {
        if (childBlocksIds[0] === null) {
            resolve()
        }
        else {
            Promise.all([
                ...childBlocksIds.map(blockId => {
                    return store.dispatch('blocks/fetchBlockData', {
                        blockId
                    })
                })
            ])
            .then(() => {
                resolve()
            })
            .catch(() => reject())
        }
    })
    .then(() => {
        for(let i = 0; i!==childBlocksIds.length; i++) {
            store.dispatch('trees/addChild', {
                treeId: pageId.value,
                parentBlockId: pageId.value,
                childBlockId: childBlocksIds[i]
            })
        }
    })
}

//handles key up events for `slash` to allow user to append block
function handleKeyUp(e) {
    switch(e.key) {
        case 'Enter': {
            state.menuVisibility = false
            state.menuOpenForEle = e.target
            state.menuOpenForBlockId = e.target.getAttribute('data-block-id')
            break
        }
        case '/': {
            state.menuVisibility = true
            state.menuOpenForEle = e.target
            state.menuOpenForBlockId = e.target.getAttribute('data-block-id')
            break
        }
        default: {
            state.menuOpenForBlockId = ''
            state.menuOpenForEle = ''
            state.menuVisibility = false
        }
    }
}

//append block to parentBlock
function appendNewBlock(e) {
    store.dispatch('trees/addChild', {
        treeId: pageId.value,
        parentBlockId: state.menuOpenForBlockId,
        childBlockId: e.blockData.id
    })

    store.commit('blocks/setBlockData', {
        data: e.blockData
    })

    setTimeout(() => {
        console.log(state.menuOpenForEle)
    }, 500)
}

function getBlockData(blockId) {
    return store.getters['blocks/getBlockData'](blockId)
}
</script>