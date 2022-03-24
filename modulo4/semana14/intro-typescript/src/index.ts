//Exercício 1

function checaTriangulo(a: number, b: number, c: number) :string{
    if (a !== b && b !== c){
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

// Exercício 2

function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string):string[] {
    const arrayDeCores: string[] = []

    arrayDeCores.push(cor1,cor2,cor3) 
    
    return arrayDeCores
}

//Exercício 3
function checaAnoBissexto(ano: number) :boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }

//Exercício 4
function comparaDoisNumeros(num1: number, num2: number): number {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }

//Exercício 5
function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ):string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
   }

//Exercício 6

function comparaNumeros(num1: number, num2: number):void {
  console.log(`Soma: ${num1 + num2}`)
  console.log(`Subtração: ${num1 - num2}`)
  console.log(`Multiplicação: ${num1 * num2}`)
  if(num1 > num2){
    console.log(`O maior número é ${num1}`)
  } else if (num2 > num1) {
    console.log(`O maior número é ${num2}`)
  }
}

//Exercício 7

function retornaRna (dna: string):string {
  const dna2:string = dna.replace("A", "U")
  const dna3 = dna2.replace("T", "A")
  const dna4 = dna3.replace("C", "D")
  const dna5 = dna4.replace("G", "J")
  const dna6 = dna5.replace("D", "G")
  const dna7 = dna6.replace("J", "C")

  return dna7
}

//Exercício 8

function retornaReverso(palavra: string):string{
  const novaPalavra:string = palavra.split("").reverse().join("");
  return novaPalavra
}

//Exercício 9

