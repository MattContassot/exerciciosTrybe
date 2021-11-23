const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acumulador, numero) => {
    if (numero.length > 1) {
      numero.forEach((elemento) => acumulador.push(elemento))
    } else {
      acumulador.push(numero[0]);
    }
    return acumulador;
  }, []);
}

console.log(flatten());