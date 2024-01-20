import uuid from "@/helpers/globals/uuid";
import { IOperation } from './Operation';

interface ITransactionProps {
    spaceId: string;
    debug: object;
    operations: IOperation[];
}
export class Transaction {
    private readonly id: string;
    private readonly spaceId: string;
    private debug: object;
    private operations: IOperation[];

    constructor(props: ITransactionProps) {
        this.id = uuid();
        this.spaceId = props.spaceId;
        this.debug = props.debug;
        this.operations = props.operations;
    }
}