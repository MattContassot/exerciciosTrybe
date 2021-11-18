const resultado = (gabarito, respostasAluno, avaliador) => {
  return avaliador(gabarito, respostasAluno);
}

const avaliador = (gabarito, respostasAluno) => {
  let nota = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === respostasAluno[i]) {
      nota += 1;
    } else if (gabarito[i] !== respostasAluno[i]) {
      if (respostasAluno[i] === 'N.A') {
        nota = nota;
      } else {
        nota -= 0.5;
      }
    }
  }
  return nota;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, avaliador));