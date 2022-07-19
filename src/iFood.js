const iFood = (comida, bebida, valor) => {
  const conta = valor * 1.05;
  return { pedido: { comida, bebida }, conta }
}

module.exports = iFood;
