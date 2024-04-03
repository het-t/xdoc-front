import { listBefore } from "@/usecases/listBefore";
import { Operation } from "../types/Operation";
import { Pointer } from "../types/Pointer";
import { set } from "../ui-usecases/set";
import { update } from "../ui-usecases/update";
import { listAfter } from "@/usecases/listAfter";

export function makeOperation(
    command: "set" | "update" | "listBefore" | "listAfter",
    args: any,
    path: string[],
    pointer: Pointer
): Operation {
    const o = {
        command,
        args,
        path,
        pointer
    }   

    switch(command) {
        case "set": 
            set(args, path, pointer);
            break;
        case "update": 
            update(args, path, pointer);
            break;
        case "listBefore":
            listBefore(args, path, pointer);
            break;
        case "listAfter":
            listAfter(args, path, pointer);
            break;
    }

    return o;
}