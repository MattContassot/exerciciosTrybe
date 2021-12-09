const salarioBruto = 3000;
let aliquotaInss, taxaInss, salarioBase, aliquotaIr, parcelaIr, taxaIr, salarioLiquido;


//Cálculo do INSS

if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
    aliquotaInss = 8;
}

else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
    aliquotaInss = 9;
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = 11;
}

else if (salarioBruto >= 5189.83) {
    aliquotaInss = 100;
}

else {
    console.log("Erro, salário bruto não pode ser negativo");
    //break;
}

taxaInss = (salarioBruto/100*aliquotaInss);

if (taxaInss > 570.88) {
    taxaInss = 570.88;
}

salarioBase = salarioBruto - taxaInss;

//Cálculo Imposto de Renda

if (salarioBase >= 0 && salarioBase <= 1903.98) {
    aliquotaIr = -1;
}

else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIr = 7.5;
    parcelaIr = 142.80;
}

else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIr = 15;
    parcelaIr = 354.80;
}

else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIr = 22.5;
    parcelaIr = 636.13;
}

else if (salarioBase > 4664.68) {
    aliquotaIr = 27.5;
    parcelaIr = 869.36;
}

else {
    console.log("Erro, salário base não pode ser negativo");
    //break;
}

if (aliquotaIr > 0) {
    taxaIr = (salarioBase/100*aliquotaIr)-parcelaIr;
}

else {
    taxaIr = 0;
}

//Cálculo salário líquido

salarioLiquido = salarioBase - taxaIr;
console.log(parseFloat(salarioLiquido.toFixed(2)));