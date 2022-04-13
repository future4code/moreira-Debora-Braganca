import axios from "axios";
import { Address } from "../types";

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string): Promise <Address | null> =>{
    try {
        const response = await axios.get(`${baseUrl}/${zipcode}/json/`)
        const address: Address = {
            estado: response.data.uf,
            cidade: response.data.localidade,
            bairro: response.data.bairro,
            logradouro: response.data.logradouro
        }
        return address
    } catch (error) {
        console.error("Erro no serviço getAddressInfo: ", error)
        return null
    }
}