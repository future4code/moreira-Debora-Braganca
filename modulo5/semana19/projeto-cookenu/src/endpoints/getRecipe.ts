import { Request, Response } from 'express';
import { Authenticator } from '../../services/Authenticator';
import { RecipeDatabase } from '../data/RecipeDatabase';

export async function getRecipe(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id

        if(!id || !token) {
            res
            .status(422)
            .send("Essa requisição exige uma autorização e um id.")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const RecipeDataBase = new RecipeDatabase()
        const recipe = await RecipeDataBase.getRecipe(id)

        res.status(200).send(recipe)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}