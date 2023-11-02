const crud = require("./crud");
const TABLE_NAME = "carrera";

const findCarreraById = async(id) => {
    return crud.findById(TABLE_NAME, id);
}

const findAllCarreras = async() => {
    return crud.findAll(TABLE_NAME);
}

const deleteCarrera = async(id) => {
    return crud.logicalDelete(TABLE_NAME, 0, id);
}

const activeCarrera = async(id) => {
    return crud.logicalDelete(TABLE_NAME, 1, id);
}

const createCarrera = async(carrera) => {
    return crud.create(TABLE_NAME, carrera);
}

const updateCarrera = async(carrera, id) => {
    return crud.update(TABLE_NAME, carrera, id);
}

module.exports = {
    findCarreraById,
    findAllCarreras,
    deleteCarrera,
    activeCarrera,
    createCarrera,
    updateCarrera
};