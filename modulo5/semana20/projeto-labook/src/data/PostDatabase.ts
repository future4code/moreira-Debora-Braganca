import { BaseDatabase } from "./BaseDatabase";
import Post from "../model/Post";
import { FindPostByIdRes } from "../types/findPostByIdRes";


export default class PostDatabase extends BaseDatabase {
    protected TABLE_NAME = "labook_posts"
    protected TABLE_FOLLOW = "labook_seguir"

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

    getFeed = async(userId: string) => {
        try {
            const friends = await this
            .connection(this.TABLE_FOLLOW)
            .select("userToFollowId")
            .where({idUser: userId})
            console.log(friends)

        const friends2 = friends.map((friend) => {
            return friend.userToFollowId
        })

        console.log(friends2)

            const feed = friends2.map(async (friend) => {
                const queryResult: FindPostByIdRes = await this
                .connection(this.TABLE_NAME )
                .select("*")
                .where({author_id: friend})
                return queryResult
            })

            return feed
        } catch (error) {
            throw new Error("Erro ao buscar post no banco.")
        }
    }
}