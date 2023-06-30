export default class Node {
    constructor({parentBlock, childrenBlocks}) {
        this.parent = parentBlock;
        this.children = childrenBlocks;
    }

    addChildren(childrenBlockIds) {
        for(let i = 0; i!==childrenBlockIds.length; i++) {
            const childBlockId = childrenBlockIds[i];
            childBlockId.parent = this
            this.children.push(childBlockId)
        }
    }

    removeChild(childNode) {
        const pos = this.children.indexOf(childNode)
        if (pos !== -1) {
            childNode.parent = null
            this.children.splice(pos, 1);
        }
    }
}