/*RESPOSTAS INTERPRETAÇÃO DE CÓDIGO

1. 
10
10, 5

2.
10, 10, 10

3.
melhor nome para a variável p - horasDeTrabalho
melhor nome para a variavel t - valorPorDia */


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

1. 
let nome
let idade

console.log(typeof nome, typeof idade)

//o tipo impresso foi: undefined pois sem valor não tem como identificar o tipo

let nome = prompt("Olá, qual seu nome?")
let idade = prompt ("Qual sua idade?")

console.log(nome, idade)
console.log(typeof nome, typeof idade)

//Os tipos impressos foram string, pois é o tipo que retorna quando o usuário preenche um formulário.

console.log("Olá", nome, ", você tem", idade, "anos.")

2.
const perguntaBlusa = "Você está de blusa listrada?"
const perguntaOculos = "Você usa óculos?"
const perguntaCabelo = "Você está de cabelo solto?"

const roupa = true
const cabelo = false
const oculos = true

console.log(perguntaBlusa, roupa, perguntaOculos, oculos, perguntaCabelo, cabelo)

3.

let a = 10
let b = 25
c=b
b=a
a=c


console.log("O novo valor de a é", c)
console.log("O novo valor de b é", b)

