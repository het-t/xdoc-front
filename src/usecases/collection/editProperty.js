import { useRecordValuesStore } from '@/stores/recordValues';
import { CollectionProperty } from "@/entities/CollectionProperty";
import { Collection } from "../../entities/Collection"

export function editProperty(spaceId, collectionId, id, path, value) {    
    const collectionRecordInStore = useRecordValuesStore().getRecordValue(
        collectionId,
        "collection",
        spaceId
    );

    const property = Collection.prototype.getPropertyById.call(collectionRecordInStore, ...[id]);

    CollectionProperty.prototype.editProperty.call(property, ...[
        path, 
        value
    ]);
} 