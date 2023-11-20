const typeDocument = Object.freeze ({
    1: 'DNI',
    2: 'Cedula de identidad',
    3: 'Cedula de ciudadania',
    4: 'Pasaporte'
    });
  
  
  function getAll(){
    let list = [];
    Object.keys(typeDocument).forEach(e => {
      list.push(typeDocument[e]);
    })
    return list;
  };
  
  function getKeyFromValue(value){
    let select = Object.keys(typeDocument).filter( e => typeDocument[e] == value);
    console.log(select);
  };
  
    module.exports = {
      getAll
    };
