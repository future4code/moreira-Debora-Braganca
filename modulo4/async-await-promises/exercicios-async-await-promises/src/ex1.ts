import axios from "axios"
import { baseURL } from "./baseURL"

//a)GET
//b)Promise<any[]>
//c)
async function getSubscribers():Promise<any[]> {
    return axios.get(`${baseURL}/subscribers`)
    .then(res => res.data)
    .then(console.log)
    .catch(error => error.message)
}

getSubscribers()