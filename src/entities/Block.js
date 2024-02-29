export function Block(props) {
    this.id = props.id;
    this.created_time = props.created_time;
    this.last_edited_time = props.last_edited_time;
    this.parent_id = props.parent_id;
    this.parent_table = props.parent_table;
    this.alive = props.alive;
    this.created_by_table = props.created_by_table;
    this.created_by_id = props.created_by_id;
    this.last_edited_by_table = props.last_edited_by_table;
    this.last_edited_by_id = props.last_edited_by_id;
    this.space_id = props.space_id;
    this.content = props.content;
}