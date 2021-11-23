const books = require('./livros');

// console.log(books[0].releaseYear - books[0].author.birthYear);

function averageAge() {
  const somaIdade = books.reduce((idadeMedia, obras) => {
    idadeMedia += (obras.releaseYear - obras.author.birthYear);
    return idadeMedia;
  }, 0);
  return Math.round(somaIdade/books.length);
}

// function averageAge() {
//   return Math.round(books.reduce((idadeMedia, obras) => {
//     idadeMedia += (obras.releaseYear - obras.author.birthYear);
//     idadeMedia = (idadeMedia / 2);
//     return idadeMedia;
//   }, books[0].releaseYear - books[0].author.birthYear));
// }

console.log(averageAge());