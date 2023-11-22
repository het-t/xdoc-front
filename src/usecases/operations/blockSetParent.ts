import { Operation } from "@/entities/Operation";

export const blockSetParent = function (
    blockId: string,
    spaceId: string,
    parentTable: string,
    parentId: string
): Operation {
    return new Operation({
        command: "setParent",
        pointer: {
            table: "block",
            id: blockId,
            spaceId
        },
        args: {
            parent_id: parentId,
            parent_table: parentTable,
            alive: true
        },
        path: []
    })
}