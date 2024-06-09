import makePostReq from "./makePostReq"

interface args {
    spaceId: string
}

export const getVisibleUsers = function({
    spaceId
}: args) {
    return makePostReq("/api/v1/getVisibleUsers", {
        spaceId
    });
}