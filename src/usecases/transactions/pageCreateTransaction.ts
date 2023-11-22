import Transaction from "@/entities/Transaction";
import { blockSet } from "../operations/blockSet"
import { blockSetParent } from "../operations/blockSetParent";
import { TransactionApi } from "@/services/api";

export const pageCreateTransaction = function (
    spaceId: string,
    parentTable: string,
    parentId: string
): Promise<string> {
    const pageSet = blockSet("page", spaceId);

    const pageId = pageSet.pointer.id;
    const pageSetParent = blockSetParent(pageId, spaceId, parentTable, parentId);


    const pageCreateTransaction = new Transaction({
        spaceId,
        debug: "MenuLeft.vue->new page button",
        operations: [
            pageSet,
            pageSetParent
        ]
    });

    try {
        TransactionApi.save(pageCreateTransaction);
    } catch (error) {
        console.log(error)
        throw error;
    }
    
    return Promise.resolve(pageId);
}