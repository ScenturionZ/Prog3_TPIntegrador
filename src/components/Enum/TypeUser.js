const TypeUser = Object.freeze ({
  'Bedel':  1,
  'Decano': 2,
  'Estudiante': 3
  });

  function getTypeByValue( value) {
    let keys = Object.keys(TypeUser).filter(cod => TypeUser[cod] === value);
    return keys.length > 0 ? keys[0] : null;
}

  module.exports = {
    TypeUser,
    getTypeByValue
  };
