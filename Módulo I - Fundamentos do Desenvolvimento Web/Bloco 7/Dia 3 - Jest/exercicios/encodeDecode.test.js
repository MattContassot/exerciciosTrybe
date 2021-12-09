let encodeDecode = require('./encodeDecode');

describe('Teste de Encode e Decode', () => {
    it('Testa se encode() e decode() são funções"', () => {
        expect(typeof(encodeDecode.encode)).toBe('function');
        expect(typeof(encodeDecode.decode)).toBe('function');
    })
    it('A função encode() recebe "a, e, i, o, u" e retorna (1, 2, 3, 4 e 5)', () => {
        expect(encodeDecode.encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
    })
    it('A função decode() recebe (1, 2, 3, 4 e 5) e retorna "a, e, i, o, u"', () => {
        expect(encodeDecode.decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
    })
})