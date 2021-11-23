const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((quantidadeDeLetraA, nome) => {
    for (letra in nome) {
      if (nome[letra] === 'a' || nome[letra] === 'A')
      quantidadeDeLetraA += 1;
    }
    return quantidadeDeLetraA;
  }, 0);
}

console.log(containsA());