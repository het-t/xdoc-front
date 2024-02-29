import { useRecordValuesStore } from '../stores/recordValues';

export function setParent(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue(
        pointer.id,
        pointer.table,
        pointer.spaceId
    );

    let targetNode = recordInStore;

    targetNode.parent_id = args.parentId;
    targetNode.parent_table = args.parentTable;
}