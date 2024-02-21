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

Collection.prototype.getPropertyNamePostfixed = function(name, type) {
    const postfix = Object.values(this.getSchema()).filter(property => {
        console.log(property.name.indexOf(name))
        return property.type === type && property.name.indexOf(name) >= 0;
    })?.length;

    if (postfix > 0) name += " " + postfix;

    return name;
}

Collection.prototype.addProperty = function(id, name, type, misc = {}) {
    const schema = this.getSchema();

    const postfixedName = this.getPropertyNamePostfixed(name, type);

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