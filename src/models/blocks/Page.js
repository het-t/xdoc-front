import BlockBase from "./Base";

export default class Page extends BlockBase {
    constructor({id, created_at, last_edited_at, created_by, children}) {
        super({id, object: 'block', type: 'page', created_at, last_edited_at, created_by});

        if (children) this.children = children
        else this.children = [null]
    }
}