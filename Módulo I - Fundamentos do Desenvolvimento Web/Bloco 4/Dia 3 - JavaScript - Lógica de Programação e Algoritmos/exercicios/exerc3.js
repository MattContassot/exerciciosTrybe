let n = 5;
const asterisco = "*";
const espaco = " ";
let index2 = n;

for (let index = 1; index <= n; index++) {
    index2= index2 - 1;
    console.log(espaco.repeat(index2), asterisco.repeat(index));
    //console.log(index2, index);
}