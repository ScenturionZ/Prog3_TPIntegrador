const carreraDB = require("../db/carrera")
const msj = require("../utils/mensajes");

const findCarreraById = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_CARRERA});
        }

        const carrera = await carreraDB.findCarreraById(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:carrera});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const findAllCarreras = async(req, res) => {
    try {
        const carreras = await carreraDB.findAllCarreras();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:carreras});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const deleteCarrera = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_CARRERA});
        }
        await carreraDB.deleteCarrera(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Carrera eliminada"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const activeCarrera = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_CARRERA});
        }
        await carreraDB.activeCarrera(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Carrera activada"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const createCarrera = async(req, res) => {
    try {
        const {nombre, tipoCarrera, modalidad} = req.body;

        if(!nombre || !tipoCarrera || !modalidad){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newCarrera = {
            nombre:nombre,
            idTipoCarrera: tipoCarrera,	
            idModalidad: modalidad
        };

        const result = await carreraDB.createCarrera(newCarrera);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Carrera creada", dato:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const updateCarrera = async(req, res) => {
    try {
        
        const {nombre, tipoCarrera, modalidad} = req.body;

        if(!nombre || !tipoCarrera || !modalidad){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newCarrera = {
            nombre:nombre,
            idTipoCarrera: tipoCarrera,	
            idModalidad: modalidad
        };
        
        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : msj.FALTA_ID_CARRERA});
        }
        
        const result = await carreraDB.updateCarrera(newCarrera, id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Carrera actualizada", dato : result});

    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const findMateriasAsociadas = async(req, res) => {
    try {

        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : msj.FALTA_ID_CARRERA});
        }

        const carreras = await carreraDB.findMateriasAsociadas(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:carreras});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const findEstudiantesInscriptosCarreras = async(req, res) => {
    try {
        const carreras = await carreraDB.findEstudiantesinscriptos();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:carreras});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

module.exports = {
    createCarrera,
    findCarreraById,
    findAllCarreras,
    updateCarrera,
    deleteCarrera,
    activeCarrera,
    findMateriasAsociadas,
    findEstudiantesInscriptosCarreras
};