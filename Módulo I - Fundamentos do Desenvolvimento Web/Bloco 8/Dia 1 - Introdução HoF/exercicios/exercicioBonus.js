const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const numeroAleatorio = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const manaConsumed = () => {
  const manaPerRound = 15;
  if (mage.mana < manaPerRound) {
    console.log('Não possui mana suficiente');
    return 0;
  }
  return manaPerRound;
}

const dragonDamage = () => numeroAleatorio(15, dragon.strength);
const warriorDamage = () => numeroAleatorio(warrior.strength, warrior.strength*warrior.weaponDmg);
const mageAttack = () => {
  const manaPerRound = 15;
  const obj = {
    damage: '',
    manaSpend: '',
  }
  if (mage.mana < manaPerRound) {
    obj.damage = 'Não possui mana suficiente';
    obj.manaSpend = 0;
  } else {
    obj.damage = numeroAleatorio(mage.intelligence, mage.intelligence*2);
    obj.manaSpend = manaPerRound;
  }
  return obj;
}

const battleMembers = { mage, warrior, dragon };
const gameActions = {
  warriorTurn: (damage) => {
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  mageTurn: (damage) => {
    dragon.healthPoints -= damage.damage;
    mage.damage = damage.damage;
    mage.mana -= damage.manaSpend;
  },
  dragonTurn: (damage) => {
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },
  turn: () => {
    gameActions.warriorTurn(warriorDamage());
    gameActions.mageTurn(mageAttack());
    gameActions.dragonTurn(dragonDamage());
    return console.table(battleMembers);
  }
};

// A partir daqui eu implementei para rodar os turnos até algum personagem morrer.

let someoneDied = () => {
  let died = false;
  for (char in battleMembers) {
    if (battleMembers[char].healthPoints > 0) {
      died = false;
    } else {
      died = true;
      break;
    }
  }
  return died;
}

while (someoneDied() === false) {
  gameActions.turn();
}