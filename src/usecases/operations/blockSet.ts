import { Block } from "@/entities/Block"
import { Operation } from "@/entities/Operation"

export const blockSet = function (
    type: string,
    spaceId: string
): Operation {
    const block = new Block();

    return new Operation({
        command: "set",
        pointer: {
            table: "block",
            id: block.id,
            spaceId
        },
        args: {
            type,
            space_id: spaceId,
            id: block.id,
            version: 1
        },
        path: []
    })
}