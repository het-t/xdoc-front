import { useRecordValuesStore } from '../stores/recordValues';

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

    const indexToPush = targetNode.findIndex((id) => id === args.before) - 1;

    targetNode = [
        ...targetNode.slice(0, indexToPush),
        args.id,
        ...targetNode.slice(indexToPush)
    ]
}