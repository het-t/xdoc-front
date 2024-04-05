import { useRecordValuesStore } from '../../stores/recordValues';
import { onBeforeUnmount } from 'vue';

export const usePropertyData = function(props, emitHandler) {
    const recordValuesStore = useRecordValuesStore();

    const propertyValue = recordValuesStore.getRecordValue({
        id: props.value.pageId,
        table: "block",
        spaceId: props.value.spaceId
    }).properties[props.value.propertyId]?.[0]?.[0] || "";
    
    const property = recordValuesStore.getRecordValue({
        id: props.value.collectionId,
        table: "collection",
        spaceId: props.value.spaceId
    }).schema[props.value.propertyId];

    onBeforeUnmount(() => {
        emitHandler();
    });
    
    return {
        property,
        propertyValue
    }
}