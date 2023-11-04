const { Router } = require("express");

const router = Router();

const { findUsuarioById, findAllUsuarios, deleteUsuario, activeUsuario, createUsuario, updateUsuario, checkUsuario} = require("../../controllers/usuario");

router.post("/Usuarios", createUsuario);
router.put("/Usuarios/:id", updateUsuario);
router.put("/Usuarios/activar/:id", activeUsuario);
router.delete("/Usuarios/:id", deleteUsuario);
router.get("/Usuarios", findAllUsuarios);
router.get("/Usuarios/:id", findUsuarioById);
router.post("/login", checkUsuario);

module.exports = router;