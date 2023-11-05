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

const findCarrerasAsociadas = async(id) => {
    const query = "SELECT c.* FROM carreramateria cm " +
    "INNER JOIN carrera c ON c.id = cm.idCarrera " +
    "INNER JOIN materia m ON m.id = cm.idMateria " +
    "WHERE m.id = " + id + " AND c.activo = 1";
    const result = await crud.runSql(query);
    if(result.length){
        return result;
    }

    return undefined;
}

const findEstudiantesIncriptos = async() => {
    const subQuery = "SELECT COUNT(*) FROM estudiantemateria em WHERE em.idMateria = m.id AND em.fechaBaja IS NULL";
    const query = "SELECT ( " + subQuery + " ) AS alumnos, m.nombre " +
                    "FROM materia m WHERE m.activo = 1";
    const result = await crud.runSql(query);
    if(result.length){
        return result;
    }
    return undefined;

}
module.exports = {
    findMateriaById,
    findAllMaterias,
    deleteMateria,
    activeMateria,
    createMateria,
    updateMateria,
    findCarrerasAsociadas,
    findEstudiantesIncriptos
};