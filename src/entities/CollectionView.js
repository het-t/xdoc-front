import { Block } from "./Block";

Object.setPrototypeOf(CollectionView, Block);

export function CollectionView(props) {
    Block.call(this, props);

    this.type = props.type;
    this.name = props.name;
    this.format = props.format;
    this.query2 = props.query2;
    this.page_sort = props.page_sort;
}

CollectionView.prototype.getType = function() {
    return this.type;
}

CollectionView.prototype.getProperties = function() {
    switch(this.type) {
        case "table": {
            return this.format.table_properties;
        }
        case "list": {
            return this.format.list_properties;
        }
    }
}

CollectionView.prototype.getName = function() {
    if (this.name) return this.name;
    return this.type;
}

CollectionView.prototype.addProperty = function(id) {
    const properties = this.getProperties();
    
    properties.push({
        visible: true,
        property: id
    })
}

CollectionView.prototype.removePropertyById = function(id) {
    const properties = this.getProperties();

    for(let i = 0; i<properties.length; i++) {
        if (properties[i].property === id) {
            properties.splice(i, 1);
            break;
        }
    }
}