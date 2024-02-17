import { useRecordValuesStore } from "../../stores/recordValues";
import { Collection } from "../../entities/Collection"

export function deleteProperty(spaceId, collectionId, id) {
    const collectionRecordInStore = useRecordValuesStore().getRecordValue(
        collectionId,
        "collection",
        spaceId
    );

    Collection.prototype.deleteProperty.call(collectionRecordInStore, ...[
        id
    ]);
}