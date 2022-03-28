//Exercício 01

import { type } from "os"
import { Type } from "typescript"

// function imprimeFrase (nome: String, data: String):String{
//     const splitData = data.split("/")
//     return `"Olá me chamo ${nome}, nasci no dia ${splitData[0]} do mês de ${splitData[1]} do ano de ${splitData[2]}"`
//     }

// const nome: String = process.argv[2]
// const data: String = process.argv[3]

// console.log(imprimeFrase(nome,data))


//Exercício 02

// function imprimeTipo(input:any): void{
//     console.log(input)
// }

// imprimeTipo(nome)

//Exercício 03

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function retornaType (name: string, year: number, genero: GENERO, pontuacao?:number){
    type Movie = {
        nome: string,
        anoLancamento: number,
        genero: GENERO,
        pontuacao?: number
    }

    const filme: Movie = {
        nome: name,
        anoLancamento: year,
        genero: genero,
        pontuacao: pontuacao
    }

    return filme
}

console.log(retornaType("Uynxier", 1990, GENERO.ACAO))