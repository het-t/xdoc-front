import { records } from '@/api/'

const state = {
    rootRecordId: '',
    upcomings: [],
    baseRecords: {}
}

const getters = {
    getRootRecordId(state) {
        return state.rootRecordId
    },
    getBaseRecordsIds: (state) => (rootRecordId) => {
        return state.baseRecords[rootRecordId]
    },
    getUpcomings (state) {
        return state.upcomings
    }
}

const mutations = {
    setRootRecordId(state, rootRecordId) {
        state.rootRecordId = rootRecordId
    },
    setBaseRecordsIds(state, {rootRecordId, recordsIds}) {
        state.baseRecords[rootRecordId] = recordsIds
        console.log(state.baseRecords[rootRecordId])
    },
    setUpcomings(state, upcomings) {
        state.upcomings = upcomings
    }
}

const actions = {
    fetchBaseRecordsIds(context, rootRecordId) {
        context.commit('setRootRecordId', rootRecordId)
        records.getBases({
            rootRecordId
        })
        .then(res => {
            context.commit('setBaseRecordsIds', {
                rootRecordId,
                recordsIds: res.data
            })
        })
    },
    fetchUpcomings(context) {
        records.get({
            from: 0,
            to: 100
        })
        .then(res => {
            context.commit('setUpcomings', res.data)
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