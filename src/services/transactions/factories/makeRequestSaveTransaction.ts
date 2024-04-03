import uuid from "@/helpers/globals/uuid";
import { Transaction } from "../types/Transaction"

type RequestSaveTransaction = {
    requestId: string;
    transactions: Transaction[];    
}

export function makeRequestSaveTransaction(
    transactions: Transaction[]
): RequestSaveTransaction {
   return {
    requestId: uuid(),
    transactions
   }
}