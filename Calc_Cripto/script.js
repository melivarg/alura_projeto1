var nomeUsuario = "Meli"
var valorBitcoin = 130
var cotacaoBitcoin = 177184.66
var valorTotal = valorBitcoin * cotacaoBitcoin
valorTotal = valorTotal.toFixed(2)
alert(
  "Olá " +
    nomeUsuario +
    "! " +
    "Esse é o valor total da sua transação:" +
    " R$" +
    valorTotal
)
