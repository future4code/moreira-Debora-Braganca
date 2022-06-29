import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
}


const sendMessage = async(users: user[], message:string):Promise<void> => {
    
    try{
    await axios.post(`${baseURL}/notifications`, {
        subscriberId: users.map(userId => userId),
	    message
    })
    console.log("Mensagem enviada")
    } catch {console.log("Erro")}
}