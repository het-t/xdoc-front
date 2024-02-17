import { Collection } from "../../entities/Collection"
import { CollectionProperty } from "../../entities/CollectionProperty"

export function addProperty(property) { 
    const _property = new CollectionProperty({
        bannedIds: Object.keys(this.getSchema()),
        name: property.name,
        type: property.type
    });

    const [propertyId, propertyValue] = Object.entries(_property)[0];

    Collection.prototype.addProperty.call(this, ...[
        propertyId, 
        propertyValue.name, 
        propertyValue.type
    ]);

    //transaction - api call

    return propertyId;
}