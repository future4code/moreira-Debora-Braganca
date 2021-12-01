// Exemplo de Comentários

// duas barras comenta uma linha ( ctrl + ;)


/*Os símbolo de barra asterisco ( para abrir) e  asterisco barra( para fechar) comenta todo o bloco que tiver dentro dele (Shift + Alt + A)*/


// Exemplo de console.log()

// console.log("Olá Mundo!")
// console.log("Tudo o que tiver dentro do console.log vai aparecer para os desenvolvedores")

 /* Exemplo de prompt()

 const nome=prompt("Qual seu nome?")

 console.log(nome)
 Quando quero pedir informações para o usuário uso o propt guardoando a resposta em uma variavel.  */


 /*Exemplo de declaração de variáveis

definição: const é quando declaramos um valor constante que não pode ser alterado e let quando o valor pode ser alterado 

 const idade = 37
console.log(idade)
idade = 38 


 let idade = 37
console.log(idade)
idade = 38

idade = 84
console.log(idade) */

/* 

/* Exemplo de como imprimir mais de uma coisa no console.log e tipos de variáveis

const nome = prompt("Qual seu nome?")
const idade = prompt ("Qual sua idade")

console.log("Olá, meu nome é", nome, "e tenho", idade, "anos") */


/* Exemplo de concatenar string usando o +

Obs: Tudo o que vem do prompt é uma string

const numero1 = 2
const numero2 = prompt("escreva um número")
const soma = numero1+numero2
console.log(soma)
console.log(numero1)
console.log(numero2)*/

// Exercício 1

/* const nome = "Fernanda"
const sobrenome = "Alfonsi"
const idade = 37
const ehEstudante = true
console.log( "Meu nome é", nome,sobrenome, " e tenho", idade, "anos de idade. Ainda estudo?", ehEstudante) */




const nome = "Fernanda"
let sobrenome = null
const idade = 37
const ehEstudante = true

console.log("nome", typeof nome)
console.log("sobrenome",typeof sobrenome)
console.log("idade", typeof idade)
console.log("status", typeof ehEstudante)

// EXERCÍCIO2 

/* const nomeUsuario = prompt("qual seu nome")
const idadeUsuario = prompt("Qual sua idade")

console.log(typeof  nomeUsuario, typeof idadeUsuario) */


// TRANSFORMANDO OS TIPOS

/* const nomeUsuario = prompt("qual seu nome")
const idadeUsuario = prompt("Qual sua idade")
const idadeUsuarioNumero = Number(idadeUsuario)

const idadeUsuarioString =  idadeUsuarioNumero.toString()

console.log(typeof  nomeUsuario, typeof idadeUsuario, typeof idadeUsuarioNumero, typeof idadeUsuarioString) */

/* const saldo = Number(prompt("qual seu saldo"))
const pix = Number(prompt("pix"))

const soma =saldo + pix
console.log(soma); */