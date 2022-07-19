const calculate = require('../src/calculate');

describe('calculate', () => {
  describe('Todos os parametros são uma string', () => { 
    it('Testa se o objeto retornado possui as chaves string1, string2, string3', () => {
      const result = calculate('a', 'b', 'c');
      // expect(Object.keys(result).includes('string1', 'string2', 'string3')).toBe(true);
      expect(Object.keys(result).includes('string1')).toBe(true);
      expect(Object.keys(result).includes('string2')).toBe(true);
      expect(Object.keys(result).includes('string3')).toBe(true);
    })
  })

  describe('Quando os parametros não são uma string', () => {
    it('Deve retornar um erro informando que não é uma string', () => {
      expect(() => calculate(1, 2, 3)).toThrow('Os parâmetros devem ser uma string')
    })
  })
});