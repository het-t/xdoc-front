import axios from 'axios'

export default function makePostReq (url, args) {
    return axios.post(url, args, {
        withCredentials: true,
    })
}