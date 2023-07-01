import { Block } from '@/api';

const state = {
    focusBlockId: '',
    blocks: {}
}

const getters = {
    getFocusBlockId(state) {
        return state.focuseBlockId
    },
    getBlockData: (state) => (blockId) => {
        return state.blocks[blockId]
    }
}

const mutations = {
    setFocusBlockId(state, blockId) {
        state.focusBlockId = blockId
    },
    setBlockData(state, {data}) {
        state.blocks[data.id] = data
    },
    // removeCommandFromBlock(state, {blockId, length}) {
    //     state.blocks[blockId]
    // }
}

const actions = {
    fetchBlockData({commit}, {blockId}) {
        return new Promise((resolve, reject) => {
            Block.get({
                id: blockId,
            })
            .then(res => {
                commit('setBlockData', {
                    data: res.data
                })
                resolve()
            })
            .catch(() => reject())
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}