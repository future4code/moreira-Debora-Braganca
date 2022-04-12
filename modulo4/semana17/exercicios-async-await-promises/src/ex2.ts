import axios from "axios"
import { baseURL } from "./baseURL"

//a)na arrow function o async vem depois do nome e a tipagem antes da arrow, na função nomeada o async é a primeira coisa escrita e 
//a tipagem antes da abertura de chaves
//b)
const getSubscribers = async():Promise<any[]> => {
    return axios.get(`${baseURL}/subscribers`)
    .then(res => res.data)
    .then(console.log)
    .catch(error => error.message)
}

getSubscribers()