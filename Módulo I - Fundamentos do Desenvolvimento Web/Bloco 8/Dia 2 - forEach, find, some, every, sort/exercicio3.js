const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'Nome do Autor',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'Nome do Livro',
  releaseYear: 1991,
};

function getNamedBook() {
  let alvoObjeto = books.find((livro) => livro.name.length === 26);
  let autorObjeto = alvoObjeto.author;

  let autorArray = Object.entries(autorObjeto);
  autorArray.sort();
  autorObjeto = Object.fromEntries(autorArray);

  alvoObjeto.author = autorObjeto;

  let alvoArray = Object.entries(alvoObjeto);
  alvoArray.sort();
  alvoObjeto = Object.fromEntries(alvoArray);

  return alvoObjeto;
}

console.log(expectedResult);
console.log(getNamedBook());