const sumArray = require('../src/sumArray')

describe('sumArray', () => {
  describe('Quando o valor é um Array', () => {
    it('Deve somar corretamente o array [1, 5, 4]', () => {
      expect(sumArray([1, 5, 4])).toEqual(10)
    })

    it('Deve somar corretamente o array [2, 10, 25]', () => {
      expect(sumArray([2, 10, 25])).toEqual(37)
    })
  })

  describe('Quando o valor NÂO é um Array', () => {
    it('Quando o valor é um objeto', () => {
      expect(sumArray({ })).toBeNull()
      // expect(sumArray({ })).toBe(null)
    })
  })
})