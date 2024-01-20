import { IOperation } from "./Operation";

export class SyncRecordValuesRequest {    
    constructor(
        private readonly requests: IOperation[]
    ) { }
}