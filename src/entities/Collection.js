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

Collection.prototype.getPropertyNamePostfixed = function(id, name, type) {
    let postfix = 1;
    let postfixedName = name;
    let property = this.getPropertyByName(name);

    while(property  && property.id !== id && property.type === type) {
        postfixedName = name + " " + postfix;
        if(!this.getPropertyByName(postfixedName)) {
            break;
        }
        postfix++;
    }

    return postfixedName;
}

Collection.prototype.getPropertyByName = function(name) {
    return Object.values(this.getSchema()).find(property => property.name === name);
}

Collection.prototype.addProperty = function(id, name, type, misc = {}) {
    const schema = this.getSchema();

    const postfixedName = this.getPropertyNamePostfixed(id, name, type);

    schema[id] = {
        name: postfixedName,
        type,
        ...misc
    }
}

Collection.prototype.deleteProperty = function(id) {
    const schema = this.getSchema();
    delete schema[id];
}

Collection.prototype.getPropertyById = function(id) {
    const schema = this.getSchema();

    return schema[id];
}