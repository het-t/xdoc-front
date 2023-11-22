import uuid from "@/helpers/globals/uuid";

export class Block {
    id: string;

    constructor() {
        this.id = uuid();
    }
}