const crud = require("../utils/crud");
const encrypt = require("../utils/encrypt");
const TABLE_NAME = "usuario";

const findUsuarioById = async(id) => {
    return crud.findById(TABLE_NAME, id);
}

const findAllUsuarios = async() => {
    return crud.findAllData(TABLE_NAME);
}

const deleteUsuario = async(id) => {
    return crud.logicalDelete(TABLE_NAME, 0, id);
}

const activeUsuario = async(id) => {
    return crud.logicalDelete(TABLE_NAME, 1, id);
}

const createUsuario = async(usuario) => {
    return crud.create(TABLE_NAME, usuario);
}

const updateUsuario = async(usuario, id) => {
    return crud.update(TABLE_NAME, usuario, id);
}

const checkUsuario = async(username, password) => {
    const query = "SELECT * FROM usuario WHERE correoElectronico = '" + username + "' AND activo = 1";
    const user = await crud.runSql(query);
    if(user.length){
        const check = await encrypt.comparePass(password, user[0].clave);
        if(check){
            return user[0];
        }
    }
    return undefined;
}

const validateCorreo = async(correo) => {
    const query = "SELECT * FROM usuario WHERE correoElectronico = '" + correo + "'" ;
    const data = await crud.runSql(query);
    return data;
}

module.exports = {
    findUsuarioById,
    findAllUsuarios,
    deleteUsuario,
    activeUsuario,
    createUsuario,
    updateUsuario,
    checkUsuario,
    validateCorreo
};