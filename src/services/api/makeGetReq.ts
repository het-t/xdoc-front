import axios from 'axios'

export default function makeGetReq (url: string, args: any) {
    return axios.get(url, {
        withCredentials: true,
        params: args
    })
}