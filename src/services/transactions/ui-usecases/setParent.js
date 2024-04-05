import { useRecordValuesStore } from '@/stores/recordValues';

export function setParent(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue({
        id: pointer.id,
        table: pointer.table,
        spaceId: pointer.spaceId
    });

    let targetNode = recordInStore;

    targetNode.parent_id = args.parentId;
    targetNode.parent_table = args.parentTable;
}