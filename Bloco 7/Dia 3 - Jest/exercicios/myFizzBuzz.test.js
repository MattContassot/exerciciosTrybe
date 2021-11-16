let retorno = require('./myFizzBuzz');

describe('Teste de Fizz Buzz', () => {
    it('A função recebe (15) e retorna "fizzbuzz"', () => {
        expect(retorno(15)).toEqual('fizzbuzz');
    })
    it('A função recebe (9) e retorna "fizz"', () => {
        expect(retorno(9)).toEqual('fizz');
    })
    it('A função recebe (10) e retorna "buzz"', () => {
        expect(retorno(10)).toEqual('buzz');
    })
    it('A função recebe (11) e retorna (11)', () => {
        expect(retorno(11)).toEqual(11);
    })
    it('A função recebe ("string") e retorna ("false")', () => {
        expect(retorno('string')).toEqual(false);
    })
})