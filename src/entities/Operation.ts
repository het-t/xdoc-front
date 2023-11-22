export class Operation {
    pointer: {
        table: string,
        id: string,
        spaceId: string
    };
    path: string[];
    command: string;
    args: object;

    constructor({ command, args, path, pointer }) {
        this.command = command;
        this.path = path;
        this.args = args;
        this.pointer = pointer;
    }
}