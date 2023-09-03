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

                resolve(res.data)
            })
            .catch(() => reject())
        })
    },
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}