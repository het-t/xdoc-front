import { useRecordValuesStore } from "@/stores/recordValues";
import { CollectionView } from "../../entities/CollectionView";

export function addRecord(spaceId, collectionViewId) {
    const collectionViewInStore =  useRecordValuesStore().getRecordValue(
        collectionViewId,
        "collection_view",
        spaceId
    )

    const record = CollectionView.prototype.addRecord.call(
        collectionViewInStore, 
        ...[
            collectionViewId,
            "collection_view"
        ]
    );

    return record;
}