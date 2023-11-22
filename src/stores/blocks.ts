import { defineStore } from "pinia"

interface state {
    blocks: object
}

export const useBlocksStore = defineStore('blocks', {
    state: (): state => ({
        blocks: {}
    }),
    getters: {
        getBlockById: (state): object => (id: string): object => {
            return [state.blocks][id as any];
        }
    },
    actions: {
        setBlockById (id: string, payload: object) {
            [this.blocks][id as any] = payload;
        }
    }
})