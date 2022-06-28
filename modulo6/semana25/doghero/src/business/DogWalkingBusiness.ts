import DogWalkingDatabase from "../data/DogWalkingDatabase";
import { IdGenerator } from "../services/IdGenerator";
import DogWalking from "../model/DogWalking"
import { DogWalkingInputDTO } from "../types/DTO/DogWalkingInputDTO";
import Pet from "../model/Pet";
import PetsPasseios from "../model/PetsPasseios";
import { CustomError } from "../error/CustomError";
import moment from "moment";


export default class DogWalkingBusiness {

  constructor(
    private dogWalkingDatabase: DogWalkingDatabase,
    private idGenerator: IdGenerator
 ) { }

  createWalk = async (input: DogWalkingInputDTO) => {
    try {
         
    const {data, duracao, latitude, longitude, hora_inicio, hora_fim, pets, tutor} = input
    if(!data || !duracao || !hora_inicio || !hora_fim || pets.length<1 || !tutor){
    throw new CustomError(422, "Favor preencher todos os campos.")
    }

    const walkId = this.idGenerator.generateId()
    const status = DogWalking.stringToStatusRole('a iniciar')

    if (duracao === '30'){
        const preco = 25 + ((input.pets.length - 1) * 15)

        const newWalk = new DogWalking (
            walkId,
            status,
            data,
            preco,
            DogWalking.stringToDuracaoRole(duracao),
            latitude,
            longitude,
            hora_inicio,
            hora_fim
          )

          console.log(newWalk)
      
          await this.dogWalkingDatabase.insert(newWalk)
    }

    if (duracao === '60'){
        const preco = 35 + ((input.pets.length - 1) * 20)

        const newWalk = new DogWalking (
            walkId,
            status,
            data,
            preco,
            DogWalking.stringToDuracaoRole(duracao),
            latitude,
            longitude,
            hora_inicio,
            hora_fim
          )
      
          await this.dogWalkingDatabase.insert(newWalk)
    }
    

    for(let pet of input.pets){

    const verifyPet = await this.dogWalkingDatabase.getPetId(pet, input.tutor)

    if(!verifyPet){
        const petId = this.idGenerator.generateId()

        const newPet = new Pet (
            petId,
            pet,
            input.tutor
            )
    
        await this.dogWalkingDatabase.insertPet(newPet)
    
        const passeioPetsId = this.idGenerator.generateId()
    
        const passeioPets = new PetsPasseios(
            passeioPetsId,
            petId,
            walkId
        )
      
        await this.dogWalkingDatabase.insertPetsPasseios(passeioPets);
    } else if (verifyPet){
        const passeioPetsId = this.idGenerator.generateId()
    
        const passeioPets = new PetsPasseios(
            passeioPetsId,
            verifyPet.id,
            walkId
        )
      
        await this.dogWalkingDatabase.insertPetsPasseios(passeioPets);
    }

}

  } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
  }
};

  getWalks = async () => {
    try {

        const walks = await this.dogWalkingDatabase.getWalks()

        console.log(walks)

        const fullWalks = []

        for (let walk of walks){
            const pets = await this.dogWalkingDatabase.getPasseioPets(walk.id)

            const passeioPets = []

            for(let pet of pets){
                const petName = await this.dogWalkingDatabase.getPetById(pet.pet_id)
                passeioPets.push(petName.nome)
            }

            const fullWalk = {
                ...walk,
                passeioPets
            }

            fullWalks.push(fullWalk)
        }

        return fullWalks

            
    } catch (error: any) {
        throw new CustomError(error.statusCode, error.message)   
    }
};

  start_walk = async (walkId: string) => {
    try {
        
        if (!walkId) {
            throw new CustomError(422, "Favor informar id do passeio.");
        }
        const walk = await this.dogWalkingDatabase.getWalkById(walkId)

        if(walk.status === "em andamento"){
            throw new CustomError(422, "O passeio já foi iniciado.");
        } else if(walk.status === "finalizado"){
            throw new CustomError(422, "Não é possível iniciar um passeio que já foi finalizado.");
        }
        
        const startTime = moment().format('HH:mm:ss')
        
        const newWalk = await this.dogWalkingDatabase.start_walk(walkId, startTime);
        
        return newWalk;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

  finish_walk = async (walkId: string) => {
    try {
            
        if (!walkId) {
            throw new CustomError(422, "Favor informar id do passeio.");
        }

        const walk = await this.dogWalkingDatabase.getWalkById(walkId)

        if(walk.status === "a iniciar"){
            throw new CustomError(422, "Não é possível finalizar um passeio que ainda não foi iniciado.");
        }

        if(walk.status === "finalizado"){
            throw new CustomError(422, "O passeio já foi finalizado.");
        }
            
        const finishTime = moment().format('HH:mm:ss')
        
        const newDuration = moment(finishTime, "HH:mm:ss").diff(moment(walk.hora_inicio, "HH:mm:ss"))
        const newDurationMin = moment.duration(newDuration).asMinutes()

        const walkPets = await this.dogWalkingDatabase.getPasseioPets(walkId)

        if (newDurationMin <= 30){
        const newPrice = 25 + ((walkPets.length - 1) * 15)
        const duration = "30"
            
        const newWalk = await this.dogWalkingDatabase.finish_walk(walkId, finishTime, newPrice, duration);
            
        return newWalk;
        } else if (newDurationMin > 30 && newDurationMin <= 60){
        const newPrice = 35 + ((walkPets.length - 1) * 20)

        const duration = "60"
            
        const newWalk = await this.dogWalkingDatabase.finish_walk(walkId, finishTime, newPrice, duration);
     
        return newWalk; 
        }

    } catch (error: any) {
        throw new CustomError(error.statusCode, error.message);
        }
    };

};