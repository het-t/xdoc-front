export function Block(props) {
    this.id = props.id;
    this.createdTime = props.created_time;
    this.lastEditedTime = props.last_edited_time;
    this.parentId = props.parent_id;
    this.parentTable = props.parent_table;
    this.alive = props.alive;
    this.createdByTable = props.created_by_table;
    this.createdById = props.created_by_id;
    this.lastEditedByTable = props.last_edited_by_table;
    this.lastEditedById = props.last_edited_by_id;
    this.spaceId = props.space_id;
}