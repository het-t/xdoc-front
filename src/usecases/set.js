import { useRecordValuesStore } from '../stores/recordValues';

export function set(args, path, pointer) {
    const recordInStore = useRecordValuesStore().getRecordValue(
        pointer.id,
        pointer.table,
        pointer.spaceId
    );

    let targetNode = recordInStore;

    let i = 0;
    for(i = 0; i!==path.length - 1; i++) {
        targetNode = targetNode[path[i]];
    }

    targetNode[path[i]] = args;
}

/**
 * property name change
 */
// {
//     "pointer": {
//       "id": "2db466a0-b0d9-4dec-809b-a90e3fbaf120",
//       "table": "collection",
//       "spaceId": "f2cf1fd1-8789-4ddd-9190-49f41966c446"
//     },
//     "path": [
//       "schema",
//       "e_rz",
//       "name"
//     ],
//     "command": "set",
//     "args": "Tags new"
//   }