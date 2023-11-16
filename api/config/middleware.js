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
    if (result.idTipoUsuario != 1) {
      return res
        .status(403)
        .send({
          Estado: msj.ESTADO_ERROR,
          error: "No tiene permisos para acceder",
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
    }
    const result = await usuarioDB.findUsuarioById(usuario.id);
    if (result.idTipoUsuario != 2) {
      return res
        .status(403)
        .send({
          Estado: msj.ESTADO_ERROR,
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
