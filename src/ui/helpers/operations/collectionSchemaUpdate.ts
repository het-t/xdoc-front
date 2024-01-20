import { IOperation } from "@/stores/interfaces/Operation"

export const collectionSchemaUpdate = function (
    spaceId: string,
    collectionId: string,
    args: object
): IOperation {
    return {
        pointer: {
            id: collectionId,
            table: "collection",
            spaceId
        },
        path: ["schema"],
        command: "update",
        args
    }
}