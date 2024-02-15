import { IOperation } from "@/stores/interfaces/Operation";

export const collectionFormatUpdate = function (
    spaceId: string,
    collectionId: string,
    args: object
): IOperation {
    const id: string = "some-random-id";

    return {
        pointer: {
            table: "collection_view",
            id: collectionId,
            spaceId
        },
        command: "update",
        args,
        path: ["format"]
    }
}