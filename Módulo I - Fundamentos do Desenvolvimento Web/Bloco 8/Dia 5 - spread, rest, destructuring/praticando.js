const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = [...carros, [...motos]];

// console.log(veiculos);

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Laranja', 'Banana', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Refrigerante de guaraná', 'Suco de laranja', 'Gelo'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

// console.log(fruitSalad(specialFruit, additionalItens));

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

const [saudacao] = saudacoes;

// console.log(saudacao);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida);