import { IPointer } from "@/stores/interfaces/Pointer";

export interface IOperation {
    command?: string;
    args?: object;
    path?: Array<string>;
    pointer: IPointer;
}