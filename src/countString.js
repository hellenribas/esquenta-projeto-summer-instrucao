const countString = (string) => {
  if (typeof string !== 'string') return 'O valor digitado não é uma string'; 
  return string.length;
}

module.exports = countString;
