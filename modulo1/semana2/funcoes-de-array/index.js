//Exercícios da Aula Funções de Array

//Exercícios de interpretação de código

//1.
//a)[{ nome: "Amanda Rangel", apelido: "Mandi" }, 0, usuarios,
//  { nome: "Laís Petra", apelido: "Laura" }, 1, usuarios
//  { nome: "Letícia Chijo", apelido: "Chijo" }, 2, usuarios]


//2.
//a)['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//3.
//a)['Mandi', 'Laura']


//Exercícios de escrita de código

//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a)
 function retornaNomesDoguinhos (item){
     return item.nome
 }

 const listaDeNomes = pets.map(retornaNomesDoguinhos)
 console.log(listaDeNomes)

 //b)
 function retornaCachorrosSalsicha(item){
     return item.raca === "Salsicha"
 }

 const cachorrosSalsicha = pets.filter(retornaCachorrosSalsicha)
 console.log(cachorrosSalsicha)

 //c)
 function retornaCachorrosPoodle(item){
     return item.raca === "Poodle"
 }

const cachorrosPoodle = pets.filter(retornaCachorrosPoodle)
console.log(cachorrosPoodle)

function imprimeMensagem(item){
    return `Você ganhou um cupom de desconto de 10% para tosar o(a) ${item.nome}`
}

const frasePoodles = cachorrosPoodle.map(imprimeMensagem)
console.log(frasePoodles)

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)
 function retornaNomesProdutos (item){
    return item.nome
}

const listaDeNomesDosProdutos = produtos.map(retornaNomesProdutos)
console.log(listaDeNomesDosProdutos)


//b)
function retornaDesconto (item){
    const novoObjeto = {nome: item.nome,
    preco: item.preco * 0.95}
    
    return novoObjeto
}
const produtosComDesconto = produtos.map(retornaDesconto)
console.log(produtosComDesconto)


//c)
function retornaBebidas(item){
    return item.categoria === "Bebidas"
}

const bebidas = produtos.filter(retornaBebidas)
console.log(bebidas)


//d)
function retornaYpe(item){
    return item.nome.includes("Ypê")
}


const produtosYpe = produtos.filter(retornaYpe)
console.log(produtosYpe)


//e)
function retornaMensagemProdutos(item){
    return `Compre ${item.nome} por ${item.preco}`
}

const fraseProdutos = produtosYpe.map(retornaMensagemProdutos)
console.log(fraseProdutos)


//Desafios
//1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]


 //a)
 function retornaNomesPokemons (item){
    return item.nome
}

const nomesPokemons = pokemons.map(retornaNomesPokemons)
const pokemonsOrdemAlfabetica = nomesPokemons.sort()
console.log(pokemonsOrdemAlfabetica)

//b)
function retornaTiposPokemons (item){
    return item.tipo
}

const tiposPokemons = pokemons.map(retornaTiposPokemons)
const tiposSemRepeticao = [...new Set(tiposPokemons)]
console.log(tiposSemRepeticao)