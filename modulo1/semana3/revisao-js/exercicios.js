// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
    function compararNumeros(a, b) {
        return a - b;
      }
   
    return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
let arrayDePares = []
    
    for (valor of array){

        if(valor % 2 ===0){
         arrayDePares.push(valor)
            }
        }
        return arrayDePares
    }
    

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
let arrayDeParesAoQuadrado = []
    
    for (valor of array){

        if(valor % 2 ===0){

        
        arrayDeParesAoQuadrado.push(valor * valor)
            }
        }
        return arrayDeParesAoQuadrado
    }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let maiorNumero = 0

    for(item of array){
        if(item > maiorNumero){
            maiorNumero = item
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero = 0
let menorNumero = 0

const retornaMaiorNumero = (numero1, numero2) => {
if(numero1 > numero2){
    return numero1
} else if (numero2 > numero1){
    return numero2
} else {
    return numero1 }
}
maiorNumero = retornaMaiorNumero(num1, num2)

const retornaMenorNumero = (numero1, numero2) => {
    if(numero1 < numero2){
        return numero1
    } else if (numero2 < numero1){
        return numero2
    } else {
        return numero1
    }
    }
menorNumero = retornaMenorNumero(num1, num2)

const retornaMaiorDivisivelPorMenor = (numero1, numero2) => {
if(numero1 % numero2 === 0){
    return true
} else {
    return false
}
}

const retornaDiferenca = (numero1, numero2) => {
    const diferenca = numero1 - numero2
    return diferenca
}

const objeto = {maiorNumero: maiorNumero,
maiorDivisivelPorMenor: retornaMaiorDivisivelPorMenor(maiorNumero, menorNumero),
diferenca: retornaDiferenca(maiorNumero,menorNumero)}

return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = []
   let numero = 0
   
   while (numerosPares.length < n){

       if(numero % 2 === 0){
        numerosPares.push(numero)
       }
   
    numero ++
   }
   return numerosPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        return "Escaleno"
    } else {
        return "Isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   let arraySegundoMaiorESegundoMenor = [] 
    function compararNumeros(a, b) {
        return a - b;
      }
      arraySegundoMaiorESegundoMenor.push(array.sort(compararNumeros)[array.length - 2])
      arraySegundoMaiorESegundoMenor.push(array.sort(compararNumeros)[1])

    return arraySegundoMaiorESegundoMenor


}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    let atores = ""
        for(let i = 1; i < filme.atores.length; i++){
           atores = atores + ', ' + filme.atores[i]
           
     }

     return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}${atores}.`

    }
    


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
    pessoa.nome = 'ANÔNIMO'

    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    
    const verificaAutorizacao = (pessoa) => {
    if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
        return pessoa
    }
}
    
  return pessoas.filter(verificaAutorizacao)
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   
    const verificaNaoAutorizacao = (pessoa) => {
        if(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60){
            return pessoa
        }
    }
   return pessoas.filter(verificaNaoAutorizacao)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   
    const reducer = (previousValue, currentValue) => previousValue + currentValue

    for (cliente of contas){
        if(cliente.compras.length > 0){

        const totalDeCompras = cliente.compras.reduce(reducer)

        cliente.saldoTotal = cliente.saldoTotal - totalDeCompras
        cliente.compras = []
    }
}
return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
    consultas.sort(function (x, y) {
        let a = x.nome
        let b = y.nome
        if(a > b){return 1}
        if(a < b){return -1}
        else{return 0};
      })

      return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {


}