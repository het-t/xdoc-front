const state = {
    transactions: []
}

const getters = {
    getTransaction(state) {
        return state.transaction.shift()
    }
}

const mutations = {
    setTransaction(state, transaction) {
        state.transaction.push(transaction);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}