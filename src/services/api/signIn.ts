import { AxiosResponse } from "axios";
import makePostReq from "./makePostReq"

export const signIn = function(args: {
    email: string,
    password: string
}): Promise<AxiosResponse> {
    return makePostReq("/api/v1/signin", args);
}