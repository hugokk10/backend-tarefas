//--Dados do pedido--

let nomeCliente = "João Carlos";
let tipoCliente = "premium";

let nomeProduto = "Teclado Mecânico";
let precoProduto = 180.;
let estoque = 10;
let quantidade =5;

//tem estoque suficiente?
let estoqueOK = quantidadedepedido <= estoque;

if (!estoque) {
    console.log("pedido RECUSADO - estoque insuficiente")
}