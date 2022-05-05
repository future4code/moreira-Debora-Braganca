import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";
import dotenv from 'dotenv';

dotenv.config()

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User) {
        try {
            await BaseDatabase.connection("Cookenu_Users")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection("Cookenu_Users")
            .select('*')
            .where({email: email})

            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getUserInfo(tokenData:string): Promise<User[]> {
        try {
            const users = await BaseDatabase.connection("Cookenu_Users")
            .select("id","name", "email")
            .where({id: tokenData})
            return users.map((user => User.toUserModel(user)))
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }
}