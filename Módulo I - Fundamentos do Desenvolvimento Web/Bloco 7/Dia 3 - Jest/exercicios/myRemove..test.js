let array = require('./myRemove');

describe('Teste de remoção', () => {
    it('A função recebe ([1, 2, 3, 4], 3) e retorna [1, 2, 4]', () => {
        expect([1, 2, 4]).toEqual((array([1, 2, 3, 4], 3)));
    })
    it('A função recebe ([1, 2, 3, 4], 3) e não retorna [1, 2, 3, 4]', () => {
        expect(array([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('A função recebe ([1, 2, 3, 4], 5) e retorna [1, 2, 3, 4]', () => {
        expect([1, 2, 3, 4]).toEqual((array([1, 2, 3, 4], 5)));
    })
})