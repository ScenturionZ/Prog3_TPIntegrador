const inscripcionCarreraDB = require("../db/inscripcionCarrera")
const msj = require("../utils/mensajes");
const moment = require("moment");

const findAllInscripcionesCarreras = async(req, res) => {
    try {
        const inscripciones = await inscripcionCarreraDB.findAllInscripcionesCarreras();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:inscripciones});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});  
    }
};

const deleteInscripcionCarrera = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_INSCRIPCION_CARRERA});
        }
        await inscripcionCarreraDB.deleteInscripcionCarrera(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Inscripcion eliminada"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const activeInscripcionCarrera = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_INSCRIPCION_CARRERA});
        }
        await inscripcionCarreraDB.activeInscripcionCarrera(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Inscripcion activada"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const createInscripcionCarrera = async(req, res) => {
    try {
        const {carreraId, estudianteId} = req.body;

        if(!carreraId || !estudianteId){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newInscripcion = {
            idEstudiante:estudianteId,
            idCarrera: carreraId,	
            fechaAlta: moment().format("YYYY-MM-DD")
        };

        const result = await inscripcionCarreraDB.createInscripcionCarrera(newInscripcion);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Inscripcion creada", dato:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const updateInscripcionCarrera = async(req, res) => {
    try {
        const {carreraId, estudianteId} = req.body;

        if(!carreraId || !estudianteId){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newInscripcion = {
            idEstudiante:estudianteId,
            idCarrera: carreraId,	
            fechaAlta: moment().format("YYYY-MM-DD")
        };

        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_INSCRIPCION_CARRERA});
        }

        const result = await inscripcionCarreraDB.updateInscripcionCarrera(newInscripcion, id);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Inscripcion actualizada", dato:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

module.exports = {
    findAllInscripcionesCarreras,
    deleteInscripcionCarrera,
    activeInscripcionCarrera,
    createInscripcionCarrera,
    updateInscripcionCarrera
};