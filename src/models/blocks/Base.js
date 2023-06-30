import { v4 as uuid } from 'uuid'

export default class BlockBase {
    constructor({id, object, type, created_at, last_edited_at, created_by}) {
        id ? this.id = id : this.id = uuid();
        this.object = object;
        this.type = type;
        this.createdAt = created_at;
        this.lastEditedAt = last_edited_at;
        this.createdBy = created_by;
    }
}