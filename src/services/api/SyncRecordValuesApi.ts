import { SyncRecordValuesRequest } from "@/stores/interfaces/SyncRecordValuesRequest";
import makePostReq from "./makePostReq";

export const SyncrecordValuesApi = {
    execute: async function (
        syncRecordValuesRequests: SyncRecordValuesRequest
    ) {
        try {
            return await makePostReq('/api/v1/syncRecordValues', syncRecordValuesRequests);
        }
        catch (error: any) {
            throw new Error(error);
        }
    }
}