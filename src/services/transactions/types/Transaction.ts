import { Operation } from "./Operation";

export type TransactionProps = {
    spaceId: string;
    debug: object;
    operations: Operation[];
}

export type Transaction = {
    readonly id?: string;
    readonly spaceId?: string;
    readonly debug?: object;
    readonly operations: Operation[];
}