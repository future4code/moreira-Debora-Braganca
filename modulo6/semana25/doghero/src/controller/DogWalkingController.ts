import { Request, Response } from "express";
import { DogWalkingInputDTO } from "../types/DTO/DogWalkingInputDTO";
import DogWalkingBusiness from "../business/DogWalkingBusiness";

export default class DogWalkingController {
    constructor(private dogWalkingBusiness: DogWalkingBusiness){}

    public createDogWalking = async(req: Request, res:Response) => {
        const {data, duracao, latitude, longitude, hora_inicio, hora_fim, pets, tutor} = req.body

        const input: DogWalkingInputDTO = {
            data,
            duracao,
            latitude,
            longitude,
            hora_inicio,
            hora_fim,
            pets,
            tutor
        }
        try {
            const walk = await this.dogWalkingBusiness.createWalk(input)
            res.status(201).send({message: "Passeio cadastrado com sucesso", walk})
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao cadastrar passeio")
        }
    };

    public getWalks = async (req:Request, res:Response) => {
        try {
            const walks = await this.dogWalkingBusiness.getWalks()
            res.status(200).send(walks)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao pesquisar passeios.")
        }
    };

    public start_walk = async (req: Request, res: Response) => {
        try {
            const walkId = req.params.id
        
            const walk = await this.dogWalkingBusiness.start_walk(walkId);
            res
            .status(201)
            .send({ message: "Passeio iniciado com sucesso.", walk });
        
        } catch (error: any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
        }
    };

    public finish_walk = async (req: Request, res: Response) => {
        try {
            const walkId = req.params.id
        
            const walk = await this.dogWalkingBusiness.finish_walk(walkId);
            res
            .status(201)
            .send({ message: "Passeio finalizado com sucesso.", walk });
        
        } catch (error: any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
        }
    };
};