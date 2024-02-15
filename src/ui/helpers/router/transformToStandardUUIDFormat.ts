export const transformToStandardUUIDFormat = function (plainUUID: string): string | null {

    if (plainUUID.length !== 32) return null;
    
    return `${plainUUID.slice(0, 8)}-${plainUUID.slice(8, 12)}-${plainUUID.slice(12, 16)}-${plainUUID.slice(16, 20)}-${plainUUID.slice(20)}`;
}