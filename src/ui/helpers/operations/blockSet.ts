import { IOperation } from "@/stores/interfaces/Operation";

export const blockSet = function(
    spaceId: string,
    id: string,
    path: Array<string>,
    args: any
): IOperation {
    return {
        pointer: {
            table: "block",
            id,
            spaceId
        },
        path,
        command: "set",
        args
    }
}