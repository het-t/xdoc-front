import makePostReq from "./makePostReq";
import { SyncRecordValue } from "../transactions/types/SyncRecordValue";

export const SyncrecordValuesApi = {
    execute: async function (
        syncRecordValuesRequests: SyncRecordValue[]
    ) {
        try {
            return await makePostReq('/api/v1/syncRecordValues', {
                requests: syncRecordValuesRequests
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }
}