export function Discussion(props) {
    this.id = props.id;
    this.parent_id = props.parent_id;
    this.parent_table = props.parent_table;
    this.resolved = props.resolved;
    this.comments = props.comments;
    this.space_id = props.space_id;
    this.type = "default";
}

Discussion.prototype.addNewComment = function(id) {
    this.comments.push(id);
}

Discussion.prototype.updateResolvedStatus = function(resolved) {
    this.resolved = resolved;
}