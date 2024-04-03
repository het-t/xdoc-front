import { IOperation } from './Operation';

export interface ITransaction {
    id: string;
    spaceId: string;
    debug: object;
    operations: IOperation[];
}