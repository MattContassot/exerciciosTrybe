const books = require('./livros');

function longestNamedBook() {
return books.reduce((maiorNome, obras) => maiorNome.name.length > obras.name.length ? maiorNome : obras, {name: ''});
}

console.log(longestNamedBook());