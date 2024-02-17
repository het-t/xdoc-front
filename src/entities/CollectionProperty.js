import { getUid } from "@/helpers/globals/uidByLength";

export function CollectionProperty({bannedIds, ...props}) {
    const id = getUid(4, bannedIds);

    if(!props.name) {
        props.name = props.type;
    }

    this[id] = {
        ...props,
        name: props.name,
        type: props.type
    }
}

CollectionProperty.prototype.editProperty = function(path, value) {
    this[path] = value;
}