```
let arrayFiltrada = []

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    function contemNumero(item){
      if (item === numeroEscolhido){
        return item
      }
    }
    arrayFiltrada = arrayDeNumeros.filter(contemNumero)
    
    if(arrayFiltrada.length > 0){ 
      return `O número ${numeroEscolhido} aparece ${arrayFiltrada.length}x`
      
    } else{
      return `Número não encontrado`
    }
    }
    ```