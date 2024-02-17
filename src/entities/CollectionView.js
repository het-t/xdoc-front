import uuid from "@/helpers/globals/uuid";
import { Block } from "./Block";
import { transformToStandardUUIDFormat } from "@/ui/helpers/router/transformToStandardUUIDFormat";

Object.setPrototypeOf(CollectionView, Block);

export function CollectionView(props) {
    Block.call(this, props);

    this.type = props.type;
    this.name = props.name;
    this.format = props.format;
    this.query2 = props.query2;
    this.pageSort = props.page_sort;
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

CollectionView.prototype.addNewRecord = function(parentId, parentTable) {
    const blockId = transformToStandardUUIDFormat(uuid());

    const block = new Block({ 
        id: blockId,
        created_time: Date.now(),
        last_edited_time: Date.now(),
        parent_id: parentId,
        parent_table: parentTable,
        alive: true,
        created_by_table: "user",
        created_by_id: "user_id",
        last_edited_by_table: "user",
        last_edited_by_id: "user_id",
        space_id: this.space_id
    });

    this.pageSort.push(blockId);

    return block;
}