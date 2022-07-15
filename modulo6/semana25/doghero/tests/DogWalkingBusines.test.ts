import DogWalkingBusiness from "../src/business/DogWalkingBusiness";
import DogWalkingDatabaseMock from "./mocks/dogWalkingDatabaseMock";
import { CustomError } from "../src/error/CustomError";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { DogWalkingInputDTO } from "../src/types/DTO/DogWalkingInputDTO";
import { dogWalkingMock1, dogWalkingMock2, dogWalkingMock3 } from "./mocks/dogWalkingMock";

const dogWalkingBusinessMock = new DogWalkingBusiness(
    new DogWalkingDatabaseMock() as any,
    new IdGeneratorMock()
)

describe("Teste de createWalk", () => {
    test("Erro que deve retornar quando a data está vazia", async () => {
        expect.assertions
        try {
            const input: DogWalkingInputDTO = {
                data: "",
                latitude: 12345678,
                longitude: 87654321,
                hora_inicio: "17:00:00",
                hora_fim: "17:30:00",
                pets: ["Pet 1", "Pet 2"],
                tutor: "Tutor"
            }

            await dogWalkingBusinessMock.createWalk(input)

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Favor preencher todos os campos.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        }
    })

    test("Erro que deve retornar quando o horário de término é menor que o horário de início", async () => {
        expect.assertions
        try {
            const input: DogWalkingInputDTO = {
                data: "01/07/2022",
                latitude: 12345678,
                longitude: 87654321,
                hora_inicio: "17:30:00",
                hora_fim: "17:00:00",
                pets: ["Pet 1", "Pet 2"],
                tutor: "Tutor"
            }

            await dogWalkingBusinessMock.createWalk(input)

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("O horário de fim não pode ser menor que o horário do início.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Erro que deve retornar quando a duração não for 30 ou 60 minutos.", async () => {
        expect.assertions
        try {
            const input: DogWalkingInputDTO = {
                data: "01/07/2022",
                latitude: 12345678,
                longitude: 87654321,
                hora_inicio: "17:30:00",
                hora_fim: "19:00:00",
                pets: ["Pet 1", "Pet 2"],
                tutor: "Tutor"
            }

            await dogWalkingBusinessMock.createWalk(input)

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Favor escolher horários com duração de 30 ou 60 minutos.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Sucesso no cadastro", async () => {
        expect.assertions
        try {
        const input: DogWalkingInputDTO = {
            data: "01/07/2022",
            latitude: 12345678,
            longitude: 87654321,
            hora_inicio: "17:30:00",
            hora_fim: "18:00:00",
            pets: ["Pet 1", "Pet 2"],
            tutor: "Tutor"
        }

        await dogWalkingBusinessMock.createWalk(input)
        } catch (error) {
          console.log(error)
        }
    })
});

describe("Teste de retorno de todos os passeios.", () => {
    test("Deve listar todos os passeios", async () => {
      expect.assertions;
      try {
        const walks = await dogWalkingBusinessMock.getAllWalks();
  
        expect(walks).toBeTruthy();
        expect(walks).toEqual([
        {...dogWalkingMock1,
        walkPets: ["Pet 1", "Pet 2"]}, 
        {...dogWalkingMock2,
        walkPets: ["Pet 3", "Pet 4"]}, 
        {...dogWalkingMock3,
        walkPets: ["Pet 5"]}
    ]);
      } catch (error) {
        console.log(error)
      }
    })
});

describe("Teste de retorno de passeio pelo id.", () => {
    test("Erro que deve retornar quando o id não for passado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.getWalkById("")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Favor informar id do passeio.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Erro que deve retornar quando o passeio não estiver cadastrado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.getWalkById("id_teste")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Passeio não encontrado.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Deve listar o passeio", async () => {
      expect.assertions;
      try {
        const walks = await dogWalkingBusinessMock.getWalkById("id_mockado1");
  
        expect(walks).toBeTruthy();
        expect(walks).toEqual(
            {...dogWalkingMock1,
            walkPets: ["Pet 1", "Pet 2"]
        });
      } catch (error) {
        console.log(error)
      }
    })
});

describe("Testes de iniciar um passeio", () => {
    test("Erro que deve retornar quando o id não for passado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.start_walk("")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Favor informar id do passeio.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Erro que deve retornar quando o passeio não estiver cadastrado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.start_walk("id_teste")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Passeio não encontrado.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Erro que deve retornar quando o passeio já foi iniciado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.start_walk("id_mockado2")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("O passeio já foi iniciado.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Erro que deve retornar quando o passeio já foi finalizado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.start_walk("id_mockado3")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Não é possível iniciar um passeio que já foi finalizado.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Sucesso no início.", async () => {
        expect.assertions
        try {

        await dogWalkingBusinessMock.start_walk("id_mockado1")
        } catch (error) {
          console.log(error)
        }
    })
});

describe("Testes de finalizar um passeio", () => {
    test("Erro que deve retornar quando o id não for passado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.start_walk("")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Favor informar id do passeio.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Erro que deve retornar quando o passeio não estiver cadastrado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.start_walk("id_teste")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Passeio não encontrado.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Erro que deve retornar quando o passeio ainda não foi iniciado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.finish_walk("id_mockado1")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Não é possível finalizar um passeio que ainda não foi iniciado.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Erro que deve retornar quando o passeio já foi finalizado.", async () => {
        expect.assertions
        try {

            await dogWalkingBusinessMock.finish_walk("id_mockado3")

        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("O passeio já foi finalizado.")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        } 
    })

    test("Sucesso na finalização.", async () => {
        expect.assertions
        try {

        await dogWalkingBusinessMock.finish_walk("id_mockado2")
        } catch (error) {
          console.log(error)
        }
    })
});

