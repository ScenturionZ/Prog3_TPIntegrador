const crud = require("./crud");
const TABLE_NAME = "materia";

const findMateriaById = async(id) => {
    return crud.findById(TABLE_NAME, id);
}

const findAllMaterias = async() => {
    return crud.findAll(TABLE_NAME);
}

const deleteMateria = async(id) => {
    return crud.logicalDelete(TABLE_NAME, 0, id);
}

const activeMateria = async(id) => {
    return crud.logicalDelete(TABLE_NAME, 1, id);
}

const createMateria = async(materia) => {
    return crud.create(TABLE_NAME, materia);
}

const updateMateria = async(materia, id) => {
    return crud.update(TABLE_NAME, materia, id);
}

module.exports = {
    findMateriaById,
    findAllMaterias,
    deleteMateria,
    activeMateria,
    createMateria,
    updateMateria
};