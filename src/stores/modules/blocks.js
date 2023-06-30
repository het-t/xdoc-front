import { Block } from '@/api';

const state = {
    blocks: {}
}

const getters = {
    getBlockData: (state) => (blockId) => {
        return state.blocks[blockId]
    }
}

const mutations = {
    setBlockData(state, {data}) {
        state.blocks[data.id] = data
    }
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