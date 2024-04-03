import { Pointer } from "../types/Pointer"

export type RequestSyncRecordValue = {
    requests: Pointer[];
}

export function makeRequestSyncRecordValue(
    recordValuePointers: Pointer[]
): RequestSyncRecordValue {
    return {
        requests: recordValuePointers
    }
}