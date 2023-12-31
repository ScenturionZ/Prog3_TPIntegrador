const materiaDB = require("../db/materia")
const msj = require("../utils/mensajes");

const findMateriaById = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_MATERIA});
        }

        const materia = await materiaDB.findMateriaById(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:materia});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const findAllMaterias = async(req, res) => {
    try {
        const materias = await materiaDB.findAllMaterias();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:materias});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const deleteMateria = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_MATERIA});
        }
        await materiaDB.deleteMateria(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Materia eliminada"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const activeMateria = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_MATERIA});
        }
        await materiaDB.activeMateria(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Materia activada"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const createMateria = async(req, res) => {
    try {
        const {nombre, tipoMateria, horasSemanales} = req.body;

        if(!nombre || !tipoMateria || !horasSemanales){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newMateria = {
            nombre:nombre,
            idTipoMateria: tipoMateria,	
            horasSemanales: horasSemanales
        };

        const result = await materiaDB.createMateria(newMateria);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Materia creada", dato:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const updateMateria = async(req, res) => {
    try {
        const {nombre, tipoMateria, horasSemanales} = req.body;

        if(!nombre || !tipoMateria || !horasSemanales){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newMateria = {
            nombre:nombre,
            idTipoMateria: tipoMateria,	
            horasSemanales: horasSemanales
        };
        
        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : msj.FALTA_ID_MATERIA});
        }
        
        const result = await materiaDB.updateMateria(newMateria, id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Materia actualizada", dato : result});

    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const findCarrerasAsociadas = async(req, res) => {
    try {

        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : msj.FALTA_ID_MATERIA});
        }

        const materias = await materiaDB.findCarrerasAsociadas(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:materias});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const findEstudiantesInscriptosMaterias = async(req, res) => {
    try {
        const materias = await materiaDB.findEstudiantesinscriptos();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:materias});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};
module.exports = {
    createMateria,
    findMateriaById,
    findAllMaterias,
    updateMateria,
    deleteMateria,
    activeMateria,
    findCarrerasAsociadas,
    findEstudiantesInscriptosMaterias
};