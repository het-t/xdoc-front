import makePostReq from "./makePostReq"

export const getSpaces = function() {
    return makePostReq("/api/v1/getSpaces", {
        userId: ""
    })
}