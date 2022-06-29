import { BaseDatabase } from "./BaseDatabase";
import dotenv from 'dotenv';
import { Recipe } from "../entities/Recipe";

dotenv.config()

export class RecipeDatabase extends BaseDatabase {
    public async createRecipe(recipe: Recipe) {
        try {
            await BaseDatabase.connection("Cookenu_Recipes")
            .insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                createdAt: recipe.getCreatedAt()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    // public async findUserByEmail(email: string): Promise<User> {
    //     try {
    //         const user = await BaseDatabase.connection("Cookenu_Recipes")
    //         .select('*')
    //         .where({email: email})

    //         return user[0] && User.toUserModel(user[0])
    //     } catch (error: any) {
    //         throw new Error(error.sqlMessage || error.message)
    //     }
    // }

    public async getRecipe(id:string): Promise<Recipe[]> {
        try {
            const recipes = await BaseDatabase.connection("Cookenu_Recipes")
            .select('*')
            .where({id: id})
            return recipes.map((recipe => Recipe.toRecipeModel(recipe)))
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }
}