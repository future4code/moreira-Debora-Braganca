import { Request, Response } from 'express';
import { Authenticator } from '../../services/Authenticator';
import { UserDatabase } from '../data/UserDatabase';

export async function getUserInfo(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string

        if(!token) {
            res
            .status(422)
            .send("Essa requisição exige uma autorização.")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserInfo()

        res.status(200).send(user)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}