import { createStore } from "vuex";
import blocks from "./modules/blocks";
import trees from "./modules/trees";

const state = {
    path: [],
    menuLeft: 'full',
    overlayRequesterBlockId: '',
    overlayRequestReason: '',
    overlayVisibility: false,
    overlayPropertyValue: ''
}

const getters = {
    getPath(state) {
        return state.path
    },
    getMenuState(state) {
        return state.menuLeft
    },
    getOverlayVisibility(state) {
        return state.overlayVisibility
    },
    getOverlayPropertyValue(state) {
        return state.overlayPropertyValue
    },
    getOverlayRequestData(state) {
        return {
            requesterBlockId: state.overlayRequesterBlockId,
            reason: state.overlayRequestReason
        }
    }
}

const mutations = {
    setNewEntryInPath(state, {index, value}) {
        if (index === 0) state.path = []
        state.path.push(value)
    }, 
    setMenuState(state, value) {
        state.menuLeft = value
    },
    setOverlayVisibility(state, value) {
        state.overlayVisibility = value
    },
    setOverlayPropertyValue(state, value) {
        state.overlayPropertyValue = value
    },
    setOverlayRequestData(state, {requesterBlockId, reason}) {
        state.overlayRequesterBlockId = requesterBlockId
        state.overlayRequestReason = reason
    }
}
export default createStore({
    state,
    getters,
    mutations,
    modules: {
        blocks,
        trees
    }
})