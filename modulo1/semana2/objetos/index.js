//Exercícios de interpretação de código
//1.
//a)
//Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo", horario: "14h"

//2.
//a)
//nome: Juca
//idade: 3
//raca: SRD
//nome: Juba
//idade: 3
//raca: SRD
////nome: Jubo
//idade: 3
//raca: SRD
//b)
//Ela copia as informações de outro objeto sem alterar o original, permitindo
//alterar sem perder as informações originais.

//3.
//a)
//false
//undefined
//b)false pois a função retorna determinada propriedade de um objeto.
//undefined pois a propriedade "altura" não está no objeto pessoa.

//Exercícios de escrita de código
//1.
//a)
const pessoa = {
    nome: "Carlos Eduardo",
    apelidos: ["Carlinhos", "Cadu", "Duda"]
}

const frase = (pessoa) => {

    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

}
frase(pessoa)

//b)
const novosApelidos = {
    ...pessoa,
    apelidos: ["Caco", "Dudu", "Dado"]
}
frase(novosApelidos)

//2.
//a)
objeto1 = {
    nome: "Déborah",
    idade: 31,
    profissao: "Fotógrafa"

}

objeto2 = {
    nome: "Hugo",
    idade: 30,
    profissao: "Militar"
}
//b)
const funcao = (objeto) => {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}

console.log(funcao(objeto1))
console.log(funcao(objeto2))

//3.
//a)
let carrinho = []
//b)
const fruta1 = {
    nome: "Laranja Pêra",
    disponibilidade: true
}
const fruta2 = {
    nome: "Banana Prata",
    disponibilidade: true
}
const fruta3 = {
    nome: "Maçã Fuji",
    disponibilidade: true
}
//c)
const frutaNoCarrinho = (fruta) => {
     carrinho.push(fruta)
     return carrinho
}
console.log(frutaNoCarrinho(fruta1))
console.log(frutaNoCarrinho(fruta2))
console.log(frutaNoCarrinho(fruta3))
//d)
console.log(carrinho)

//Desafios

//1.
const sobreUsuario = (objetoUsuario) => {
    const usuario = {
        nome: prompt(`Qual seu nome?`),
        idade: Number(prompt(`Qual sua idade?`)),
        profissao: prompt(`Qual sua profissão?`)
    }
    console.log(usuario)
}
sobreUsuario()

//2.
const filmes = () => {
     const filme1 = {
         anoDeLancamento: 2021,
         nome: "Alerta Vermelho"
     }
     const filme2 = {
         anoDeLancamento: 2012,
         nome: "Um Homem De Sorte"
    }

    const mensagem = `O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento < filme2.anoDeLancamento}
O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoDeLancamento === filme2.anoDeLancamento}`
    return mensagem
}

//3.
const controleEstoque = (fruta) => {
    estoque = {
        ...fruta, 
        disponibilidade: ! fruta.disponibilidade
    }
    return estoque
}
