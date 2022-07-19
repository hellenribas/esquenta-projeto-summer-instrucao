const calculate = (string1, string2, string3) => {
  try {
    return {
      string0: string1.toUpperCase(),
      string2: string2.toUpperCase(),
      string3: string3.toUpperCase(),
    }
  } catch(e) {
    throw new Error('Os parâmetros devem ser uma string');
  }
}

module.exports = calculate;
