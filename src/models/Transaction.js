import { TransactionApi } from '@/api/index.js';
import uuid from "@/helpers/globals/uuid";

export default class Transaction {
    constructor({ spaceId, debug }) {
        this.requestId = uuid();
        this.transactions = [{
            id: uuid(),
            spaceId: spaceId,
            debug: debug,
            operations: []
        }]
    }

    addOperation(operation) {
        this.transactions[0].operations.push(operation)
    }

    save() {
        TransactionApi.save(this)
    }
}