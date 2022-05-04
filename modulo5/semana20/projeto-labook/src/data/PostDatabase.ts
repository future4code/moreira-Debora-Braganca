import { BaseDatabase } from "./BaseDatabase";
import Post from "../model/Post";
import { FindPostByIdRes } from "../types/findPostByIdRes";


export default class PostDatabase extends BaseDatabase {
    protected TABLE_NAME = "labook_posts"

    insert = async(post: Post) => {
        try {
            await this
            .connection(this.TABLE_NAME)
            .insert(post)

        } catch (error) {
            throw new Error("Erro do banco.")
        }
    }

    findPostByid = async(id: string) => {
        try {
            const queryResult: FindPostByIdRes = await this
            .connection(this.TABLE_NAME)
            .select("*")
            .where({id})
            return queryResult[0]
        } catch (error) {
            throw new Error("Erro ao buscar post no banco.")
        }
    }
}