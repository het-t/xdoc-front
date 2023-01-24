import { records } from '@/api/'

const state = {
    rootRecordId: '',
    baseRecords: {}
}

const getters = {
    getRootRecordId(state) {
        return state.rootRecordId
    },
    getBaseRecords: (state) => (rootRecordId) => {
        return JSON.stringify(state.baseRecords[rootRecordId])
    }
}

const mutations = {
    setRootRecordId(state, rootRecordId) {
        state.rootRecordId = rootRecordId
    },
    setBaseRecords(state, {rootRecordId, records}) {
        state.baseRecords[rootRecordId] = records
    }
}

const actions = {
    fetchBaseRecords(context, rootRecordId) {
        context.commit('setRootRecordId', rootRecordId)
        records.getBases({
            rootRecordId,
            from: 0,
            to: 100
        })
        .then(res => {
            context.commit('setBaseRecords', {
                rootRecordId,
                records: res.data
            })
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