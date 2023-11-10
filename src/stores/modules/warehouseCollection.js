const state = {
    types: [
        'Text',
        'Number',
        'Date',
        'Select',
        'Multiselect',
        'Checkbox',
        'Person',
        'Url'
    ]
}

const getters = {
    getPropertyTypes(state) {
        return state.types
    }
}

const mutations = {

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