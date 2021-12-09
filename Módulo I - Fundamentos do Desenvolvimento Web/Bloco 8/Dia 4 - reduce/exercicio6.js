const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const mediasAlunos = grades.reduce((media, notasAluno, index) => {
    for (nota in notasAluno) {
      media[index] += notasAluno[nota];
    }
    media[index] = media[index] / notasAluno.length;
    return media;
  }, [0, 0, 0]);

  const notasAlunos = students.map((aluno, index) => {
    return {
      name: aluno,
      notas: mediasAlunos[index]
    }
  });

  return notasAlunos;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage());