import axios from 'axios'

export default function makePatchReq (url: string, args: any) {
    return axios.patch(url, {
        args
    }, {
        withCredentials: true,
        headers: { 
           'Content-Type': 'application/json'
        }
    })
}