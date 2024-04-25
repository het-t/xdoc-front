import { _ } from ".";

export default function makePostReq (url: string, args: any) {
    return _.post(url, args, {
        withCredentials: true,
    })
}