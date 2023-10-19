const state = {
    collections: {}
}

const getters = {
    getCurrentComponent: (state) => ({collectionId}) => {
        if(state.collections[collectionId]?.length > 0) {
            return state.collections[collectionId][state.collections[collectionId].length - 1]
        }
        return null
    }
}

const mutations = {
    setCurrentComponent(state, {collectionId, component}) {
        if(!state.collections[collectionId]) {
            state.collections[collectionId] = []
        }
        state.collections[collectionId].push(component)
    },
    removeCurrentComponent(state, {collectionId}) {
        state.collections[collectionId].pop()
    },
    removeAllComponent(state, {collectionId}) {
        state.collections[collectionId] = []
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}