import makePostReq from "./makePostReq"

export const getTeams = function(
    args: {
        spaceId: string
    }
) {
    return makePostReq("/api/v1/getTeams", args);
}