import { useGeneralStore } from "@/stores/general"

export const overlayHandle = function(
    pageId,
    collectionId,
    propertyId,
    measures, 
    type
) {
    const generalStore = useGeneralStore();

    generalStore.propertyValueOverlay.collectionId = collectionId;
    generalStore.propertyValueOverlay.pageId = pageId;
    generalStore.propertyValueOverlay.propertyId = propertyId;

    generalStore.dialog.width = measures?.width;
    generalStore.dialog.top = measures?.top;
    generalStore.dialog.left = measures?.left;

    generalStore.type = type;
}