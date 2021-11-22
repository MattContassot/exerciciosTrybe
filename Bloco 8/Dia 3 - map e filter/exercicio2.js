const books = require("./template");

function nameAndAge() {
  const autores = books.map((obra) => obra.author.name);
  const idades = books.map((obra) => obra.releaseYear - obra.author.birthYear);
  let nomeIdade = [];
  autores.forEach((elemento, index) => nomeIdade.push({age: idades[index], author: autores[index]}));
  nomeIdade.sort((a,b) => a.age - b.age);

  return nomeIdade;
}

console.log(nameAndAge());