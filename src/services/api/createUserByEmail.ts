import makePostReq from "./makePostReq"

export const createUserByEmail = function(email: string) {
    return makePostReq("/api/v1/createEmailUser", {
        email
    });
}