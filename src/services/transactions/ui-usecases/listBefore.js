import { useRecordValuesStore } from '@/stores/recordValues';

export function listBefore(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue({
        id: pointer.id,
        table: pointer.table,
        spaceId: pointer.spaceId
    });

    let targetNode = recordInStore;

    path.forEach(node => {
        targetNode = targetNode[node];
    })

    if(!args.before) {
        targetNode.unshift(args.id);
        return;
    }

    const indexToPush = targetNode.findIndex((id) => id === args.before);

    const targetNodeCopy = [...targetNode];

    targetNode.splice(0, indexToPush);
    targetNode.unshift(args.id);
    targetNode.unshift(...targetNodeCopy.slice(0, indexToPush));
}