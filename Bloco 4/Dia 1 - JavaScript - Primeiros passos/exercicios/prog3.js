const a = 230;
const b = 200;
const c = 35;

if (a > b && a > c) {
    console.log(a, "é maior");
}

else if (b > a && b > c) {
    console.log(b, "é maior");
}

else if (c > a && c > b) {
    console.log(c, "é maior");
}

else {
    console.log("Os números são iguais");
}