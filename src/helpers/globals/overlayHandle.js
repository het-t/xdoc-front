import { useGeneralStore } from "@/stores/general"

export const overlayHandle = function(
    pageId,
    propertyId,
    measures, 
    type
) {
    const generalStore = useGeneralStore();

    generalStore.propertyValueOverlay.pageId = pageId;
    generalStore.propertyValueOverlay.propertyId = propertyId;

    generalStore.dialog.width = measures?.width;
    generalStore.dialog.top = measures?.top;
    generalStore.dialog.left = measures?.left;

    generalStore.type = type;
}