const { typeOf } = require("react-is");

function encode(string) {
    let stringCortada = string.split('');
    let stringSaida = [];
    for (let i = 0; i < stringCortada.length; i += 1) {
      if (stringCortada[i] === 'a') {
        stringSaida.push('1');
      } else if (stringCortada[i] === 'e') {
        stringSaida.push('2');
      } else if (stringCortada[i] === 'i') {
        stringSaida.push('3');
      } else if (stringCortada[i] === 'o') {
        stringSaida.push('4');
      } else if (stringCortada[i] === 'u') {
        stringSaida.push('5');
      } else {
        stringSaida.push(stringCortada[i]);
      }
    }
    return stringSaida.join('');
  }

  function decode(string) {
    let stringCortada = string.split('');
    let stringSaida = [];
    for (let i = 0; i < stringCortada.length; i += 1) {
      if (stringCortada[i] === '1') {
        stringSaida.push('a');
      } else if (stringCortada[i] === '2') {
        stringSaida.push('e');
      } else if (stringCortada[i] === '3') {
        stringSaida.push('i');
      } else if (stringCortada[i] === '4') {
        stringSaida.push('o');
      } else if (stringCortada[i] === '5') {
        stringSaida.push('u');
      } else {
        stringSaida.push(stringCortada[i]);
      }
    }
    return stringSaida.join('');
  }

  module.exports.encode = encode;
  module.exports.decode = decode;