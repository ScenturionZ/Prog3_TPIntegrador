const usuarioDB = require("../db/usuario");
const msj = require("../utils/mensajes");
const encrypt = require("../utils/encrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const findUsuarioById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res
        .status(404)
        .json({ Estado: msj.ESTADO_ERROR, msj: msj.FALTA_ID_USUARIO });
    }

    const usuario = await usuarioDB.findUsuarioById(id);
    res.status(200).json({ Estado: msj.ESTADO_OK, dato: usuario });
  } catch (error) {
    console.log(error);
    res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});
  }
};

const findAllUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioDB.findAllUsuarios();
    res.status(200).json({ Estado: msj.ESTADO_OK, dato: usuarios });
  } catch (error) {
    console.log(error);
    res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res
        .status(404)
        .json({ Estado: msj.ESTADO_ERROR, msj: msj.FALTA_ID_USUARIO });
    }
    await usuarioDB.deleteUsuario(id);
    res.status(200).json({ Estado: msj.ESTADO_OK, msj: "Usuario eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});
  }
};

const activeUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res
        .status(404)
        .json({ Estado: msj.ESTADO_ERROR, msj: msj.FALTA_ID_USUARIO });
    }
    await usuarioDB.activeUsuario(id);
    res.status(200).json({ Estado: msj.ESTADO_OK, msj: "Usuario activado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});
  }
};

const createUsuario = async (req, res) => {
  try {
    const { correoElectronico, clave, nombre, apellido, tipoUsuario } =
      req.body;

    if (!correoElectronico || !clave || !nombre || !apellido || !tipoUsuario) {
      res.status(404).json({ Estado: msj.ESTADO_ERROR, msj: msj.FALTAN_DATOS });
    }

    const newUsuario = {
      correoElectronico: correoElectronico,
      clave: await encrypt.hashPass(clave),
      nombre: nombre,
      apellido: apellido,
      idTipoUsuario: tipoUsuario,
    };

    const result = await usuarioDB.createUsuario(newUsuario);
    res
      .status(201)
      .json({ Estado: msj.ESTADO_OK, msj: "Usuario creado", dato: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});
  }
};

const createUsuarioPublic = async (req, res) => {
  try {
    const { correoElectronico, clave, nombre, apellido } = req.body;

    const tipoUsuario = 4;

    if (!correoElectronico || !clave || !nombre || !apellido || !tipoUsuario) {
      res.status(404).json({ Estado: msj.ESTADO_ERROR, msj: msj.FALTAN_DATOS });
    }

    const newUsuario = {
      correoElectronico: correoElectronico,
      clave: await encrypt.hashPass(clave),
      nombre: nombre,
      apellido: apellido,
      idTipoUsuario: tipoUsuario,
    };

    const result = await usuarioDB.createUsuario(newUsuario);
    res
      .status(201)
      .json({ Estado: msj.ESTADO_OK, msj: "Usuario creado", dato: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});
  }
};

const updateUsuario = async (req, res) => {
  try {
    const { correo, pass, nombre, apellido, tipoUsuario } = req.body;

    if (!correo || !pass || !nombre || !apellido || !tipoUsuario) {
      res.status(404).json({ Estado: msj.ESTADO_ERROR, msj: msj.FALTAN_DATOS });
    }

    const newUsuario = {
      correoElectronico: correo,
      clave: await encrypt.hashPass(pass),
      nombre: nombre,
      apellido: apellido,
      idTipoUsuario: tipoUsuario,
    };

    const id = req.params.id;
    if (!id) {
      res
        .status(404)
        .json({ status: msj.ESTADO_ERROR, msj: msj.FALTA_ID_USUARIO });
    }

    const result = await usuarioDB.updateUsuario(newUsuario, id);
    res.status(200).json({
      Estado: msj.ESTADO_OK,
      msj: "Usuario actualizado",
      dato: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({Estado : msj.ESTADO_ERROR, dato: error});
  }
};

const checkUsuario = async (req, res) => {
  passport.authenticate("local", { session: false }, (error, usuario, info) => {
    if (error || !usuario) {
        return res.status(400).json({
            message: "Datos incorrectos",
            usuario
        });
    }
    req.login(usuario, { session: false }, (error) => {
      if (error) {
        res.send(error);
      }
      const token = jwt.sign(usuario, process.env.JWT_TOKEN);
      return res.json({ token , dato: usuario  });
    });
  })(req, res);
};

const validateUsuarioEmail = async (req, res) => {
    const correoElectronico = req.body.correoElectronico;

    const result = await usuarioDB.validateCorreo(correoElectronico);
    if (result.length) {
      return res.status(401).json({ Estado: msj.ESTADO_ERROR, msj: msj.USUARIO_EXISTENTE });
    }
    return res.status(200).json({
      Estado: msj.ESTADO_OK,
      msj: "Correo valido",
      dato: result,
    });
    
};

module.exports = {
  createUsuario,
  findUsuarioById,
  findAllUsuarios,
  updateUsuario,
  deleteUsuario,
  activeUsuario,
  checkUsuario,
  validateUsuarioEmail,
  createUsuarioPublic,
};
