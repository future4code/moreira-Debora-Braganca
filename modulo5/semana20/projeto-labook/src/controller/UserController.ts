import {Request, Response} from 'express';
import UserBusiness from '../business/UserBusiness';
import { LoginDTO } from '../types/loginDTO';
import { SignUpInputDTO } from '../types/signUpInputDTO';

export default class UserController {
    userBusiness = new UserBusiness()

    signUp = async(req: Request, res:Response) => {
        const {name, email, password} = req.body

        const input: SignUpInputDTO = {
            name,
            email,
            password
        }
        try {
            const token = await this.userBusiness.signUp(input)
            res.status(201).send({message: "Usuário cadastrado com sucesso", token})
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }

    login = async(req:Request, res: Response) => {
        const {email, password} = req.body
        const input: LoginDTO = {
            email,
            password
        }

        try {
            const token = await this.userBusiness.login(input)
            res.status(200).send({message: "Login efetuado com sucesso", token})
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no login")
        }
    }

}