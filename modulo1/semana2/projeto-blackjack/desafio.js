
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)


    console.log("Boas vindas ao jogo de Blackjack!")


    function retornaPontuacao(valor1, valor2){
    
       return valor1.valor + valor2.valor
    }
    
    let cartasJogadorTexto = ""
    let cartasComputadorTexto = ""


    if(confirm("Quer iniciar uma nova rodada?")){
    
       const carta2 = comprarCarta()
       const carta3 = comprarCarta()
       const carta4 = comprarCarta()
       
    
    let pontuacaoJogador = retornaPontuacao(carta, carta2)
    
    let pontuacaoComputador = retornaPontuacao(carta3, carta4)
    
       console.log(`Usuário - cartas: ${carta.texto} e ${carta2.texto} - pontuacao ${pontuacaoJogador}`)
    
       console.log(`Computador - cartas: ${carta3.texto}`)

       if(carta.texto.includes("A") && carta2.texto.includes("A") || carta3.texto.includes("A") && carta4.texto.includes("A")){

         const novaCarta1 = comprarCarta()
         const novaCarta2 = comprarCarta()
         const novaCarta3 = comprarCarta()
         const novaCarta4 = comprarCarta()

         pontuacaoJogador = retornaPontuacao(novaCarta1, novaCarta2)
         pontuacaoComputador = retornaPontuacao(novaCarta3, novaCarta4)

         console.log(`Usuário - cartas: ${novaCarta1.texto} e ${novaCarta2.texto} - pontuacao ${pontuacaoJogador}`)
    
         console.log(`Computador - carta: ${carta3.texto}`)

       } else {

         while (pontuacaoJogador < 21 && confirm(`Suas cartas são ${carta.texto} e ${carta2.texto}. A carta revelada 
         do computador é ${carta3.texto}. \n Deseja comprar mais uma carta?`)){

            const maisUmaCarta = comprarCarta()

            pontuacaoJogador = pontuacaoJogador + maisUmaCarta.valor

            cartasJogadorTexto = `${carta.texto} ${carta2.texto} ${maisUmaCarta.texto}`

            console.log(`Suas cartas são ${carta.texto} ${carta2.texto} ${maisUmaCarta.texto} - Pontuação: ${pontuacaoJogador}.
A carta revelada do computador é ${carta3.texto}.`)

}
 
  }    while (pontuacaoComputador < pontuacaoJogador){

         const maisUmaCartaComputador = comprarCarta()

         pontuacaoComputador = pontuacaoComputador + maisUmaCartaComputador.valor

         cartasComputadorTexto = `${carta3.texto} ${carta4.texto} ${maisUmaCartaComputador.texto}`
         
         
         }

         if (pontuacaoComputador > 21 && pontuacaoJogador <= 21 ){
            
            console.log(`As cartas do computador são: ${carta3.texto} ${carta4.texto}`)
            console.log("O Usuário ganhou!")
         
         }
         
         else if (pontuacaoJogador > 21){
         
            console.log("O computador ganhou!")
         
         } else if (pontuacaoJogador === pontuacaoComputador){
            
            console.log(`As cartas do computador são: ${carta3.texto} ${carta4.texto}`)
            console.log("Empate")
         
         } else if(pontuacaoComputador > pontuacaoJogador){
            
            
            console.log(`As cartas do computador são: ${carta3.texto} ${carta4.texto}`)
            console.log("O computador ganhou!")

         } else if (pontuacaoJogador > pontuacaoComputador && pontuacaoJogador < 21) {

            console.log(`O usuário ganhou!`)

         }

     } else {
   console.log("O jogo acabou") }