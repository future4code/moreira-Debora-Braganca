import {Request, Response} from 'express';
import UserBusiness from '../business/UserBusiness';
import { SignUpInputDTO } from '../types/signUpInputDTO';

export default class UserController {

    signUp = async(req: Request, res:Response) => {
        const userBusiness = new UserBusiness()
        const {name, email, password} = req.body

        const input: SignUpInputDTO = {
            name,
            email,
            password
        }
        try {
            const token = await userBusiness.signUp(input)
            res.status(201).send({message: "Usuário cadastrado com sucesso", token})
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }

}