const crud = require("../utils/crud");
const TABLE_NAME = "estudiantemateria";
const moment = require("moment");

const findAllInscripcionesMaterias = async() => {
    const query = "SELECT em.id, m.nombre as materia, CONCAT(u.nombre, ' ', u.apellido) AS estudiante, DATE_FORMAT(em.fechaAlta,'%d-%m-%Y') AS fechaAlta, em.fechaBaja FROM estudiantemateria em " +
    "INNER JOIN estudiante e ON e.id = em.idEstudiante " +
    "INNER JOIN usuario u ON e.idUsuario = u.id " +
    "INNER JOIN materia m ON m.id = em.idMateria " + 
    "WHERE u.activo = 1 AND m.activo = 1 AND em.fechaBaja IS NULL";
    const data = await crud.runSql(query);
    return data;
}

const findMateriasinscriptas = async(estudianteId) => {
    const query = "SELECT em.id, m.nombre as materia, DATE_FORMAT(em.fechaAlta,'%d-%m-%Y') AS fechaAlta, em.fechaBaja FROM estudiantemateria em " +
    "INNER JOIN materia m ON m.id = em.idMateria " + 
    "WHERE m.activo = 1 AND em.fechaBaja IS NULL AND em.idEstudiante = " + estudianteId;
    const data = await crud.runSql(query);
    return data;
}

const findinscriptos = async(materiaId) => {
    const query = "SELECT em.id, CONCAT(u.nombre, ' ', u.apellido) AS estudiante, DATE_FORMAT(em.fechaAlta,'%d-%m-%Y') AS fechaAlta, em.fechaBaja FROM estudiantemateria em " +
    "INNER JOIN estudiante e ON e.id = em.idEstudiante " +
    "INNER JOIN usuario u ON e.idUsuario = u.id " +
    "INNER JOIN materia m ON m.id = em.idMateria " + 
    "WHERE u.activo = 1 AND m.activo = 1 AND em.fechaBaja IS NULL AND em.idMateria = " + materiaId;
    const data = await crud.runSql(query);
    return data;
}
const deleteInscripcionMateria = async(id) => {
    const fecha = "'" + moment().format("YYYY-MM-DD") + "'";
    return await crud.logicalDateDelete(TABLE_NAME, fecha, id);
}

const activeInscripcionMateria = async(id) => {
    return await crud.logicalDateDelete(TABLE_NAME, null, id);
}

const createInscripcionMateria = async(inscripcion) => {
    const query = "SELECT * FROM estudiantemateria em WHERE idEstudiante = " + inscripcion.idEstudiante + " AND idMateria = " + inscripcion.idMateria;
    const data = await crud.runSql(query);
    if(data.length)
        return "INSCRIPCION YA EXISTENTE";
    return await crud.createData(TABLE_NAME, inscripcion);
}

const updateInscripcionMateria = async(inscripcion, id) => {
    return crud.updateData(TABLE_NAME, inscripcion, id);
}

const checkEstudiante = async(idMateria, idEstudiante) => {
    let query = "SELECT * FROM estudiantecarrera ec" + 
                " INNER JOIN estudiante e ON e.id = " + idEstudiante + 
                " INNER JOIN usuario u ON u.id = e.idUsuario" +
                " WHERE ec.idEstudiante = " + idEstudiante + 
                " AND ec.idCarrera = (SELECT idCarrera FROM carreramateria cm WHERE cm.idMateria = " + idMateria + " AND cm.activo = 1)" + 
                " AND ec.fechaBaja IS NULL AND u.activo = 1";
    const data = await crud.runSql(query);
    return !Boolean(data.length);
}

module.exports = {
    findAllInscripcionesMaterias,
    findMateriasinscriptas,
    findinscriptos,
    deleteInscripcionMateria,
    activeInscripcionMateria,
    createInscripcionMateria,
    updateInscripcionMateria,
    checkEstudiante
};