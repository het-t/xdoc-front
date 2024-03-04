import { Block } from "./Block";

Object.setPrototypeOf(Collection, Block);

export function Collection(props) {
    Block.call(this, props);

    this.type = "collection";
    this.schema = props.schema;
    this.format = props.format;
    this.template_pages = props.template_pages;
}

Collection.prototype.getTemplatePages = function() {
    return this.templatePages;
}

Collection.prototype.getPropertyByName = function(name) {
    return Object.values(this.schema).find(property => property.name === name);
}

Collection.prototype.getPropertyNamePostfixed = function(id, name, type) {
    let postfix = 1;
    let postfixedName = name;
    let property = Collection.prototype.getPropertyByName.call(this, ...[name]);

    while(property && property.id !== id && property.type === type) {
        postfixedName = name + " " + postfix;
        if(!Collection.prototype.getPropertyByName.call(this, ...[postfixedName])) {
            break;
        }
        postfix++;
    }

    return postfixedName;
}

Collection.prototype.addProperty = function(id, property) {
    const schema = this.schema;

    const postfixedName = this.getPropertyNamePostfixed(id, property.name, property.type);

    schema[id] = {
        ...property,
        name: postfixedName,
        type: property.type,
    }
}

Collection.prototype.getPropertyById = function(id) {
    return this.schema[id];
}