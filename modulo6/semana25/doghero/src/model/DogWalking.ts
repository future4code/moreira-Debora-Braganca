export default class DogWalking {
    constructor(
        private id: string,
        private status: StatusRole,
        private data: string,
        private preco: number,
        private duracao: DuracaoRole,
        private latitude: number,
        private longitude: number,
        private hora_inicio: string,
        private hora_fim: string
    ){}

    getDogWalkingId () {
        return this.id
    }
    getDogWalkingStatus () {
        return this.status
    }
    getDogWalkingData () {
        return this.data
    }
    getDogWalkingPreco () {
        return this.preco
    }
    getDogWalkingDuracao () {
        return this.duracao
    }
    getDogWalkingLatitude () {
        return this.latitude
    }
    getDogWalkingLongitute () {
        return this.longitude
    }
    getDogWalkingInicio () {
        return this.hora_inicio
    }
    getDogWalkingFim () {
        return this.hora_fim
    }


    static stringToDuracaoRole(input: string): DuracaoRole{
        switch (input) {
            case '30':
              return DuracaoRole.TRINTA;
            case '60':
              return DuracaoRole.SESSENTA;
            default:
              throw new Error("Tempo de duração inválido");
          }
    }

    static stringToStatusRole(input: string): StatusRole{
        switch (input) {
            case 'a iniciar':
              return StatusRole.INICIAR;
            case 'em andamento':
              return StatusRole.ANDAMENTO;
            case 'em andamento':
              return StatusRole.FINALIZADO;
            default:
              throw new Error("Status inválido");
          }
    }

}

export enum DuracaoRole{
    TRINTA = '30',
    SESSENTA = '60'
}

export enum StatusRole{
    INICIAR = 'a iniciar',
    ANDAMENTO = 'em andamento',
    FINALIZADO = 'finalizado'
}