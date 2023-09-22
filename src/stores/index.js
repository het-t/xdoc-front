import { createStore } from "vuex";
import blocks from "./modules/blocks";
import trees from "./modules/trees";

const state = {
    path: [],
    menuLeft: 'full',

    overlayComponentsList: [
        {name: 'SidePeekRenderer', data: {}}
    ],

    sidePeekPageId: "l"
}

const getters = {
    getPath(state) {
        return state.path
    },
    getMenuState(state) {
        return state.menuLeft
    },
    getOverlayComponentsList(state) {
        return state.overlayComponentsList;
    },
    getSidePeekPageId(state) {
        return state.sidePeekPageId
    }
}

const mutations = {
    setNewEntryInPath(state, {index, value}) {
        if (index === 0) state.path = [];
        state.path.push(value);
    }, 
    setMenuState(state, value) {
        state.menuLeft = value;
    },
    setOverlayComponentsList(state, {name, data}) {
        state.overlayComponentsList.push({name, data});
    },
    resetOverlayComponentsList(state) {
        state.overlayComponentsList = []
    },
    setSidePeekPageId(state, {pageId}) {
        state.sidePeekPageId = pageId;
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