import { useRecordValuesStore } from '@/stores/recordValues';

export function update(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue({
        id: pointer.id,
        table: pointer.table,
        spaceId: pointer.spaceId
    });

    let targetNode = recordInStore;

    path.forEach(node => {
        if (!targetNode) targetNode = {};
        targetNode = targetNode[node];
    })  
    
    if (!targetNode) targetNode = {};

    for(const targetNodeProperty in args) {
        targetNode[targetNodeProperty] = args[targetNodeProperty];
    }
}

