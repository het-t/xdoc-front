import { useGeneralStore } from "@/stores/general"

export const handlePropertyValueOverlay = function(
    pageId,
    collectionId,
    propertyId,
    measures, 
) {
    const generalStore = useGeneralStore();

    if(propertyId) {
        generalStore.setCurrentComponentInDefaultOverlay(
            "page_property_value_edit",
            {
                collectionId,
                propertyId,
                pageId
            }
        );
    }

    generalStore.dialog.width = measures?.width;
    generalStore.dialog.top = measures?.top;
    generalStore.dialog.left = measures?.left;
}