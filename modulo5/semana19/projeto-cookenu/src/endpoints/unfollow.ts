import { Request, Response } from 'express';
import { Authenticator } from '../../services/Authenticator';
import { UserDatabase } from '../data/UserDatabase';

export async function unfollow(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string
        const id = req.body.userToUnfollowId

        if(!id || !token) {
            res
            .status(422)
            .send("Essa requisição exige uma autorização e um id.")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const userDataBase = new UserDatabase()
        const user = await userDataBase.getUserInfo(id)

        res.status(200).send({message: "Unfollowed successfully"})

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}