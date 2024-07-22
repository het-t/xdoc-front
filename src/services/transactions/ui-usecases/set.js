import { useRecordValuesStore } from '@/stores/recordValues';

export function set(args, path, pointer) {
    if(path.length === 0) {
        useRecordValuesStore().setRecordValue({
            id: pointer.id, 
            table: pointer.table, 
            record: args, 
            spaceId: pointer.spaceId
        });

        return;
    }

    const recordInStore = useRecordValuesStore().getRecordValue({
        id: pointer.id,
        table: pointer.table,
        spaceId: pointer.spaceId
    });

    let targetNode = recordInStore;
    
    let i = 0;
    for(i = 0; i!==path.length - 1; i++) {
        if(!targetNode[path[i]]) targetNode[path[i]] = {};
        targetNode = targetNode[path[i]];
    }

    if (!targetNode) targetNode = {};

    targetNode[path[i]] = (
        typeof args === 'object' 
        ? (
            args?.length >= 0
            ?  [...args]
            : Object.assign({}, args)
        )
        : args
    );
}