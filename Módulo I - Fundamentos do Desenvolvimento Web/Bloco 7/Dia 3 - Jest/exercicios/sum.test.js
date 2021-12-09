let soma = require('./sum');

describe('Teste de soma', () => {
    it('A função recebe (4, 5) e retorna 9', () => {
        expect(9).toEqual((soma(4, 5)));
    })
    it('A função recebe (0, 0) e retorna 0', () => {
        expect(0).toEqual((soma(0, 0)));
    })
    it('A função acusa erro se receber uma string', () => {
        expect(() => {
            soma(0, '5')
        }).toThrow();
    })
    it('Verifica se a mensagem de erro é "parameters must be numbers"', () => {
        expect(() => {
            soma(0, '5')
        }).toThrow('parameters must be numbers');
    })
})