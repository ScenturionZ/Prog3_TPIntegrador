const crud = require("./crud");

const findNacionalidadById = async(id) => {
    return crud.findDataById("nacionalidad", id);
}

const findAllNacionalidades = async() => {
    return crud.findAllData("nacionalidad");
}

module.exports = {
    findNacionalidadById,
    findAllNacionalidades
};