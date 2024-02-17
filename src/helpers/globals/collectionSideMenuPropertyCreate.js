import { useRecordValuesStore } from '@/stores/recordValues';
import { addProperty as addPropertyInCollection} from "@/usecases/collection/addProperty";
import { addProperty as addPropertyInCollectionView } from "@/usecases/collection-view/addProperty";

export function collectionSideMenuPropertyCreate(collectionId, collectionViewId, spaceId, { type, name, ...property}) {
    const recordValuesStore = useRecordValuesStore();
         
    const collectionRecordValueInStore = recordValuesStore.getRecordValue(
        collectionId,
        "collection",
        spaceId
    )

    const propertyId = addPropertyInCollection.call(collectionRecordValueInStore, {
        name,
        type,
        ...property
    });

    const collectionViewRecordInStore = recordValuesStore.getRecordValue(
        collectionViewId,
        "collection_view",
        spaceId
    );

    addPropertyInCollectionView.call(collectionViewRecordInStore, ...[propertyId])
    
    return propertyId;
}