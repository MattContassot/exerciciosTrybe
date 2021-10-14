let n = 5;
const asterisco = "*";
const espaco = " ";
let index2 = 2;

for (let index = 1; index <= n; index+= 2) {

    console.log(espaco.repeat(index2), asterisco.repeat(index));
    //console.log(index2, index);
    index2= index2 - 1;
}