//Exercício 1
//a) Utilizando o process.argv

//b)
const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log("\x1b[35m",`Olá, ${nome}! Você tem ${idade} anos.`)

//c)
const novaIdade = idade + 7
console.log("\x1b[33m",`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`)
