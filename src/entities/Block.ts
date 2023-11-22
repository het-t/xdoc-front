import uuid from "@/helpers/globals/uuid";

export class Block {
    id: string;
    object: "block";

    constructor() {
        this.id = uuid();
    }
}