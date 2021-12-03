// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    const alturaRetangulo = Number(prompt("Digite a altura do retângulo"))
    const base = Number(prompt("Digite a largura do retângulo"))
    console.log(base * alturaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
    const anoAtual = Number(prompt(`Em qual ano estamos agra?`))
    const anoNascimento = Number(prompt(`Em qual ano você nasceu?`))
    console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura ** 2)
  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome = prompt("Olá, qual seu nome?")
    const idade = prompt("Qual a sua idae?")
    const email = prompt("Agora digite seu e-mail.")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
    const cor1 = prompt(`Digite uma cor favorita`)
    const cor2 = prompt(`Digite mais uma cor favorita`)
    const cor3 = prompt(`Digite a última cor favorita.`)
    console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
     const quantidade = custo / valorIngresso
     return quantidade

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoString1 = string1.length
  const tamanhoString2 = string2.length  
  const comparacao = tamanhoString1 == tamanhoString2
    return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
    return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
/*     const ultimo = array.lastIndexOf()
    return array[0] = array[ultimo] */
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
    /* const qualAnoAtual = Number(prompt(`Digite o ano atual`))
    const qualAnoNascimento = Number(prompt(`Digite a data de nascimento`))
    const anoEmissao = Number(prompt(`Digite o ano de emissão`))
    const idadeMenor20 = 20 >= (qualAnoAtual - qualAnoNascimento)
    const idadeEntre20e50 = 50 >(qualAnoAtual - qualAnoNascimento) > 20
    const idadeMaior50 = (qualAnoAtual - qualAnoNascimento) > 50
    const renova5 = 10 > (qualAnoAtual - anoEmissao) >= 5
    const renova10 = 20 > (qualAnoAtual - anoEmissao) >= 10
    const renova20 = (qualAnoAtual - anoEmissao) >= 20
    

    return ((idadeMenor20 && renova5) || (idadeEntre20e50 && renova10) || (idadeMaior50 && renova20)) */
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}