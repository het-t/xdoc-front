import { SearchProps } from "@/stores/interfaces/SearchProps";
import axios from "axios"

export const search = async function(args: SearchProps) {
    try {
        return await axios.post("/api/v1/search", args);
    }
    catch(error: any) {
        throw new Error(error);
    }
}