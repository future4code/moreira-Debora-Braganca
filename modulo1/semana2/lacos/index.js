//Exercícios de interpretação de código

//1.
//Ele está imprimindo números enquanto os números forem menores que 5,
//a partir do momento que os números passam a ser iguais ou maiores que 5
//ele para de imprimir.
//Resultado no console:
//0
//1
//2
//3
//4

//2.
//a)
//19
//21
//23
//25
//27
//30

//b)
//Sim,
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let indice = 0
    for (let numero of lista){
    console.log(numero, "índice", indice)
    indice ++
}

//3.
//*
//**
//***
//****



//Exercícios de escrita de código
//1.
const quantosPets = Number(prompt("Quantos bichinhos de estimação você tem?"))
//a)
if(quantosPets === 0){
    console.log("Que pena! Você pode adotar um pet!")
}
//b)
let nomeDosPets = []
for(let bichinhos = 0; bichinhos < quantosPets; bichinhos++){
    nomeDosPets[bichinhos] = prompt("Digite o nome do(s) seu(s) pet(s), um de cada vez")   
}
//c)
console.log(nomeDosPets)

//2.
const arrayOriginal = [14, 67, 91, 12, 20, 35, 40, 3, 8]

//a)
function imprimeValores(array){

  for(let item of array){
    
    console.log(item)
 }
}
imprimeValores(arrayOriginal)

//b)
function imprimeValoresDivididosPorDez(array){

    for(let item of array){
    console.log(item / 10)
  }
} 
imprimeValoresDivididosPorDez(arrayOriginal)


//c)
function retornaNumerosPares(array){
let numerosPares = []
    for(item of array){

    if(item % 2 === 0){
    numerosPares.push(item)
    }
  }
  console.log(numerosPares)
}
retornaNumerosPares(arrayOriginal)


//d)
let novarray = []
for(let indice = 0; indice < arrayOriginal.length; indice ++){
    novarray[indice] = `O elemento do índice ${indice} é ${arrayOriginal[indice].toString()}`
}
console.log(novarray)

//e)
function retornaMaiorNumero(array){
    let maiorNumero = 0
  
    for(let item of array){
  
      if(item > maiorNumero){
        maiorNumero = item
      }
    }
    return maiorNumero
  }

  function retornaMenorNumero(array){
    let menorNumero = arrayOriginal[0]
  
    for(let item of array){
  
      if(item < menorNumero){
        menorNumero = item
      }
    }
    return menorNumero
  }
  console.log(`O maior número é ${retornaMaiorNumero(arrayOriginal)} e o menor número é ${retornaMenorNumero(arrayOriginal)}.`)

  //Desafios
  //1.
  //a)
  numeroPrimeiroJogador = Number(prompt("Digite um número"))
  console.log("Vamos jogar!")
  
  //b)
  let tentativaSegundoJogador = Number(prompt("Digite o número que você acha que o primeiro jogador pensou."))
  
  let quantidadeDeTentativas = []


    while (tentativaSegundoJogador !== numeroPrimeiroJogador){
    if(numeroPrimeiroJogador > tentativaSegundoJogador){
    
    console.log(`o número chutado foi: ${tentativaSegundoJogador}`)
    console.log(`Errrrrrrrou, o número escolhido é maior`)

    quantidadeDeTentativas.push(tentativaSegundoJogador)
    }
    
    if(numeroPrimeiroJogador < tentativaSegundoJogador){
      
      console.log(`o número chutado foi: ${tentativaSegundoJogador}`)
      console.log(`Errrrrrrrou, o número escolhido é menor`)
      
      quantidadeDeTentativas.push(tentativaSegundoJogador)
    }
    tentativaSegundoJogador = Number(prompt("Digite o número que você acha que o primeiro jogador pensou."))

}
//c)
    if(tentativaSegundoJogador === numeroPrimeiroJogador){

      console.log("Acertou!!!")
}

    
    console.log(`O número de tentativas foi: ${quantidadeDeTentativas.length + 1} `)



//2.

let numeroAleatorio = Math.floor((Math.random() * 100) + 1)
console.log("Vamos jogar!")


let tentativasDoJogador = Number(prompt("Digite o número que você acha que o computador selecionou."))

let numeroDeTentativas = []

  while (tentativasDoJogador !== numeroAleatorio){
  
  if(numeroAleatorio > tentativasDoJogador){
  
  console.log(`o número chutado foi: ${tentativasDoJogador}`)
  console.log(`Errrrrrrrou, o número escolhido é maior`)

  numeroDeTentativas.push(tentativasDoJogador)

  }
  
  if(numeroAleatorio < tentativasDoJogador){
    
    console.log(`o número chutado foi: ${tentativasDoJogador}`)
    console.log(`Errrrrrrrou, o número escolhido é menor`)

    numeroDeTentativas.push(tentativasDoJogador)

  }
  
  tentativasDoJogador = Number(prompt("Digite o número que você acha que o computador selecionou"))
  
}
  if(numeroAleatorio === tentativasDoJogador){

    console.log("Acertou!!!")
}

  
  console.log(`O número de tentativas foi: ${numeroDeTentativas.length + 1} `)

  
