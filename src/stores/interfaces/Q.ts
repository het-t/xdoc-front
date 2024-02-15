import { setTransitionHooks } from "vue";
import { IOperation } from "./Operation";
import { IPointer } from "./Pointer";

export interface IQEleProps {
    path?: string[];
    command?: string;
    args?: object;
    pointer: IPointer;
}

export class QEle implements IOperation {
    readonly path?: string[];
    readonly command?: string;
    readonly args?: object;
    readonly pointer: IPointer;

    constructor(props: IQEleProps) {
        this.path = props.path;
        this.command = props.command;
        this.args = props.args;
        this.pointer = props.pointer;
    }
}