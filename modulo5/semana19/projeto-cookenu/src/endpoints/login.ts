import { Request, Response } from "express";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";

export async function login(req: Request, res: Response) {
    try {
        const {email, password} = req.body

        if(!email || !password){
            res
            .status(422)
            .send("Insira corretamente as informacões")
        }
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email);
    

        if(!user) {
            res.status(409).send('Este email não está cadastrado')
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if(!passwordIsCorrect){
            res.status(401).send('Email ou senha incorretos.')
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.getId()})

        res.status(200).send({message: 'Usuário logado com sucesso', token})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}