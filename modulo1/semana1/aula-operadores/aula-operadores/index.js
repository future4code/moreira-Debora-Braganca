// ------------------- DESAFIO OPERADORES ---------------------

//1.
let tempKelvin = 0
let tempFahr = 0
let tempCelsius = 0


//a)
tempFahr = 77
console.log((tempFahr - 32) * (5/9) + 237.15, "K")

//b)
tempCelsius = 80
console.log((tempCelsius) * (9/5) + 32, "ºF")

//c)
tempCelsius = 30
console.log((tempCelsius) * (9/5) + 32, "ºF", tempCelsius + 273.15, "K")

//d)
tempCelsius = Number(prompt("Insira a temperatura em Celsius que deseja converter:"))
console.log((tempCelsius) * (9/5) + 32, "ºF", tempCelsius + 273.15, "K")

//2.
const quilowatts = Number(prompt("Quantos quilowatts-hora sua residência consumiu?"))
const valor = quilowatts * 0.05

//a)
console.log("O valor a ser pago é: R$", valor)

//b)
const valorDoDesconto = Number(prompt("Qual a porcentagem de desconto?"))
console.log("O valor a ser pago é: R$", valor - (valor * 0.15))

//3.
let lb = 0
let kg = 0
let oz = 0
let mi = 0
let ft = 0
let gal = 0
let xic = 0

//a)
lb = 20
console.log(lb,"lb equivalem a ", lb * 0.454, "kg")

//b)
oz = 10.5
console.log(oz,"oz equivalem a ", oz / 35.274, "kg")

//c)
mi = 100
console.log(mi,"mi equivalem a ", mi * 1609.34, "m")

//d)
ft = 50
console.log(ft,"ft equivalem a ", ft / 3.281, "kg")

//e)
gal = 103.56
console.log(gal,"gal equivalem a ", gal * 3.785, "l")

//f)
xic = 450
console.log(xic,"xic equivalem a ", (xic * 6) / 25, "l")

//g)
mi = Number(prompt("Digite o número de milhas para realizar a conversão"))
console.log(mi,"mi equivalem a ", mi * 1609.34, "m")