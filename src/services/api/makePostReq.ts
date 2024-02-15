import axios from 'axios'

export default function makePostReq (url: string, args: any) {
    return axios.post(url, args, {
        withCredentials: true,
    })
}