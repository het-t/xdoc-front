import { createStore } from "vuex";
import blocks from "./modules/blocks";
import trees from "./modules/trees";

const state = {
    path: [],
    menuLeft: 'full',
}

const getters = {
    getPath(state) {
        return state.path
    },
    getMenuState(state) {
        return state.menuLeft
    }
}

const mutations = {
    setNewEntryInPath(state, {index, value}) {
        if (index === 0) state.path = [];
        state.path.push(value);
    }, 
    setMenuState(state, value) {
        state.menuLeft = value;
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