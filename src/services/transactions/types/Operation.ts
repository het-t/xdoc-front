import { Pointer } from "./Pointer";

export type Operation = {
    command: string;
    args: any;
    path: Array<string>;
    pointer: Pointer;
}