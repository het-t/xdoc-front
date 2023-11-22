import uuid from "@/helpers/globals/uuid";
import { Operation } from './Operation';

interface TransactionProps {
    spaceId: string;
    debug: object;
    operations: Operation[];
}
export default class Transaction {
    transactions: [{
        id: string,
        spaceId: string,
        debug: object,
        operations: Operation[]
    }]

    constructor({ spaceId, debug, operations }: TransactionProps) {
        this.transactions = [{
            id: uuid(),
            spaceId: spaceId,
            debug: debug,
            operations
        }]
    }

    pushOperatioin(operation: Operation) {
        this.transactions[0].operations.push(operation)
    }
}