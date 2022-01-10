```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const comissaoFixa = 100 * qtdeCarrosVendidos
 const comissaoPorcentagem = valorTotalVendas * 0.05
 const comissaoTotal = comissaoFixa + comissaoPorcentagem
 
 const salario = 2000 + comissaoTotal
 return salario

}```