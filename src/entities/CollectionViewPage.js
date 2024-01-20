import { Block } from "./Block";

Object.setPrototypeOf(CollectionViewPage, Block);

export function CollectionViewPage(props) {
    Block.call(this, props);

    this.type = "collection_view_page";
    this.viewIds = props.view_ids;
    this.collectionId = props.collection_id;
    this.format = props.format;
}

CollectionViewPage.prototype.getViewIds = function() {
    return this.viewIds;
}

CollectionViewPage.prototype.getCollectionId = function() {
    return this.collectionId;
}

CollectionViewPage.prototype.getFormat = function() {
    return this.format;
}