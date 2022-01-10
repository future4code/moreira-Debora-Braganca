````
function calculaPrecoTotal(quantidade) {
let custoDaCompra = 0
if(quantidade < 12){
  custoDaCompra = quantidade * 1.30
} else if(quantidade => 12){
  custoDaCompra = quantidade * 1
}
return custoDaCompra
```