import { SearchProps } from "@/stores/interfaces/SearchProps";
import makePostReq from "./makePostReq";

export const search = async function(args: SearchProps) {
    try {
        return await makePostReq("/api/v1/search", args);
    }
    catch(error: any) {
        throw new Error(error);
    }
}