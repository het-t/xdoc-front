import { CollectionView } from "../../entities/CollectionView";

export function addProperty(id) {
    CollectionView.prototype.addProperty.call(this, ...[
        id
    ]);
}