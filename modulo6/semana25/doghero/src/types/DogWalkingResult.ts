import { StatusRole } from "../model/DogWalking"

export type DogWalkingResult = {
    id: string,
    status: StatusRole,
    data: string,
    preco: number,
    duracao: number,
    latitude: number,
    longitude: number,
    hora_inicio: string,
    hora_fim: string
}