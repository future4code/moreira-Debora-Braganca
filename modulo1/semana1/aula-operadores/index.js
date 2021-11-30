console.log("Bom dia Moreira!")

//-------------------- EXEMPLOS OPERADORES ARITMÉTICOS -----------------------------

const valor1 = 10
const valor2 = 20
const valor3 = 40
const valor4 = 80
const valor5 = 3

let resultado = 0

//soma
resultado = valor1 + valor2
console.log("Resultado soma:", resultado)

//subtração
resultado = valor2 - valor3
console.log("Resultado subtração:", resultado)

//Multiplicação
resultado = valor3 * valor1
console.log("Resultado multiplicação:", resultado)

//Divisão
resultado = valor4 / valor3
console.log("Resuldado divisão", resultado)


//Resto da Divisão (módulo)
resultado = valor2 % valor5
console.log("Resultado módulo:", resultado)

// Conta Bancária (soma: incremento, subtração: decremento)
let saldo = 100
const salario = 1000
//saldo = saldo + salario
saldo += salario

console.log("O seu saldo é de:", saldo)


//EXERCÍCIO 1 - Faça as seguintes operações usando o computador:

//a. Somar 3 com 4

const resultadoA = 3 + 4
console.log("Ex1 item a:", resultadoA)

//b. Multiplicar 3 com 5 e dividir o resultado por 2

const resultadoB = 3 * 5 / 2
console.log("Ex1 item b:", resultadoB)

//c. Subtrair 5 de 4 e multiplicar o resultado por -1 => 1

const resultadoC = (4 -5) * -1
console.log("Ex1 item c:", resultadoC)

//d. Determinar o resto da divisão de 234 por 5

const resultadoD = 234 % 5
console.log("Ex1 item d:", resultadoD)


//-------------------- EXEMPLOS COMPARADORES -----------------------------

let comparacao

// = -> Atribuir valores para as variáveis
// == -> Comparador conteúdo
// === -> Comparador conteúdo e o tipo (mais recomendado)


// Igualdade (===)
comparacao = 1 === 1      //true
console.log("Comparação 1", comparacao)

comparacao = 1 === "1"      //false
console.log("Comparação 2", comparacao)

comparacao = 1 === 5     //false
console.log("Comparação 3", comparacao)


// Diferença (!==)
comparacao = 1 !== 1     //false
console.log("Comparação 4", comparacao)

comparacao = 1 !== "1"     //true
console.log("Comparação 5", comparacao)

comparacao = "Bom dia" !== "bom dia"     //true
console.log("Comparação 6", comparacao)


// Maior e Maioe ou igual (> ou >=)
comparacao = 5 > 6     //false
console.log("Comparação 7", comparacao)

comparacao = 5 > 5     //false
console.log("Comparação 8", comparacao)

comparacao = 5 >= 6     //false
console.log("Comparação 9", comparacao)

comparacao = 5 >= 5     //true
console.log("Comparação 10", comparacao)


// Menor e Menor ou igual (< ou <=)

comparacao = 5 <= 6     //true
console.log("Comparação 11", comparacao)



//EXERCÍCIO 2 - Crie duas variáveis que guardem dois números.
//Imprima na tela as seguintes mensagens:
const num1 = 10
const num2 = 5

//a. O primeiro número é igual ao segundo? True/False
console.log("O primeiro número é igual ao segundo?", num1 === num2)

//b. O primeiro número é diferente do segundo? True/False
console.log("O primeiro número é diferente do segundo?", num1 !== num2)

//c. O primeiro número é maior que o segundo? True/False
console.log("O primeiro número é maior do que o segundo?", num1 > num2)

//d. O primeiro número é menor que o segundo? True/False
console.log("O primeiro número é menor do que o segundo?", num1 < num2)


//---------------- EXEMPLOS OPERADORES LÓGICOS -------------------------

// Operador E: && só retorna true quanto TUDO for true
// Operador Ou : || só retorna false quando TUDO for false
// Operador Não/Negação: ! inverte o valor da variável


//Exemplos operador && (E ou AND)
const estaSol = true
const estarDeFerias = true

const podeIrPraPraia = estaSol && estarDeFerias
console.log("Posso ir pra praia?", podeIrPraPraia)

const comeArroz = true
const comeFrango = true
const comeUvaPassa = false

const gostaDoPrato = comeArroz && comeFrango && comeUvaPassa
console.log("Gostou do prato?", gostaDoPrato)


//EXERCÍCIO 3 - Antes de começar, crie 3 variáveis: a, b e c. Atribua os valores true, false e true, respectivamente

const a = true
const b = false
const c = true

//a. Realize a operação: a && b
console.log("Ex3 item a:", a && b)

//b. Realize a operação: b && c
console.log("Ex3 item b:", b && c)

//c. Realize a operação; a && c
console.log("Ex3 item c:", a && c)

//d. Realize a operação: a && b && c
console.log("Ex3 item d:", a && b && c)

//Exemplos operador || (Ou ou OR)

const estouEmCasa = false
const estouComVontadeDeDoce = false
const estouTriste = false

const possoComerChocolate = estouEmCasa || estouComVontadeDeDoce || estouTriste

console.log("Posso comer chocolate?", possoComerChocolate)

//EXERCÍCIO 4 - Antes de começar, crie 3 variáveis: a, b e c. Atribua os valores true, false e true, respectivamente
// mesmas variáveis do exercício 3

//a. Realize a operação: a || b
console.log("Ex4 item a:", a || b)

//b. Realize a operação: b || c
console.log("Ex4 item b:", b || c)

//c. Realize a operação; a || c
console.log("Ex4 item c:", a || c)

//d. Realize a operação: a || b || c
console.log("Ex4 item d:", a || b || c)

//Exemplos operador ! (Não ou NOT)

const taChovendo = false
console.log("Tá chovendo?", !taChovendo)

//EXERCÍCIO 5 - Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:
//O nome da pessoa com um olá
//A idade da pessoa
//Um true ou false que diz se ela é maior de idade
//Quantos anos ela terá em 2050

const nome = prompt("Qual seu nome?")
const anoNascimento = Number(prompt("Em que ano você nasceu?"))
const anoAtual = Number(prompt("Em que ano estamos agora?"))
const idade = anoAtual - anoNascimento

console.log("Olá ", nome)

console.log("Você tem", anoAtual - anoNascimento, "anos")

console.log("É maior de idade?", idade >= 18)

console.log("Sua idade em 2050 será:", 2050 - anoNascimento, "anos")