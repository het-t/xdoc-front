import { Transaction } from "@/stores/interfaces/Transaction";
import uuid from "@/helpers/globals/uuid";
import makePostReq from "./makePostReq";

export const TransactionApi = {
    execute: async function (
        transactions: Transaction[]
    ) {
        try {
            const res = await makePostReq('/api/v1/saveTransactions', {
                requestId: uuid(),
                transactions
            });
            console.log(res);
            return res;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}