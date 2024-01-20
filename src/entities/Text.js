import { Block } from "./Block";
import { blockSet } from "@/ui/helpers/operations/blockSet";

Object.setPrototypeOf(Text, Block);

export function Text(props) {
    Block.call(this, props);

    this.type = "text";
    this.properties = {
        title: props.properties.title ? props.properties.title : []
    };    
}

Text.prototype.getTitle = function() {
    return this.properties.title
}

Text.prototype.updateTitle = function(data) { 
    this.properties.title[this.properties.title.length - 1][0] += data;

    return blockSet(
        this.spaceId,
        this.id,
        ["properties", "title"],
        this.properties.title
    )
}