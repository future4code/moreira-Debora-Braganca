export default class Pet {
    constructor(
        private id: string,
        private nome: string,
        private tutor: string
    ){}

    getPetId () {
        return this.id
    }
    getPetName () {
        return this.nome
    }
    getPetTutor () {
        return this.tutor
    }
}