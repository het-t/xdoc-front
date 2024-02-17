import { useRecordValuesStore } from "../../stores/recordValues";
import { CollectionView } from "../../entities/CollectionView";

export function removePropertyById(spaceId, collectionViewId, id) {
    const collectionViewRecordInStore = useRecordValuesStore().getRecordValue(
        collectionViewId,
        "collection_view",
        spaceId
    );

    CollectionView.prototype.removePropertyById.call(collectionViewRecordInStore, ...[
        id
    ]);
}