import BlockBase from "./Base";
import RichText from './RichText'

export default class Paragraph extends BlockBase {
    constructor({id, created_at, last_edited_at, created_by, children, paragraph}) {
        super({id, object: 'block', type: 'paragraph', created_at, last_edited_at, created_by});

        if (children) this.children = children;
        else this.children = [null];

        this.paragraph = new RichText(paragraph);
    }
}