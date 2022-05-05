import { Request, Response } from "express";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";

export async function createRecipe(req: Request, res: Response) {

    try {
        const token = req.headers.authorization as string
        const {title, description} = req.body

        if(!token) {
            res
            .status(422)
            .send("Essa requisição exige uma autorização.")
        }

        if(!title || !description){
            res
            .status(422)
            .send("Insira corretamente as informacões")
        }
        const recipeDatabase = new RecipeDatabase()

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)


        const createdAt = new Date()

        const newRecipe = new Recipe(id, title, description, createdAt)
        await recipeDatabase.createRecipe(newRecipe)

        res.status(200).send({message: 'Receita adicionada com sucesso', id})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}