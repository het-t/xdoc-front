import axios from 'axios'

export default function makePatchReq (url, args) {
    return axios.patch(url, {
        args
    }, {
        withCredentials: true,
        headers: { 
           'Content-Type': 'application/json'
        }
    })
}