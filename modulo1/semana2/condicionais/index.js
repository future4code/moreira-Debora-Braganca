//Exercícios de interpretação de código

//1.
//a) Através da condicional, ele compara se o resto da divisão de um número por 2 é 0. 
//Se o resto for 0, significa que o número é divisível por 2, logo ele é par.

//b)Para os números pares.

//c)Para os números ímpares.

//2.
//a)Para informar ao usuario qual o preço da fruta desejada.

//b)O preço da fruta Maçã é R$2.25

//c)O preço da fruta Pêra é R$5

//3.
//a)Está pedindo para o usuário um número

//b)Se for 10 -> Esse número passou no teste.
//Se for -10 -> Não aparecerá nada no console.

//c)Sim, pois a variável mensagem está dentro do escopo local da função,
//e o console.log está no escopo global do código, logo não pode ser acessada.


//Exercícios de escrita de código
//a)
/* const idade = prompt("Qual a sua idade?")
//b)
const idadeNumero = Number(idade)
//c)
function podeDirigir(idade) {
    if (idade >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir.")
    }
}
podeDirigir(idadeNumero)

//2.
const turno = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.")

function mensagemSaudacao (turno) {
    if (turno === "M") {
        console.log("Bom Dia!")
    } else if (turno === "V") {
        console.log("Boa Tarde!")
    } else if (turno === "N") {
        console.log("Boa Noite!")
    } else {
        console.log("Diga qual o turno utilizando M para matutino, V para vespertino e N para noturno.")
    }
}
mensagemSaudacao(turno)

//3.
function mensagemSaudacaoSwitchCase (turno) {
switch (turno) {
    case 'M':
    console.log("Bom Dia!")
    break
    case 'V':
    console.log("Boa Tarde!")
    break
    case 'N':
    console.log("Boa Noite!")
    break
    default:
    console.log("Diga qual o turno utilizando M para matutino, V para vespertino e N para noturno.")
    break
}
}
mensagemSaudacaoSwitchCase(turno)

//4.
const genero = prompt("Qual o gênero do filme?")
const preco = Number(prompt("Qual o valor do ingresso?"))

function topaAssistir (genero, preco) {
    if (genero === "fantasia" && preco < 15){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}
topaAssistir(genero, preco)

//Desafios

//1.
const lanchinho = prompt("Qual lanchinho você vai comprar?")

function topaAssistir (genero, preco) {
    if (genero === "fantasia" && preco < 15){
        console.log("Bom filme!")
        console.log(`Aproveite seu ${lanchinho}.`)
    } else {
        console.log("Escolha outro filme :(")
    }
}
topaAssistir(genero, preco) */

//2.
const nome = prompt("Qual seu nome completo?")
const tipoDeJogo = prompt("Qual o tipo de jogo? Digite IN para internacional e DO para doméstico.")
const etapaDoJogo = prompt("Qual a etapa do jogo? Digite SF para semi-final, DT para decisão do terceiro lugar e FI para final.")
const categoria = Number(prompt("Digite a categoria: 1, 2, 3 ou 4"))
const quantidadeDeIngressos = Number(prompt("Qual a quantidade de ingressos?"))


function valorDoIngresso (tipoDeJogo, etapaDoJogo, categoria){
    if (tipoDeJogo === "DO" && etapaDoJogo === "SF"){
            switch (categoria) {
            case 1:
            return 1320.00
            break
            case 2: 
            return 880.00
            case 3:
            return 550.00
            break
            case 4:
            return 220.00
            break
            default: "Favor digite a categoria de 1 a 4."
                break
        }
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT") {
        switch (categoria) {
            case 1:
            return 660.00
            break
            case 2: 
            return 440.00
            case 3:
            return 330.00
            break
            case 4:
            return 170.00
            break
            default: "Favor digite a categoria de 1 a 4."
                break
        }
    } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI") {
        switch (categoria) {
            case 1:
            return 1980.00
            break
            case 2: 
            return 1320.00
            case 3:
            return 880.00
            break
            case 4:
            return 330.00
            break
            default: "Favor digite a categoria de 1 a 4."
                break
        }
    } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF"){
        switch (categoria) {
        case 1:
        return 1320.00 * 4.10
        break
        case 2: 
        return 880.00 * 4.10
        case 3:
        return 550.00 * 4.10
        break
        case 4:
        return 220.00 * 4.10
        break
        default: "Favor digite a categoria de 1 a 4."
            break
    }
} else if (tipoDeJogo === "IN" && etapaDoJogo === "DT"){
    switch (categoria) {
    case 1:
    return 660.00 * 4.10
    break
    case 2: 
    return 440.00 * 4.10
    case 3:
    return 330.00 * 4.10
    break
    case 4:
    return 170.00 * 4.10
    break
    default: "Favor digite a categoria de 1 a 4."
        break
}
} else if (tipoDeJogo === "IN" && etapaDoJogo === "DT"){
    switch (categoria) {
    case 1:
    return 1980.00 * 4.10
    break
    case 2: 
    return 1320.00 * 4.10
    case 3:
    return 880.00 * 4.10
    break
    case 4:
    return 330.00 * 4.10
    break
    default: "Favor digite a categoria de 1 a 4."
        break
}
}
 else {
     console.log("Favor digite IN ou DO para o tipo de jogo.")
 }
}


function nomeTipoJogo(tipoDeJogo) {
if (tipoDeJogo === "DO"){
    return "Nacional"
} else if(tipoDeJogo === "IN"){
    return "Internacional"}}

function nomeEtapaJogo(etapaDoJogo) {
        if (etapaDoJogo === "SF"){
            return "Semi-final"
        } else if(etapaDoJogo === "DT"){
            return "Decisão do 3º lugar"
        } else if(etapaDoJogo === "FI"){
            return "Final"}
}
        
const valorTotal = valorDoIngresso(tipoDeJogo, etapaDoJogo, categoria) * quantidadeDeIngressos

console.log(`---Dados da compra---
Nome do cliente: ${nome}
Tipo de Jogo:`, nomeTipoJogo(tipoDeJogo),`
Etapa do jogo:`, nomeEtapaJogo(etapaDoJogo),`
Categoria:`, categoria,`
Quantidade de Ingressos:`, quantidadeDeIngressos, `ingressos`,`
---Valores---
Valor do Ingresso: R$`,valorDoIngresso(tipoDeJogo, etapaDoJogo, categoria),`
Valor Total: R$${valorTotal}`)