import DogWalkingDatabase from "../data/DogWalkingDatabase";
import { IdGenerator } from "../services/IdGenerator";
import DogWalking from "../model/DogWalking"
import { DogWalkingInputDTO } from "../types/DTO/DogWalkingInputDTO";
import Pet from "../model/Pet";
import PetsPasseios from "../model/PetsPasseios";
import { CustomError } from "../error/CustomError";


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

          console.log(newWalk)
      
          await this.dogWalkingDatabase.insert(newWalk)
    }
    

    for(let pet of input.pets){

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

}

  } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
  }
};

  getPetId = async (nome: string, tutor: string) => {
     try {  
        const pet = await this.dogWalkingDatabase.getPetId(nome, tutor)

        if(!pet){
            throw new CustomError(422, "Pet não cadastrado.")
        }

        return pet
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

};