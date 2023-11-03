const crud = require("./crud");
const TABLE_NAME = "estudiante";

const findEstudianteById = async(id) => {
    return crud.findDataById(TABLE_NAME, id);
}

const findAllEstudiantes = async() => {
    return crud.findAllData(TABLE_NAME);
}

const deleteEstudiante = async(id) => {
    const query = "UPDATE usuario SET activo = 0 WHERE id = (SELECT idUsuario FROM estudiante WHERE id = " + id + ")";
    return await crud.runSql(query);
}

const activeEstudiante = async(id) => {
    const query = "UPDATE usuario SET activo = 1 WHERE id = (SELECT idUsuario FROM estudiante WHERE id = " + id + ")";
    return await crud.runSql(query);
}


const createEstudiante = async(estudiante) => {
    return crud.createData(TABLE_NAME, estudiante);
}

const updateEstudiante = async(estudiante, id) => {
    return crud.updateData(TABLE_NAME, estudiante, id);
}

const findCarrerasAsociadas = async(id) => {
    const query = "SELECT c.* FROM estudiantecarrera ec " +
    "INNER JOIN estudiante e ON e.id = ec.id " +
    "INNER JOIN carrera c ON c.id = ec.id " + 
    "WHERE e.id = " + id + " AND c.activo = 1";
    const result = await crud.runSql(query);
    if(result.length){
        return result;
    }

    return undefined;
}

const findMateriasAsociadas = async(id) => {
    const query = "SELECT c.* FROM estudiantemateria em " +
    "INNER JOIN estudiante e ON e.id = em.id " +
    "INNER JOIN materia m ON m.id = em.id " + 
    "WHERE e.id = " + id + " AND m.activo = 1";
    const result = await crud.runSql(query);
    if(result.length){
        return result;
    }

    return undefined;
}

module.exports = {
    findEstudianteById,
    findAllEstudiantes,
    deleteEstudiante,
    activeEstudiante,
    createEstudiante,
    updateEstudiante,
    findCarrerasAsociadas,
    findMateriasAsociadas
};