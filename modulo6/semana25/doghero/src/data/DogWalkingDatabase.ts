
import { BaseDatabase } from "./BaseDatabase";
import DogWalking from "../model/DogWalking";
import Pet from "../model/Pet";
import PetsPasseios from "../model/PetsPasseios";

export default class DogWalkingDatabase extends BaseDatabase {
    protected TABLE_NAME = "DogWalking"
    protected TABLE_PETS = "DogWalking_Pets"
    protected TABLE_PETS_PASSEIOS = "DogWalking_Pets_Passeios"

    insert = async(walk: DogWalking) => {
        try {
            await this
            .connection(this.TABLE_NAME)
            .insert(walk)

        } catch (error) {
            throw new Error("Erro do banco.")
        }
    }

    insertPet = async(pet: Pet) => {
        try {
            await this
            .connection(this.TABLE_PETS)
            .insert(pet)

        } catch (error) {
            throw new Error("Erro do banco.")
        }
    }

    insertPetsPasseios = async(petspasseio: PetsPasseios) => {
        try {
            await this
            .connection(this.TABLE_PETS_PASSEIOS)
            .insert(petspasseio)

        } catch (error) {
            throw new Error("Erro do banco.")
        }
    }

    getAllWalks = async () => {
        try {
            const queryResult = await this
            .connection(this.TABLE_NAME)
            .select("*")
            return queryResult

        } catch (error) {
            throw new Error("Erro ao buscar passeios no banco.")
        }
    }

    getWalkById = async(id: string) => {
        try {
            const queryResult = await this
            .connection(this.TABLE_NAME)
            .select("*")
            .where({id})
            return queryResult[0]
        } catch (error) {
            throw new Error("Erro ao buscar produto no banco.")
        }
    };

    getPasseioPets = async(id: string) => {
        try {
            const queryResult = await this
            .connection(this.TABLE_PETS_PASSEIOS)
            .select("*")
            .where({passeio_id: id})
            return queryResult
        } catch (error) {
            throw new Error("Erro ao buscar pets no banco.")
        }
    };

    getPetById = async (id: string) => {
        try {
            const queryResult = await this
            .connection(this.TABLE_PETS)
            .select("*")
            .where({id})
            return queryResult[0]
        } catch (error) {
            throw new Error("Erro ao buscar pet no banco.")
        }
    };

    getPetId = async (nome: string, tutor: string) => {
        try {
            const queryResult = await this
            .connection(this.TABLE_PETS)
            .select("*")
            .where({nome})
            .andWhere({tutor})
            return queryResult[0]
        } catch (error) {
            throw new Error("Erro ao buscar pet no banco.")
        }
    };

    start_walk = async (id: string, startTime: string) => {
        try {
            const result = await this.connection(this.TABLE_NAME)
            .update({hora_inicio: startTime, status: "em andamento"})
            .where({id})
      
            const [updatedWalk] = await this.connection(this.TABLE_NAME)
            .select("*")
            .where({id})
      
            return updatedWalk
      
          } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
          }
        };

    finish_walk = async (id: string, finishTime: string, newPrice: number, duration: string) => {
        try {
            const result = await this.connection(this.TABLE_NAME)
            .update({status: "finalizado", preco: newPrice, duracao: duration, hora_fim: finishTime})
            .where({id})
          
            const [updatedWalk] = await this.connection(this.TABLE_NAME)
            .select("*")
            .where({id})
          
            return updatedWalk
          
            } catch (error: any) {
              throw new Error(error.sqlMessage || error.message);
            }
    };
};