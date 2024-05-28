import makePostReq from "./makePostReq"

export const findUserByEmail = function(email: string) {
    return makePostReq("/api/v1/findUser", {
        email
    })
}