import { PointerI } from "@/interfaces/entities/PointerI";

interface OperationProps {
    command: string;
    args: object;
    path: Array<string>;
    pointer: PointerI;
}
export class Operation {
    pointer: {
        table: string,
        id: string,
        spaceId: string
    };
    path: string[];
    command: string;
    args: object;

    constructor({ command, args, path, pointer }: OperationProps) {
        this.command = command;
        this.path = path;
        this.args = args;
        this.pointer = pointer;
    }
}