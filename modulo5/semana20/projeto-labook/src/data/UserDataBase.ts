import { BaseDatabase } from "./BaseDatabase";
import User from "../model/User";
import { FindByEmailResponse } from "../types/findByEmailResponse";
import UserToFollow from "../model/UserToFollow";

export default class UserDatabase extends BaseDatabase {
    protected TABLE_NAME = "labook_users"
    protected TABLE_FOLLOW = "labook_seguir"

    insert = async(user: User) => {
        try {
            await this
            .connection(this.TABLE_NAME)
            .insert(user)

        } catch (error) {
            throw new Error("Erro do banco.")
        }
    }

    findByEmail = async(email: string) => {
        try {
            const queryResult: FindByEmailResponse = await this
            .connection(this.TABLE_NAME)
            .select("*")
            .where({email: email})
            return queryResult[0]
        } catch (error) {
            throw new Error("Erro ao buscar usuário no banco.")
        }
    }

    findById = async(id: string) => {
        try {
            const queryResult: FindByEmailResponse = await this
            .connection(this.TABLE_NAME)
            .select("*")
            .where({id})
            return queryResult[0]
        } catch (error) {
            throw new Error("Erro ao buscar usuário no banco.")
        }
    }

    insertFollower = async(userToFollow: UserToFollow) => {
        try {
            await this
            .connection(this.TABLE_FOLLOW)
            .insert(userToFollow)

        } catch (error) {
            throw new Error("Erro do banco.")
        }
    }
}