import makePostReq from "./makePostReq"

interface args {
    userIds: string[],
    spaceId: string,
    revokePagePermissions: boolean,
    revokeUserTokens: boolean
}

export const removeUsersFromSpace = function({
    userIds,
    spaceId,
    revokePagePermissions,
    revokeUserTokens
}: args) {
    return makePostReq("/api/v1/removeUsersFromSpace", {
        userIds,
        spaceId,
        revokePagePermissions,
        revokeUserTokens
    });
}