// EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   //  console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   //  console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)




console.log("Boas vindas ao jogo de Blackjack!")


function retornaPontuacao(valor1, valor2){

   return valor1.valor + valor2.valor
}


if(confirm("Quer iniciar uma nova rodada?")){

   const carta2 = comprarCarta()


   const carta3 = comprarCarta()

   const carta4 = comprarCarta()
   

const pontuacaoJogador = retornaPontuacao(carta, carta2)

const pontuacaoComputador = retornaPontuacao(carta3, carta4)

   console.log(`Usuário - cartas: ${carta.texto} e ${carta2.texto} - pontuacao ${pontuacaoJogador}`)

   console.log(`Computador - cartas: ${carta3.texto} e ${carta4.texto} - pontuação: ${pontuacaoComputador}`)

   if(pontuacaoComputador > pontuacaoJogador){

   console.log(`O computador ganhou!`)

   } else if(pontuacaoJogador > pontuacaoComputador){

   console.log(`O usuário ganhou!`)

   } else {

   console.log(`Empate!`)

   }


} else {
   console.log("O jogo acabou")
}

