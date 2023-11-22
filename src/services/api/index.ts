// import makeDeleteReq from "./makeDeleteReq";
import makeGetReq from "./makeGetReq";
import makePostReq from "./makePostReq";
import makePatchReq from "./makePatchReq"
import Transaction from "@/entities/Transaction";

export const Block = {
    get: (args: any) => makeGetReq('/api/blocks/', args),
    edit: (args: any) => makePatchReq('/api/blocks/', args),
}

export const TransactionApi = {
    save: async function (
        transactions: Transaction[]
    ) {
        try {
            const res = makePostReq('/api/saveTransaction', transactions);
            console.log(res);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}