const crud = require("./crud");
const TABLE_NAME = "estudiante";

const findEstudianteById = async(id) => {
    return crud.findDataById(TABLE_NAME, id);
}

const findAllEstudiantes = async() => {
    return crud.findAllData(TABLE_NAME);
}
/*
const deleteEstudiante = async(id) => {
    return crud.logicalDelete(TABLE_NAME, 0, id);
}

const activeEstudiante = async(id) => {
    return crud.logicalDelete(TABLE_NAME, 1, id);
}
*/

const createEstudiante = async(estudiante) => {
    return crud.create(TABLE_NAME, estudiante);
}

const updateEstudiante = async(estudiante, id) => {
    return crud.update(TABLE_NAME, estudiante, id);
}

module.exports = {
    findEstudianteById,
    findAllEstudiantes,
    /*deleteEstudiante,
    activeEstudiante,*/
    createEstudiante,
    updateEstudiante
};