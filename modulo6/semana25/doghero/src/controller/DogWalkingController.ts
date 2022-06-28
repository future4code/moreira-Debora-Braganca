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

    public getPetId = async (req:Request, res:Response) => {
        const {nome, tutor} = req.body
        try {
            const pet = await this.dogWalkingBusiness.getPetId(nome, tutor)
            res.status(200).send(pet)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao pesquisar pet.")
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
            res.status(500).send("Erro ao pesquisar pet.")
        }
    };

    // public getProductsByName = async (req:Request, res:Response) => {
    //     const name = req.query.name as string
    //     try {
    //         const products = await this.productBusiness.getProductsByName(name)

    //         res.status(200).send(products)
    //     } catch (error) {
    //         if(error instanceof Error){
    //             return res.status(400).send(error.message)
    //         }
    //         res.status(500).send("Erro ao pesquisar produto.")
    //     }
    // };

    // public getProductsByTag = async (req:Request, res:Response) => {
    //     const tag = req.params.tag as string
    //     try {
    //         const products = await this.productBusiness.getProductsByTag(tag)

    //         res.status(200).send(products)
    //     } catch (error) {
    //         if(error instanceof Error){
    //             return res.status(400).send(error.message)
    //         }
    //         res.status(500).send("Erro ao pesquisar produto.")
    //     }
    // };
}