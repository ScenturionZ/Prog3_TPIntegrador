const typeUser = Object.freeze ({
  'Bedel':  1,
  'Decano': 2,
  'Estudiante': 3,
  });

  function getTypeByValue( value) {
    let keys = Object.keys(typeUser).filter(cod => typeUser[cod] === value);
    return keys.length > 0 ? keys[0] : null;
}

  module.exports = {
    typeUser,
    getTypeByValue
  };
