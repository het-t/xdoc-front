import { useRecordValuesStore } from '@/stores/recordValues';

export function keyedObjectListBefore(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue(
        pointer.id,
        pointer.table,
        pointer.spaceId
    );

    let targetNode = recordInStore;

    path.forEach(node => {
        targetNode = targetNode[node];
    })

    targetNode.unshift(args.value);
}

/**
 * option add
 */
// {
//     "pointer": {
//       "id": "2db466a0-b0d9-4dec-809b-a90e3fbaf120",
//       "table": "collection",
//       "spaceId": "f2cf1fd1-8789-4ddd-9190-49f41966c446"
//     },
//     "command": "keyedObjectListBefore",
//     "path": [
//       "schema",
//       "e_rz",
//       "options"
//     ],
//     "args": {
//       "value": {
//         "id": "o:Nl",
//         "value": "two",
//         "color": "gray",
//         "collectionIds": [
//           "2db466a0-b0d9-4dec-809b-a90e3fbaf120"
//         ]
//       }
//     }
//   }