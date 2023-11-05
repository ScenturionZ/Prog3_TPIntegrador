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

const findMateriasAsociadas = async(id) => {
    const query = "SELECT m.* FROM carreramateria cm " +
    "INNER JOIN carrera c ON c.id = cm.idCarrera " +
    "INNER JOIN materia m ON m.id = cm.idMateria " +
    "WHERE c.id = " + id + " AND m.activo = 1";
    const result = await crud.runSql(query);
    if(result.length){
        return result;
    }

    return undefined;
}

const findEstudiantesIncriptos = async() => {
    const subQuery = "SELECT COUNT(*) FROM estudiantecarrera ec WHERE ec.idCarrera = c.id AND ec.fechaBaja IS NULL";
    const query = "SELECT ( " + subQuery + " ) AS alumnos, c.nombre " +
                    "FROM carrera c WHERE c.activo = 1";
    const result = await crud.runSql(query);
    if(result.length){
        return result;
    }
    return undefined;

}

module.exports = {
    findCarreraById,
    findAllCarreras,
    deleteCarrera,
    activeCarrera,
    createCarrera,
    updateCarrera,
    findMateriasAsociadas,
    findEstudiantesIncriptos
};