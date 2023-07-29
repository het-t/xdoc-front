const state = {
    list: {}
}

const getters = {

    getTree: (state) => (treeId) => {
        return state.list[treeId]
    },

    //depth-first-search to find the specific block 
    //takes cb and args(eval) to perform operation on found block
    getNode: (state) => (treeId, blockIdToFind, cb = undefined) => {
        let searchQueue = []

        if (state.list[treeId]) {
            searchQueue.push(state.list[treeId])

            while(searchQueue.length !== 0) {
                const key = searchQueue.pop()

                if (key?.id == blockIdToFind) {
                    if (cb !== undefined) {
                        cb(key)
                    }  
                    return key;  
                }
                else if (key?.children?.length && key?.children?.[0] !== null) {
                    searchQueue.push(...key.children)
                }
            }
        }
        return "PARENT_NOT_FOUND"
    }
}

const mutations = {    
    //creates new tree
    setNewTree(state, {treeId}) {
        state.list[treeId] = {
            id: treeId,
            children: []
        }
    }
}

const actions = {
    addChild({getters}, {treeId, parentBlockId, childBlockId}) {
        getters['getNode'](treeId, parentBlockId, function(key) {
            if (childBlockId !== null) {
                key.children.push({
                    id: childBlockId,
                    children: []
                })
            }
        })
    },
    addNewChild({getters, commit}, {treeId, parentBlockId, childBlockId, additionalData = undefined, setFocusOnCreatedBlock = false}) {
        const block = getters['getNode'](treeId, parentBlockId)

        let index
        if (block.children.length) {
            if (additionalData.appendBelow) {
                index = block.children.findIndex((block) => {
                    return block.id == additionalData.appendBelow
                })
            }
        }
        else index = block.children.length

        block.children.splice(index + 1, 0, {
            id: childBlockId,
            children: []
        })
        
        if (setFocusOnCreatedBlock === true) {
            commit('blocks/setFocusBlockId', childBlockId, {
                root: true
            })
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}