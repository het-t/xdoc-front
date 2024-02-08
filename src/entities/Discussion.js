export function Discussion(props) {
    this.id = props.id;
    this.parentId = props.parent_id;
    this.parentTable = props.parent_table;
    this.resolved = props.resolved;
    this.comments = props.comments;
    this.spaceId = props.space_id;
    this.type = "default";
}