const books = require("./template");

function formatedBookNames() {
  return books.map((obra) => obra.name);
}

console.log(formatedBookNames());