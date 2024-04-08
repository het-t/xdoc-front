import { useRecordValuesStore } from '@/stores/recordValues';

export function keyedObjectListRemove(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue({
        id: pointer.id,
        table: pointer.table,
        spaceId: pointer.spaceId
    });

    let targetNode = recordInStore;

    path.forEach(node => {
        targetNode = targetNode[node];
    })

    for(const removeKey in args.remove) {

        for(let i = 0; i!==targetNode.length; i++) {
            const candidate = targetNode[i];

            if (candidate[removeKey] === args.remove[removeKey]) {
                targetNode.splice(i, 1);
                break;
            }
        }
    }
}