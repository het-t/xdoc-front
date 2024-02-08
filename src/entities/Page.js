import { Block } from "./Block";

Object.setPrototypeOf(Page, Block);

export function Page(props) {
    Block.call(this, props);

    this.type = "page";
    this.properties = props.properties;
    this.discussions = props.discussions;
}