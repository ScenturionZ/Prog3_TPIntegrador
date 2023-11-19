const inscripcionMateriaDB = require("../db/inscripcionMateria");
const msj = require("../utils/mensajes");
const moment = require("moment");

const findAllInscripcionesMaterias = async(req, res) => {
    try {
        const inscripciones = await inscripcionMateriaDB.findAllInscripcionesMaterias();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:inscripciones});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});  
    }
};

const deleteInscripcionMateria = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_INSCRIPCION_MATERIA});
        }
        await inscripcionMateriaDB.deleteInscripcionMateria(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Inscripcion eliminada"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const activeInscripcionMateria = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_INSCRIPCION_MATERIA});
        }
        await inscripcionMateriaDB.activeInscripcionMateria(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Inscripcion activada"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const createInscripcionMateria = async(req, res) => {
    try {
        const {materiaId, estudianteId} = req.body;

        if(!materiaId || !estudianteId){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }
        if(await checkEstudiante(materiaId, estudianteId)){
            throw msj.ESTUDIANTE_SIN_CARRERA;
        }

        const newInscripcion = {
            idEstudiante:estudianteId,
            idMateria: materiaId,	
            fechaAlta: moment().format("YYYY-MM-DD")
        };

        const result = await inscripcionMateriaDB.createInscripcionMateria(newInscripcion);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Inscripcion creada", dato:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const updateInscripcionMateria = async(req, res) => {
    try {
        const {materiaId, estudianteId} = req.body;

        if(!materiaId || !estudianteId){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        if(await checkEstudiante(materiaId, estudianteId)){
            throw msj.ESTUDIANTE_SIN_CARRERA;
        }

        const newInscripcion = {
            idEstudiante:estudianteId,
            idMateria: materiaId,	
            fechaAlta: moment().format("YYYY-MM-DD")
        };

        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_INSCRIPCION_MATERIA});
        }

        const result = await inscripcionMateriaDB.updateInscripcionMateria(newInscripcion, id);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Inscripcion actualizada", dato:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const checkEstudiante = async(materiaId, estudianteId) => {
    const result = await inscripcionMateriaDB.checkEstudiante(materiaId, estudianteId);
    return result;
};

module.exports = {
    findAllInscripcionesMaterias,
    deleteInscripcionMateria,
    activeInscripcionMateria,
    createInscripcionMateria,
    updateInscripcionMateria
};