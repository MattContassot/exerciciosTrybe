const sorteio = (numero, callback) => {
  const numeroSorteado = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if (callback(numero, numeroSorteado(1, 5))) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

const verificaSorteio = (numero, numeroSorteado) => {
  if (numero === numeroSorteado) {
    return true;
  }
  return false;
}

console.log(sorteio(3, verificaSorteio));