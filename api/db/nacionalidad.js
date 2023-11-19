const crud = require("../utils/crud");
const TABLE_NAME = "nacionalidad";

const findNacionalidadById = async(id) => {
    return crud.findDataById(TABLE_NAME, id);
}

const findAllNacionalidades = async() => {
    return crud.findAllData(TABLE_NAME);
}

module.exports = {
    findNacionalidadById,
    findAllNacionalidades
};