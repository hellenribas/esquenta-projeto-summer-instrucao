const myValues = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (key !== 'name' && key !== 'lastName') throw new Error('Chaves incorretas');
  })

  return Object.values(obj);
}

module.exports = myValues;
