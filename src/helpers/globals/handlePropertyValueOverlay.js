import { useGeneralStore } from "@/stores/general"

export const handlePropertyValueOverlay = function(
    pageId,
    collectionId,
    propertyId,
    measures, 
) {
    const generalStore = useGeneralStore();

    generalStore.setCurrentComponentInDefaultOverlay(
        propertyId ? "page_property_value_edit" : null,
        {
            collectionId,
            propertyId,
            pageId
        }
    );

    generalStore.dialog.width = measures?.width;
    generalStore.dialog.top = measures?.top;
    generalStore.dialog.left = measures?.left;
}