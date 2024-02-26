import { Block } from "./Block";

Object.setPrototypeOf(CollectionViewPage, Block);

export function CollectionViewPage(props) {
    Block.call(this, props);

    this.type = "collection_view_page";
    this.view_ids = props.view_ids;
    this.collection_id = props.collection_id;
    this.format = props.format;
}