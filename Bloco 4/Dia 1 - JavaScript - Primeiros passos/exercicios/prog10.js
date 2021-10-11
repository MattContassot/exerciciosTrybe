const custoProduto = 156;
const valorVenda = 562;

const imposto = custoProduto/100*20;

let custoFinal = custoProduto + imposto;
let lucro = valorVenda - custoFinal;

if (custoProduto < 0 || valorVenda < 0 || imposto < 0 || custoFinal < 0 || lucro < 0) {
    console.log("Erro, tente outros valores");
}
else {
    console.log(lucro);
}