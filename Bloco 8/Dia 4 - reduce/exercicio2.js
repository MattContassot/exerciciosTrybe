const books = require('./livros');

function reduceNames() {
  const a = books.reduce((autores, obras) => {
    autores.push(obras.author.name)
    return autores;
  }, []);
  return a.join(', ');
}

console.log(reduceNames());