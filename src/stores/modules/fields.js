import { fields } from "@/api"

const state = {
    count: '',
    list: {},
    types: [],
    paginationKey: 0,
}

const getters = {
    getList: (state) => ({from, to}) => {
        const path = from + '_' + to
        return state.list[path]
    },
    getPaginationKey: (state) => {
        return state.paginationKey
    },
    getTypes(state) {
        return state.types
    }
}

const mutations = {
    setCount(state, count) {
        state.count = count
    },
    setList(state, {from, to, list}) {
        const path = from + '_' + to
        state.list[path] = list
    },
    setTypes(state, types) {
        state.types = types
    },
    refetch(state) {
        state.list = {}
        state.count = ''
        
        if (state.paginationKey == 0) state.paginationKey = 1
        else state.paginationKey = 0
    }
}

const actions = {
    getList(context, {from, to}) {
        return fields.get({
            from,
            to
        })
        .then(res => context.commit('setList', {
            from,
            to,
            list: res.data
        }))
    },
    getTypes(context) {
        return fields.getTypes()
        .then(res => context.commit('setTypes', res.data))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}