import DogWalking from "../../src/model/DogWalking";
import Pet from "../../src/model/Pet";
import PetsPasseios from "../../src/model/PetsPasseios";
import { dogWalkingMock1, dogWalkingMock2, dogWalkingMock3 } from "./dogWalkingMock";
import { petMock1, petMock2, petMock3, petMock4, petMock5 } from "./petMock";
import { petsPasseiosMock1, petsPasseiosMock2, petsPasseiosMock3, petsPasseiosMock4, petsPasseiosMock5 } from "./petsPasseiosMock";

export default class DogWalkingDatabaseMock {

    insert = async(walk: DogWalking): Promise<void> => {}

    insertPet = async(pet: Pet): Promise<void> => {}

    insertPetsPasseios = async(petspasseio: PetsPasseios): Promise<void> => {}

    getWalks = async (): Promise <DogWalking[]> => {
        const result = [dogWalkingMock1, dogWalkingMock2, dogWalkingMock3]
        return result
      };

    getWalkById = async(id: string): Promise<DogWalking | undefined> => {
        if (id === "id_mockado1") {
            return dogWalkingMock1
        } else if (id === "id_mockado2") {
            return dogWalkingMock2
        } else if (id === "id_mockado3") {
            return dogWalkingMock3
        }
        return undefined
      };

    getPasseioPets = async(id: string): Promise<PetsPasseios[] | undefined> => {
        if (id === "id_mockado1") {
            return [petsPasseiosMock1, petsPasseiosMock2]
        } else if (id === "id_mockado2") {
            return [petsPasseiosMock3, petsPasseiosMock4]
        } else if (id === "id_mockado3") {
            return [petsPasseiosMock5]
        }
        return undefined
      };

    getPetById = async (id: string): Promise<Pet | undefined> => {
        if (id === "petId_1") {
            return petMock1
        } else if (id === "petId_2") {
            return petMock2
        } else if (id === "petId_3") {
            return petMock3
        } else if (id === "petId_4") {
            return petMock4
        } else if (id === "petId_5") {
            return petMock5
        }
        return undefined
      };

    getPetId = async (nome: string, tutor: string): Promise<Pet | undefined> => {
        if (nome === "Pet 1" && tutor === "Tutor 1") {
            return petMock1
        } else if (nome === "Pet 2" && tutor === "Tutor 1") {
            return petMock2
        } else if (nome === "Pet 3" && tutor === "Tutor 2") {
            return petMock3
        } else if (nome === "Pet 4" && tutor === "Tutor 2") {
            return petMock4
        } else if (nome === "Pet 5" && tutor === "Tutor 3") {
            return petMock5
        }
        return undefined
      };

    start_walk = async (id: string, startTime: string): Promise <void> => {}

    finish_walk = async (id: string, finishTime: string, newPrice: number, duration: string): Promise <void> => {}
};