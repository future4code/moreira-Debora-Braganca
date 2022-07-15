export default class PetsPasseios {
    constructor(
        private id: string,
        private pet_id: string,
        private passeio_id: string
    ){}

    getPetId () {
        return this.id
    }
    getPetPetId () {
        return this.pet_id
    }
    getPetPasseioId () {
        return this.passeio_id
    }
}