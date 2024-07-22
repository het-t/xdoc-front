import { ref, Ref } from "vue";
import { defineStore } from "pinia";

export const useRecordValuesStore = defineStore('recordValues', () => {
    const recordValues: Ref<Record<string, any>> = ref({});
    const spaces: Ref<Set<string>> = ref(new Set([]));
    const currentSpaceId: Ref<string> = ref("");

    function getCurrentSpaceId(): string {
        return currentSpaceId.value;
    }

    function setCurrentSpaceId(spaceId: string): void {
        currentSpaceId.value = spaceId;
    }

    function getSpacesIds(): string[] {
        return Array.from(spaces.value);
    }
    
    function getRecordValue(pointer: {id: string, table: string, spaceId: string}) {
        return recordValues.value?.[pointer.spaceId]?.[pointer.id];
    }

    function checkSpacePresenceById(id: string): boolean {
        return spaces.value.has(id) && recordValues.value?.[id] !== undefined;
    }
    
    function addSpaceIfNotPresent(id: string): void {
        if(checkSpacePresenceById(id)) return;
        setSpace(id);
    }

    function setSpace(id: string) {
        spaces.value.add(id);
        recordValues.value[id] = {};
    }

    function setRecordValue({id, table, record, spaceId = currentSpaceId.value}: {
        id: string,
        table: string,
        record: any,
        spaceId?: string
    }) {   
        addSpaceIfNotPresent(spaceId);
        recordValues.value[spaceId][id] = Object.assign({}, record);
    }

    function setNewChild(parentBlockId: string, property: string, childBlockId: string, spaceId: string = currentSpaceId.value) {
        recordValues.value[spaceId][parentBlockId][property]?.push(childBlockId);
    }

    return {
        getSpacesIds,
        getRecordValue,
        checkSpacePresenceById,
        setSpace,
        setRecordValue,
        setNewChild,
        getCurrentSpaceId,
        setCurrentSpaceId
    }
})