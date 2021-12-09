const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function addTurno(objeto, chave, valor) {
    objeto[chave] = valor;
    return objeto;
}

function keysList(objeto) {
    return console.log(Object.keys(objeto))
}

function objectSize(objeto) {
    return console.log(Object.keys(objeto).length)
}

function valuesList(objeto) {
    return console.log(Object.values(objeto))
}

const allLessons = {
    lesson1 : Object.assign(lesson1),
    lesson2 : Object.assign(lesson2),
    lesson3 : Object.assign(lesson3),
};

function alunosTotal() {
    let soma = 0;
    for (index in allLessons) {
        soma = soma + Number(eval(`allLessons.${index}.numeroEstudantes`));
    }
    console.log(soma)
}

function getValueByNumber(aula, pos) {
    return Object.values(aula)[pos]
}

function verifyPair(aula, chave, valor) {
    for (let chaves in aula) {
        if (chaves == chave) {
            if (aula[chave] == valor) {
                return true
            }
            return false
        }
    }
}

addTurno(lesson2, 'turno', 'noite');
// console.log(lesson2);
// keysList(lesson2);
// objectSize(lesson2);
// valuesList(lesson2);
// console.log(allLessons);
// alunosTotal();
// console.log(getValueByNumber(lesson1, 0));
//console.log(lesson3.turno)
console.log(verifyPair(lesson3, 'turno', 'noite'));