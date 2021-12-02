//Exercícios de interpretação de código

//1.
//a)
//10
//50

//b)
//o código executaria a funcão, porém não apareceria no console.

//2.
//a)
//A função recebe um texto do usuário, coloca todo ele em letras minúsculas, 
//depois verifica se no texto existe a palavra cenoura.

//b)
//i. eu gosto de cenoura true
//ii. cenoura é bom pra vista true
//iii. cenouras crescem na terra false


//Exercícios de escrita de código

//1.
//a)
const sobreMim = function() {
    console.log("Eu sou Déborah, tenho 31 anos, moro no Rio de Janeiro e sou estudante")
}
sobreMim()

//b)

const sobreUsuario = function(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario) {
  const fraseUsuario = `Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}.`

  return fraseUsuario
}

sobreUsuario("Hugo", 31,"Rio de Janeiro", "Militar")

//2.
//a)
const somaNumeros = (primeiroNumero, segundoNumero) => {
    const soma = primeiroNumero + segundoNumero

    return soma
}

const resultadoSoma = somaNumeros(28, 32)
console.log(resultadoSoma)

//b)
const maiorOuIgual = (numero1, numero2) => {
    const comparacao = numero1 >= numero2
    return comparacao
}

maiorOuIgual(10,3)

//c)
const ePar = (numero) => {

    const eOuNaoPar = numero % 2 === 0
    return eOuNaoPar
}

ePar(54)

//d)
const string = (conjuntoDeCaracteres) => {

    console.log(conjuntoDeCaracteres.length, conjuntoDeCaracteres.toUpperCase())

}

string("Olá, me chamo Déborah")

//3.
const soma = (numeroUsuario1, numeroUsuario2) => {
    const resultadoSomaUsuario = numeroUsuario1 + numeroUsuario2
    return resultadoSomaUsuario
}
const diferenca = (numeroUsuario1, numeroUsuario2) => {
    const resultadoDifUsuario = numeroUsuario1 - numeroUsuario2
    return resultadoDifUsuario
}
const multiplicacao = (numeroUsuario1, numeroUsuario2) => {
    const resultadoMultiUsuario = numeroUsuario1 * numeroUsuario2
    return resultadoMultiUsuario
}
const divisao = (numeroUsuario1, numeroUsuario2) => {
    const resultadoDivUsuario = numeroUsuario1 / numeroUsuario2
    return resultadoDivUsuario
}

const numeroUsuario1 = Number(prompt("Digite um número."))
const numeroUsuario2 = Number(prompt("Digite mais um número"))

console.log("Soma:", soma(numeroUsuario1, numeroUsuario2))
console.log("Diferença:", diferenca(numeroUsuario1, numeroUsuario2))
console.log("Multiplicação:", multiplicacao(numeroUsuario1, numeroUsuario2))
console.log("Divisão:", divisao(numeroUsuario1, numeroUsuario2))