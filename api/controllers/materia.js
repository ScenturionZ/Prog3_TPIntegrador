const carreraDB = require("../db/materia")
const msj = require("../utils/mensajes");

const findMateriaById = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : "FALTA ID DE LA MATERIA"});
        }

        const carrera = await carreraDB.findMateriaById(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:carrera});
    } catch (error) {
        throw error;        
    }
};

const findAllMaterias = async(req, res) => {
    try {
        const carreras = await carreraDB.findAllMaterias();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:carreras});
    } catch (error) {
        throw error;        
    }
};

const deleteMateria = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : "FALTA ID DE LA MATERIA"});
        }
        await carreraDB.deleteMateria(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Materia eliminado"});
    } catch (error) {
        throw error;        
    }
};

const activeMateria = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : "FALTA ID DE LA MATERIA"});
        }
        await carreraDB.activeMateria(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Materia activado"});
    } catch (error) {
        throw error;        
    }
};

const createMateria = async(req, res) => {
    try {
        const {nombre, tipo, modalidad} = req.body;

        if(!nombre || !tipo || !modalidad){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newMateria = {
            nombre:nombre,
            idTipoMateria: tipo,	
            idModalidad: modalidad
        };

        const result = await carreraDB.createMateria(newMateria);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Materia creado", dato:result});
    } catch (error) {
        throw error;        
    }
};

const updateMateria = async(req, res) => {
    try {
        
        const {nombre, tipo, modalidad} = req.body;

        if(!nombre || !tipo || !modalidad){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newMateria = {
            nombre:nombre,
            idTipoMateria: tipo,	
            idModalidad: modalidad
        };
        
        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : "FALTA ID DE LA MATERIA"});
        }
        
        const result = await carreraDB.updateMateria(newMateria, id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Materia actualizado", dato : result});

    } catch (error) {
        throw error;        
    }
};

module.exports = {
    createMateria,
    findMateriaById,
    findAllMaterias,
    updateMateria,
    deleteMateria,
    activeMateria
};