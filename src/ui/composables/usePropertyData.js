import { useRecordValuesStore } from '../../stores/recordValues';
import { onBeforeUnmount } from 'vue';

export const usePropertyData = function(props, emitHandler) {
    const recordValuesStore = useRecordValuesStore();

    const propertyValue = recordValuesStore.getRecordValue(
        props.value.pageId,
        "block",
        props.value.spaceId
    ).properties[props.value.propertyId]?.[0]?.[0] || "";
    
    const property = recordValuesStore.getRecordValue(
        props.value.collectionId,
        "collection",
        props.value.spaceId
    ).schema[props.value.propertyId];

    onBeforeUnmount(() => {
        emitHandler();
    });
    
    return {
        property,
        propertyValue
    }
}