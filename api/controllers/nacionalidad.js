const nacionalidadDB = require("../db/nacionalidad")
const msj = require("../utils/mensajes");

const findNacionalidadById = async(req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({Estado : msj.ESTADO_ERROR, msj : msj.FALTA_ID_NACIONALIDAD});
        }

        const nac = await nacionalidadDB.findNacionalidadById(id);
        res.status(200).json({Estado : msj.ESTADO_OK, data:nac});
    } catch (error) {
        throw error;        
    }
};

const findAllNacionalidades = async(req, res) => {
    try {
        const nacs = await nacionalidadDB.findAllNacionalidades();
        res.status(200).json({Estado : msj.ESTADO_OK, data:nacs});
    } catch (error) {
        throw error;        
    }
};


module.exports = {
    findNacionalidadById,
    findAllNacionalidades
};