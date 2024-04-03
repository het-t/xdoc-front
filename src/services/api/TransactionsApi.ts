import uuid from "@/helpers/globals/uuid";
import makePostReq from "./makePostReq";
import { transformToStandardUUIDFormat } from "@/ui/helpers/router/transformToStandardUUIDFormat";
import { Transaction } from "../transactions/types/Transaction";

export const TransactionApi = {
    execute: async function (
        transactions: Transaction[]
    ) {
        try {
            const res = await makePostReq('/api/v1/saveTransactions', {
                requestId: transformToStandardUUIDFormat(uuid()),
                transactions
            });
            return res;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}