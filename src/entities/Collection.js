import { Block } from "./Block";

Object.setPrototypeOf(Collection, Block);

export function Collection(props) {
    Block.call(this, props);

    this.type = "collection";
    this.schema = props.schema;
    this.format = props.format;
    this.templatePages = props.template_pages;
}

Collection.prototype.getSchema = function() {
    return this.schema;
}

Collection.prototype.getTemplatePages = function() {
    return this.templatePages;
}

Collection.prototype.getFormat = function() {
    return this.format;
}

Collection.prototype.addProperty = function(id, name, type, misc = {}) {
    const schema = this.getSchema();

    schema[id] = {
        name,
        type,
        ...misc
    }
}

Collection.prototype.getProperty = function(id) {
    const schema = this.getSchema();

    return schema[id];
}