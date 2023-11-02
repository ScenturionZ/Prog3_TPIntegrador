const carreraDB = require("../db/carrera")
const msj = require("../utils/mensajes");

const findCarreraById = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : "FALTA ID DE LA CARRERA"});
        }

        const carrera = await carreraDB.findCarreraById(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:carrera});
    } catch (error) {
        throw error;        
    }
};

const findAllCarreras = async(req, res) => {
    try {
        const carreras = await carreraDB.findAllCarreras();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:carreras});
    } catch (error) {
        throw error;        
    }
};

const deleteCarrera = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : "FALTA ID DE LA CARRERA"});
        }
        await carreraDB.deleteCarrera(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Carrera eliminado"});
    } catch (error) {
        throw error;        
    }
};

const activeCarrera = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : "FALTA ID DE LA CARRERA"});
        }
        await carreraDB.activeCarrera(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Carrera activado"});
    } catch (error) {
        throw error;        
    }
};

const createCarrera = async(req, res) => {
    try {
        const {nombre, tipo, modalidad} = req.body;

        if(!nombre || !tipo || !modalidad){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newCarrera = {
            nombre:nombre,
            idTipoCarrera: tipo,	
            idModalidad: modalidad
        };

        const result = await carreraDB.createCarrera(newCarrera);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Carrera creado", dato:result});
    } catch (error) {
        throw error;        
    }
};

const updateCarrera = async(req, res) => {
    try {
        
        const {nombre, tipo, modalidad} = req.body;

        if(!nombre || !tipo || !modalidad){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newCarrera = {
            nombre:nombre,
            idTipoCarrera: tipo,	
            idModalidad: modalidad
        };
        
        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : "FALTA ID DE LA CARRERA"});
        }
        
        const result = await carreraDB.updateCarrera(newCarrera, id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Carrera actualizado", dato : result});

    } catch (error) {
        throw error;        
    }
};

module.exports = {
    createCarrera,
    findCarreraById,
    findAllCarreras,
    updateCarrera,
    deleteCarrera,
    activeCarrera
};