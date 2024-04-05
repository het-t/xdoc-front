import { useRecordValuesStore } from '@/stores/recordValues';

export function listAfter(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue({
        id: pointer.id,
        table: pointer.table,
        spaceId: pointer.spaceId
    });

    let targetNode = recordInStore;
    
    path.forEach(node => {
        targetNode = targetNode[node];
    })
    
    const indexToPush = targetNode.findIndex((id) => id === args.after) + 1;
    
    const targetNodeCopy = [...targetNode];

    targetNode.splice(indexToPush);
    targetNode.push(args.id);
    targetNode.push(...targetNodeCopy.slice(indexToPush));
}