import uuid from "@/helpers/globals/uuid";
import Operation from "./Operation";

export default class Page {
    constructor({ parentTable, parentId, spaceId }) {
        this.id = uuid();
        this.object = "block";
        this.type = "page";
        this.content = [];
        this.parentTable = parentTable;
        this.parentId = parentId;
        this.spaceId = spaceId;
    }

    operationSetPage() {
        return new Operation({
            command: "set",
            table: "block",
            pointerId: this.id,
            spaceId: this.spaceId,
            args: {
                id: this.id,
                space_id: this.spaceId
            }
        })
    }

    operationSetParent() {
        return new Operation({
            command: "setParent",
            table: "block",
            pointerId: this.id,
            spaceId: this.spaceId,
            args: {
                id: this.id,
                parentTable: this.parentTable,
                parentId: this.parentId
            }
        })
    }
}