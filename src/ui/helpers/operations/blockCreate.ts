import uuid from "@/helpers/globals/uuid"
import { IOperation } from "@/stores/interfaces/Operation"

export const blockCreate = function (
    spaceId: string,
    type: string
): IOperation {
    const id = uuid();

    return {
        pointer: {
            table: "block",
            id,
            spaceId
        },
        path: [],
        command: "set",
        args: {
            type,
            space_id: spaceId,
            id
        }
    }
}