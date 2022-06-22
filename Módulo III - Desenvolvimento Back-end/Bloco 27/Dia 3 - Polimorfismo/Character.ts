abstract class Character {
  constructor(public name: string) { }

  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk() { console.log('Melee falando') }
  specialMove() { console.log('Melee movimento especial') }
}

class LongRangeCharacter extends Character {
  talk() { console.log('Long Range falando') }
  specialMove() { console.log('Long Range movimento especial') }
}

const a = new MeleeCharacter('Fulano');
const b = new LongRangeCharacter('Ciclano');

const myMethods = (character: Character) => {
  character.talk();
  character.specialMove();
};

myMethods(a);
myMethods(b);