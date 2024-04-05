import { useRecordValuesStore } from '@/stores/recordValues';

export function set(args, path, pointer) {
    if(path.length === 0) {
        useRecordValuesStore().setRecordValue(
            pointer.id, 
            pointer.table, 
            args, 
            pointer.spaceId
        );

        return;
    }

    const recordInStore = useRecordValuesStore().getRecordValue({
        id: pointer.id,
        table: pointer.table,
        spaceId: pointer.spaceId
    });

    let targetNode = recordInStore;

    if(!path.length) {
        targetNode = args;
        return;
    }
    
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