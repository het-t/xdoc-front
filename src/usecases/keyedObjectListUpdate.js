import { useRecordValuesStore } from '@/stores/recordValues';

export function keyedObjectListUpdate(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue({
        id: pointer.id,
        table: pointer.table,
        spaceId: pointer.spaceId
    });

    let targetNode = recordInStore;

    path.forEach(node => {
        targetNode = targetNode[node];
    })

    for(let candidate of targetNode) {
        if (candidate.id === args.id) {
            for(let key in args) {
                candidate[key] = args[key];
            }
            break;
        }
    }
}