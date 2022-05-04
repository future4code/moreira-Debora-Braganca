import { BaseDatabase } from "./BaseDatabase";
import Post from "../model/Post";


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

    // findPostByid = async(email: string) => {
    //     try {
    //         const queryResult: FindByEmailResponse = await this
    //         .connection(this.TABLE_NAME)
    //         .select("*")
    //         .where({email: email})
    //         return queryResult[0]
    //     } catch (error) {
    //         throw new Error("Erro ao buscar usuário no banco.")
    //     }
    // }
}