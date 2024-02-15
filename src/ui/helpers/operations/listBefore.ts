import { IOperation } from "@/stores/interfaces/Operation"

export const listBefore = function (
    table: string,
    spaceId: string,
    targetBlockId: string,
    path: string[],
    blockId: string
): IOperation {
    return {
        pointer: {
            id: targetBlockId,
            table,
            spaceId 
        },
        path,
        command: "listBefore",
        args: {
            id: blockId
        }
    }
}