const jwt = require('jsonwebtoken');
require('dotenv').config();
const usuarioDB = require("../db/usuario");
const msj = require("../utils/mensajes");

const esBedel = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ Estado: "No autorizado" });
  }

  jwt.verify(token, process.env.JWT_TOKEN, async (error, usuario) => {
    if (error) {
      return res.status(401).json({ Estado: "No autorizado" });
    }
    const result = await usuarioDB.findUsuarioById(usuario.id);
    if (result[0].tipoUsuario !== "Bedelia") {
      console.log("HOLA?BED")
      return res
        .status(403)
        .send({
          Estado: msj.ESTADO_SIN_PERMISOS,
          Usuario: result[0].correoElectronico,
          Error: "No tiene permisos para acceder",
        });
    }
    next();
  });
};

const esDecano = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ Estado: "No autorizado" });
  }

  jwt.verify(token, process.env.JWT_TOKEN, async (error, usuario) => {
    if (error) {
      return res.status(401).json({ Estado: error });
    }
    const result = await usuarioDB.findUsuarioById(usuario.id);
    if (result[0].tipoUsuario !== "Decano") {
      console.log("HOLA?")
      return res
        .status(403)
        .send({
          Estado: msj.ESTADO_SIN_PERMISOS,
          Usuario: result[0].correoElectronico,
          error: "No tiene permisos para acceder",
        });
    }
    next();
  });
};

const esEstudiante = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ Estado: "No autorizado" });
  }

  jwt.verify(token, process.env.JWT_TOKEN, async (error, usuario) => {
    if (error) {
      return res.status(401).json({ Estado: error });
    }
    const result = await usuarioDB.findUsuarioById(usuario.id);
    if (result[0].tipoUsuario !== "Estudiante") {
      return res
        .status(403)
        .send({
          Estado: msj.ESTADO_SIN_PERMISOS,
          Usuario: result[0].correoElectronico,
          error: "No tiene permisos para acceder",
        });
    }
    next();
  });
};

module.exports = {
  esBedel,
  esDecano,
};
