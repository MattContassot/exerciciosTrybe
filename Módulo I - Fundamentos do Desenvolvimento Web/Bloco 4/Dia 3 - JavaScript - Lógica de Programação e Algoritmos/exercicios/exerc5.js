let n = 7;
const asterisco = "*";
const espaco = " ";
let index2 = (n-1)/2;
let interior = 1;
let piramide;

console.log(espaco.repeat(index2-1),asterisco);
for (let index = 3; index < n; index+= 2) {
    piramide = espaco.repeat(index2-1)+asterisco+espaco.repeat(interior)+asterisco;
    console.log(piramide);
    if (index2 >= 3) {
        index2= index2 - 1;
    }
    else {
        index2 = 0;
    }
    interior = interior + 2;
}
console.log(asterisco.repeat(n));