import { useRecordValuesStore } from '@/stores/recordValues';

export function setPermissionItem(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue({
        id: pointer.id,
        table: pointer.table,
        spaceId: pointer.spaceId ? pointer.spaceId : pointer.id
    });

    let targetNode = recordInStore;

    path.forEach((node) => {
        console.log(targetNode)
        targetNode = targetNode[node];
    });

    if(!targetNode) targetNode = [];

    targetNode.push(args);
}