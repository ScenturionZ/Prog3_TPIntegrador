const estudianteDB = require("../db/estudiante")
const msj = require("../utils/mensajes");

const findEstudianteById = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : "FALTA ID DEL ESTUDIANTE"});
        }

        const estudiante = await estudianteDB.findEstudianteById(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:estudiante});
    } catch (error) {
        throw error;        
    }
};

const findAllEstudiantes = async(req, res) => {
    try {
        const estudiantes = await estudianteDB.findAllEstudiantes();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:estudiantes});
    } catch (error) {
        throw error;        
    }
};

const deleteEstudiante = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : "FALTA ID DEL ESTUDIANTE"});
        }
        await estudianteDB.deleteEstudiante(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Estudiante eliminado"});
    } catch (error) {
        throw error;        
    }
};

const activeEstudiante = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : "FALTA ID DEL ESTUDIANTE"});
        }
        await estudianteDB.activeEstudiante(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Estudiante activado"});
    } catch (error) {
        throw error;        
    }
};

const createEstudiante = async(req, res) => {
    try {
        const {dni, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, celular, foto} = req.body;

        if(!dni || !nombre || !apellido || !nacionalidad || !correoElectronico){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newEstudiante = {
            dni: dni, 
            nombre: nombre, 
            apellido: apellido, 
            fechaNacimiento: fechaNacimiento, 
            nacionalidad: nacionalidad, 
            correoElectronico: correoElectronico, 
            celular: celular, 
            foto: foto
        };
        const result = await estudianteDB.createEstudiante(newEstudiante);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Estudiante creado", dato:result});
    } catch (error) {
        throw error;        
    }
};

const updateEstudiante = async(req, res) => {
    try {
        
        const {dni, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, celular, foto} = req.body;

        if(!dni || !nombre || !apellido || !nacionalidad || !correoElectronico){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }

        const newEstudiante = {
            dni: dni, 
            nombre: nombre, 
            apellido: apellido, 
            fechaNacimiento: fechaNacimiento, 
            nacionalidad: nacionalidad, 
            correoElectronico: correoElectronico, 
            celular: celular, 
            foto: foto
        };

        
        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : "FALTA ID DEL ESTUDIANTE"});
        }
        
        const result = await estudianteDB.updateEstudiante(newEstudiante, id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Estudiante actualizado", dato : result});

    } catch (error) {
        throw error;        
    }
};

module.exports = {
    createEstudiante,
    findEstudianteById,
    findAllEstudiantes,
    updateEstudiante,
    deleteEstudiante,
    activeEstudiante
};