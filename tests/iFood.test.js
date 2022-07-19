const iFood = require('../src/iFood');

describe('iFood', () => {
  it('Verifica se retorna um objeto com as chaves pedido e conta', () => {
    const result = iFood('Batata frita', 'coca-cola', 20);
    expect(Object.keys(result).includes('pedido')).toBe(true)
    expect(Object.keys(result).includes('conta')).toBe(true)
  })

  it('Verifica se a função retorna a conta corretamente', () => {
    const result = iFood('Batata frita', 'coca-cola', 20);
    expect(result.conta).toBe(21);
  })

  it('Verifica se retorna o pedido com as chaves corretas', () => {
    const result = iFood('Batata frita', 'coca-cola', 20);
    expect(Object.keys(result.pedido)).toContain('comida')
    expect(Object.keys(result.pedido).includes('bebida')).toBe(true)
  })

  it('Verifica se o objeto pedido tem os valores corretos', () => {
    const result = iFood('Batata frita', 'coca-cola', 20);
    expect(result.pedido).toEqual({
      comida: 'Batata frita',
      bebida: 'coca-cola'
    })
  })
})