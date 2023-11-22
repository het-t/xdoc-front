import axios from 'axios'

export default function makeDeleteReq (url: string, args: any) {
    return axios.delete(url, {
        withCredentials: true,
        params: args
    })
}