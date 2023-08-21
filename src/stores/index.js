import { createStore } from "vuex";
import blocks from "./modules/blocks";
import trees from "./modules/trees";

const state = {
    path: [],
    menuLeft: 'full',
    overlayVisibility: false,
    overlayComponent: '',
    overlayComponentProps: {}
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
    getOverlayComponent(state) {
        return state.overlayComponent
    },
    getOverlayComponentProps(state) {
        return state.overlayComponentProps
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
    setOverlayComponent(state, value) {
        state.overlayComponent = value
    },
    setOverlayComponentProps(state, value) {
        state.overlayComponentProps = value
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