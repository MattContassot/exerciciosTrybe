const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

let newKey = "lastName";
const lastName = "Ferreira";
customer[newKey] = lastName;
newKey = "fullName";
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;

function addGenre(cliente, campoGenero, genero) {
  cliente[campoGenero] = genero;
  return cliente;
}

// console.log(addGenre(customer, 'genre', 'Masculino'));

customer['naturalidade'] = 'Porto Alegre';
console.log(customer);

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function skills(student) {
  let skills = Object.keys(student);
  let skillLevel = Object.values(student);
  for (let i = 0; i < Object.keys(student).length; i += 1) {
    console.log(`${skills[i]} - Nível: ${skillLevel[i]}`);
  }
}
// Método do professor

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

// console.log(skills(student1));

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// Não entendi esse property no for in

// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
//   // console.log(property);
// }

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };