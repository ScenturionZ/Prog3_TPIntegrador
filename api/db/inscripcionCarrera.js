const crud = require("../utils/crud");
const TABLE_NAME = "estudiantecarrera";
const moment = require("moment");

const findAllInscripcionesCarreras = async() => {
    const query = "SELECT ec.id, c.nombre as carrera, CONCAT(u.nombre, ' ', u.apellido) AS estudiante, DATE_FORMAT(ec.fechaAlta,'%d-%m-%Y') AS fechaAlta, ec.fechaBaja FROM estudiantecarrera ec " +
    "INNER JOIN estudiante e ON e.id = ec.idEstudiante " +
    "INNER JOIN usuario u ON e.idUsuario = u.id " +
    "INNER JOIN carrera c ON c.id = ec.idCarrera " + 
    "WHERE u.activo = 1 AND c.activo = 1 AND ec.fechaBaja IS NULL";
    const data = await crud.runSql(query);
    return data;
}

const findCarrerasinscriptas = async(estudianteId) => {
    const query = "SELECT ec.id, c.nombre as carrera, DATE_FORMAT(ec.fechaAlta,'%d-%m-%Y') AS fechaAlta, ec.fechaBaja FROM estudiantecarrera ec " +
    "INNER JOIN carrera c ON c.id = ec.idCarrera " + 
    "WHERE c.activo = 1 AND ec.fechaBaja IS NULL AND ec.idEstudiante = " + estudianteId;
    const data = await crud.runSql(query);
    return data;
}

const findinscriptos = async(carreraId) => {
    const query = "SELECT ec.id, CONCAT(u.nombre, ' ', u.apellido) AS estudiante, DATE_FORMAT(ec.fechaAlta,'%d-%m-%Y') AS fechaAlta, ec.fechaBaja FROM estudiantecarrera ec " +
    "INNER JOIN estudiante e ON e.id = ec.idEstudiante " +
    "INNER JOIN usuario u ON e.idUsuario = u.id " +
    "INNER JOIN carrera c ON c.id = ec.idCarrera " + 
    "WHERE u.activo = 1 AND c.activo = 1 AND ec.fechaBaja IS NULL AND ec.idCarrera = " + carreraId;
    const data = await crud.runSql(query);
    return data;
}
const deleteInscripcionCarrera = async(id) => {
    const fecha = "'" + moment().format("YYYY-MM-DD") + "'";
    return await crud.logicalDateDelete(TABLE_NAME, fecha, id);
}

const activeInscripcionCarrera = async(id) => {
    return await crud.logicalDateDelete(TABLE_NAME, null, id);
}

const createInscripcionCarrera = async(inscripcion) => {
    const query = "SELECT * FROM estudiantecarrera ec WHERE idEstudiante = " + inscripcion.idEstudiante + " AND idCarrera = " + inscripcion.idCarrera;
    const data = await crud.runSql(query);
    if(data.length)
        return "INSCRIPCION YA EXISTENTE";
    return await crud.createData(TABLE_NAME, inscripcion);
}

const updateInscripcionCarrera = async(inscripcion, id) => {
    return crud.updateData(TABLE_NAME, inscripcion, id);
}

module.exports = {
    findAllInscripcionesCarreras,
    findCarrerasinscriptas,
    findinscriptos,
    deleteInscripcionCarrera,
    activeInscripcionCarrera,
    createInscripcionCarrera,
    updateInscripcionCarrera
};