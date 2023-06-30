import { createStore } from "vuex";
import blocks from "./modules/blocks";
import trees from "./modules/trees";

export default createStore({
    modules: {
        blocks,
        trees
    }
})