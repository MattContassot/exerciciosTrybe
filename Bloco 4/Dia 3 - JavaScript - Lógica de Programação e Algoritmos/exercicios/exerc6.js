const n = 25;
let resto, verificador;

for (let index = 2; index < n; index++) {
    resto = n%index;
    if (resto === 0) {
        verificador = false;
        break;
    }
    else {
        verificador = true;
    }
}

if (verificador === true) {
    console.log(n, "é primo");
}
else {
    console.log(n, "não é primo");
}