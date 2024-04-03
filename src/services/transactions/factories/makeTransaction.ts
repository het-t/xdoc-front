import uuid from "@/helpers/globals/uuid";
import { Transaction, TransactionProps } from "../types/Transaction";

export function makeTransaction({
    spaceId,
    debug,
    operations
}: TransactionProps): Transaction {
    return {
        spaceId,
        debug,
        operations,
        id: uuid()
    }
}