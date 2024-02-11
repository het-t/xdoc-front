import { useGeneralStore } from "@/stores/general"

export const propertyValueEditOverlay = function(
    pageId,
    propertyId,
    measures, 
    visible
) {
    const generalStore = useGeneralStore();

    generalStore.collectionPropertyValueOverlay.pageId = pageId;
    generalStore.collectionPropertyValueOverlay.propertyId = propertyId;

    generalStore.collectionPropertyValueOverlay.dialogWidth = measures.width;
    generalStore.collectionPropertyValueOverlay.dialogPosTop = measures.top;
    generalStore.collectionPropertyValueOverlay.dialogPosLeft = measures.left;
    generalStore.collectionPropertyValueOverlay.visible = visible;
}