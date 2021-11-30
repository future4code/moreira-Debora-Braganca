//EXERCÍCIOS DE INTERPRETACÃO DE CÓDIGO

//1. 
//const bool1 = true
//const bool2 = false
//const bool3 = true

//let resultado = bool1 && bool2
//a. false

//b. false

//!resultado && true
//!false && true
// true && true
//c. true

//d. boolean true

//2.
//O prompt retorna uma string, que não pode sofrer operações matemáticas.
//O console vai imprimir um erro

//3.
//Ele precisa converter as strings em numbers usando:
//let primeiroNumero = Number(prompt("Digite um número!"))
//let segundoNumero = Number(prompt("Digite outro número!"))


//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.

const idadeUsuario = Number(prompt("Olá, qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual a idade do(a) seu(sua) melhor amigo(a)?"))

console.log("Sua idade é maior do que a do(a) seu(sua) melhor amigo(a)?", idadeUsuario > idadeMelhorAmigo)
console.log("A diferença de idade entre vocês é:", idadeUsuario - idadeMelhorAmigo)

//2.

//a)
const numeroPar = Number(prompt("Digite um número par:"))

//b)
console.log("O resto da divisão do número por 2 é:", numeroPar % 2)

//c)
//O resto da divisão de qualquer numero par por 2 é sempre 0

//d)
//Inserindo um número ímpar o resto será 1

//3.
const idadeAnos = Number(prompt("Olá, qual a sua idade?"))
//a)
console.log("Sua idade em meses é: ", idadeAnos * 12)
//b)
console.log("Sua idade em dias é: ", idadeAnos * 365)
//c)
console.log("Sua idade em horas é: ", idadeAnos * (365 * 24))

//4.
let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))


console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro múmero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0)