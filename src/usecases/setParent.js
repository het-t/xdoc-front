import { useRecordValuesStore } from '../stores/recordValues';

export function setParent(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue(
        pointer.id,
        pointer.table,
        pointer.spaceId
    );

    let targetNode = recordInStore;

    targetNode.parentId = args.parentId;
    targetNode.parentTable = args.parentTable;
}