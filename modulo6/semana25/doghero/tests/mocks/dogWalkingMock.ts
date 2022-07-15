import DogWalking, { StatusRole } from "../../src/model/DogWalking";


export const dogWalkingMock1 = new DogWalking(
    "id_mockado1",
    StatusRole.INICIAR,
    "2022/06/28",
    55,
    60,
    12345678,
    87654321,
    "13:00:00",
    "14:00:00"
)

export const dogWalkingMock2 = new DogWalking(
    "id_mockado2",
    StatusRole.ANDAMENTO,
    "2022/06/28",
    55,
    30,
    12345678,
    87654321,
    "16:00:00",
    "16:30:00"
)

export const dogWalkingMock3 = new DogWalking(
    "id_mockado3",
    StatusRole.FINALIZADO,
    "2022/06/28",
    55,
    30,
    12345678,
    87654321,
    "17:00:00",
    "17:30:00"
)