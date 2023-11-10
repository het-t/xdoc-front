const state = {
    propertyEdit: {}
}

const getters = {
    getPropertyEdit: (state) => (collectionId) => {
        return state.propertyEdit[collectionId];
    }
}

const mutations = {
    setPropertyEdit(state, {collectionId, name, type}) {
        state.propertyEdit[collectionId] = {
            name,
            type
        };
    },
    cleanPropertyEdit(state, {collectionId}) {
        delete state.propertyEdit[collectionId]
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}