import axios from "axios"
import { baseURL } from "./baseURL"

//a)
//b)
type noticia = {
    title: string,
    content: string,
    date: number
}

const createNews = async (news: noticia): Promise<void> => {
    await axios.put(`${baseURL}/news`, news)
}

