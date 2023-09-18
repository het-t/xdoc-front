export default class Operation {
    constructor({ command, table, pointerId, args }) {
        this.command = command;
        this.pointer = {
            table: table,
            id: pointerId
        };
        this.args = args
    }
}