const estudianteDB = require("../db/estudiante")
const usuarioDB = require("../db/usuario")
const msj = require("../utils/mensajes");
const encrypt = require("../utils/encrypt");

const findEstudianteById = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_ESTUDIANTE});
        }

        const estudiante = await estudianteDB.findEstudianteById(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:estudiante});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const findAllEstudiantes = async(req, res) => {
    try {
        const estudiantes = await estudianteDB.findAllEstudiantes();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:estudiantes});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const deleteEstudiante = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_ESTUDIANTE});
        }
        await estudianteDB.deleteEstudiante(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Estudiante eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const activeEstudiante = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_ESTUDIANTE});
        }
        await estudianteDB.activeEstudiante(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Estudiante activado"});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const createEstudiante = async(req, res) => {
    try {
        const {documento, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, clave , celular, foto, tipoDocumento} = req.body;
        const tipoEstudiante = 3;
        if(!documento || !nombre || !apellido || !nacionalidad || !correoElectronico || !clave || !tipoDocumento){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
            return;
        }

        const newUsuario = {
            correoElectronico: correoElectronico,
            clave: await encrypt.hashPass(clave),
            nombre: nombre,
            apellido: apellido,
            idTipoUsuario: tipoEstudiante
        };

        const user = await usuarioDB.createUsuario(newUsuario);
        const newEstudiante = {
            documento: documento, 
            fechaNacimiento: fechaNacimiento, 
            celular: celular, 
            foto: foto,
            idUsuario: user[0].id,
            idNacionalidad: nacionalidad, 
            idTipoDocumento: tipoDocumento
        };
        
        const result = await estudianteDB.createEstudiante(newEstudiante);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Estudiante creado", dato:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const updateEstudiante = async(req, res) => {
    try {
        
        const {documento, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, clave , celular, foto, tipoDocumento} = req.body;
        if(!documento || !nombre || !apellido || !nacionalidad || !correoElectronico || !clave || !tipoDocumento){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
            return;
        }

        const newEstudiante = {
            documento: documento, 
            fechaNacimiento: fechaNacimiento, 
            celular: celular, 
            foto: foto,
            idNacionalidad: nacionalidad, 
            idTipoDocumento: tipoDocumento
        };
                
        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : msj.FALTA_ID_ESTUDIANTE});
        }
        
        const e = await estudianteDB.updateEstudiante(newEstudiante, id);

        const newUsuario = {
            correoElectronico: correoElectronico,
            clave: await encrypt.hashPass(clave),
            nombre: nombre,
            apellido: apellido
        };
        const user = await usuarioDB.updateUsuario(newUsuario, e[0].usuarioID);
        const result = await estudianteDB.findEstudianteById(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Estudiante actualizado", dato : result});

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

        const carreras = await estudianteDB.findCarrerasAsociadas(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:carreras});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

const findMateriasAsociadas = async(req, res) => {
    try {

        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : msj.FALTA_ID_ESTUDIANTE});
        }

        const materias = await estudianteDB.findMateriasAsociadas(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:materias});
    } catch (error) {
        console.log(error);
        res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});       
    }
};

module.exports = {
    createEstudiante,
    findEstudianteById,
    findAllEstudiantes,
    updateEstudiante,
    deleteEstudiante,
    activeEstudiante,
    findCarrerasAsociadas,
    findMateriasAsociadas
};