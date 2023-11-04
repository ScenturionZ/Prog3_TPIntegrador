const usuarioDB = require("../db/usuario")
const msj = require("../utils/mensajes");
const encrypt = require("../utils/encrypt");

const findUsuarioById = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_USUARIO});
        }

        const usuario = await usuarioDB.findUsuarioById(id);
        res.status(200).json({Estado : msj.ESTADO_OK, dato:usuario});
    } catch (error) {
        throw error;        
    }
};

const findAllUsuarios = async(req, res) => {
    try {
        const usuarios = await usuarioDB.findAllUsuarios();
        res.status(200).json({Estado : msj.ESTADO_OK, dato:usuarios});
    } catch (error) {
        throw error;        
    }
};

const deleteUsuario = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_USUARIO});
        }
        await usuarioDB.deleteUsuario(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Usuario eliminado"});
    } catch (error) {
        throw error;        
    }
};

const activeUsuario = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_USUARIO});
        }
        await usuarioDB.activeUsuario(id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Usuario activado"});
    } catch (error) {
        throw error;        
    }
};

const createUsuario = async(req, res) => {
    try {
        const {correo, pass, nombre, apellido, tipoUsuario} = req.body;

        if(!correo || !pass || !nombre || !apellido || tipoUsuario){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }
        
        const newUsuario = {
            correoElectronico: correo,
            clave: await encrypt.hashPass(pass),
            nombre: nombre,
            apellido: apellido,
            idTipoUsuario: tipoUsuario
        };

        const result = await usuarioDB.createUsuario(newUsuario);
        res.status(201).json({Estado : msj.ESTADO_OK, msj : "Usuario creado", dato:result});
    } catch (error) {
        throw error;        
    }
};

const updateUsuario = async(req, res) => {
    try {
        const {correo, pass, nombre, apellido, tipoUsuario} = req.body;

        if(!correo || !pass || !nombre || !apellido || tipoUsuario){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }
        
        const newUsuario = {
            correoElectronico: correo,
            clave: await encrypt.hashPass(pass),
            nombre: nombre,
            apellido: apellido,
            idTipoUsuario: tipoUsuario
        };
        
        const id = req.params.id;
        if(!id){
            res.status(404).json({status:msj.ESTADO_ERROR, msj : msj.FALTA_ID_USUARIO});
        }
        
        const result = await usuarioDB.updateUsuario(newUsuario, id);
        res.status(200).json({Estado : msj.ESTADO_OK, msj : "Usuario actualizado", dato : result});

    } catch (error) {
        throw error;        
    }
};

const checkUsuario = async(req, res) => {
    try {
        const {correo, pass} = req.body;

        if(!correo || !pass){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTAN_DATOS});
        }
        
        const result = await usuarioDB.checkUsuario(correo, pass);
        res.status(200).json({Estado : msj.ESTADO_OK, dato : result});

    } catch (error) {
        throw error;        
    }
};

module.exports = {
    createUsuario,
    findUsuarioById,
    findAllUsuarios,
    updateUsuario,
    deleteUsuario,
    activeUsuario,
    checkUsuario
};