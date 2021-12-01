//Exercícios de interpretação de código

//1.
//a. undefined

//b. null

//c. 11

//d. 3

//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//f. 9

//2.
//SUBI NUM ÔNIBUS EM MIRROCOS, 27


//Ecercícios de escrita de código
//1.

const nomeUsuario = prompt("Olá, qual seu nome?")
const emailUsuario = prompt("Digite seu e-mail")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)

//2.
let comidasPreferidas = ["Strogonoff", "Churrasco", "Cookies", "Brownie", "Chocolate"]
//a)
console.log(comidasPreferidas)
//b)
console.log("Essas são minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
//c)
const comidaPreferidaUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas[1] = comidaPreferidaUsuario
console.log(comidasPreferidas)
/* comidasPreferidas = ["Strogonoff", comidaPreferidaUsuario, "Cookies", "Brownie", "Chocolate"]
console.log(comidasPreferidas) */


//3.
//a)
let listaDeTarefas = []
//b)
const tarefa1 = prompt("Digite uma tarefa")
const tarefa2 = prompt("Digite mais uma tarefa")
const tarefa3 = prompt("Digite mais uma tarefa")
//c)
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
//d)
let numeroTarefa = Number(prompt("Digite o índice da tarefa que você já realizou"))
//e)
listaDeTarefas.splice(numeroTarefa, 1)
//f)
console.log(listaDeTarefas)