import {users} from '@/api'

const state = {
    count: '',
    list: {},
    paginationKey: 0
}

const getters = {
    getList: (state) => ({from, to}) => {
        const path = from + "_" + to
        return state.list[path]
    },
    getPaginationKey: (state) => {
        return state.paginationKey
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
    refetch(state) {
        state.list = {}
        state.count = ''
        
        if (state.paginationKey == 0) state.paginationKey = 1
        else state.paginationKey = 0
    }
}

const actions = {
    getList(context, {from, to}) {
        return users.get({
            from,
            to
        })
        .then(res => context.commit('setList', {
            from,
            to,
            list: res.data
        }))
    }
}

export default {
    namespaced: true,
    state, 
    getters,
    mutations,
    actions
}