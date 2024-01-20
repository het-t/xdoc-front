import { IOperation } from "@/stores/interfaces/Operation";

export const blockUpdate = function (
    spaceId: string,
    blockId: string,
    path: string[],
    args: object,
): IOperation {
    return {
        pointer: {
            table: "block",
            id: blockId,
            spaceId
        },
        command: "update",
        args,
        path
    }
}