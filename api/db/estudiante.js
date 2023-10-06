const crud = require("./crud");

const findEstudianteById = async(id) => {
    return crud.findById("estudiante", id, "idEstudiante");
}

const findAllEstudiantes = async() => {
    return crud.findAll("estudiante");
}

const deleteEstudiante = async(id) => {
    return crud.logicalDelete("estudiante", 0, id, "idEstudiante");
}

const activeEstudiante = async(id) => {
    return crud.logicalDelete("estudiante", 1, id, "idEstudiante");
}

const createEstudiante = async(estudiante) => {
    return crud.create("estudiante", estudiante, "idEstudiante");
}

const updateEstudiante = async(estudiante, id) => {
    return crud.update("estudiante", estudiante, id, "idEstudiante");
}

module.exports = {
    findEstudianteById,
    findAllEstudiantes,
    deleteEstudiante,
    activeEstudiante,
    createEstudiante,
    updateEstudiante
};