const sumArray = (array) => {
  if (!Array.isArray(array)) return null;
  return array?.reduce((acc, number) => acc + number, 0);
}

module.exports = sumArray;
