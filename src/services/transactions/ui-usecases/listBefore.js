import { useRecordValuesStore } from '@/stores/recordValues';

export function listBefore(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue(
        pointer.id,
        pointer.table,
        pointer.spaceId
    );

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