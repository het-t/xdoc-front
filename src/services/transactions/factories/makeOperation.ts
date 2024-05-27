import { Pointer } from "../types/Pointer";
import { Operation } from "../types/Operation";
import { listBefore } from "../ui-usecases/listBefore";
import { set } from "../ui-usecases/set";
import { update } from "../ui-usecases/update";
import { listAfter } from "../ui-usecases/listAfter";
import { setParent } from "../ui-usecases/setParent";
import { setPermissionItem } from "../ui-usecases/setPermissionItem";
import { keyedObjectListBefore } from "../ui-usecases/keyedObjectListBefore";
import { keyedObjectListRemove } from "../ui-usecases/keyedObjectListRemove";
import { keyedObjectListUpdate } from "../ui-usecases/keyedObjectListUpdate";

export function makeOperation(
    command: 
        "set" 
        | "update" 
        | "listBefore" 
        | "listAfter" 
        | "setParent" 
        | "setPermissionItem"
        | "keyedObjectListBefore"
        | "keyedObjectListAfter"
        | "keyedObjectListRemove"
        | "keyedObjectListUpdate",
    args: any,
    path: string[],
    pointer: Pointer
): Operation {
    switch(command) {
        case "update": 
            update(args, path, pointer);
            break;
        case "set": 
            set(args, path, pointer);
            break;
        case "setParent":
            setParent(args, path, pointer);
            break;
        case "setPermissionItem":
            setPermissionItem(args, path, pointer);
            break;
        case "listBefore":
            listBefore(args, path, pointer);
            break;
        case "listAfter":
            listAfter(args, path, pointer);
            break;
        case "keyedObjectListBefore": 
            keyedObjectListBefore(args, path, pointer);
            break;
        case "keyedObjectListUpdate":
            keyedObjectListUpdate(args, path, pointer);
            break;
        case "keyedObjectListRemove":
            keyedObjectListRemove(args, path, pointer);
            break;
    }

    return {
        command,
        args,
        pointer,
        path
    };
}