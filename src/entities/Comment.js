import { Block } from "./Block";

Object.setPrototypeOf(Comment, Block);

export function Comment(props) {
    Block.call(this, props);

    this.text = props.text;
}