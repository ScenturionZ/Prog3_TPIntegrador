const { Router } = require("express");

const router = Router();

const { findUsuarioById, deleteUsuario, activeUsuario, createUsuario, updateUsuario, findAllUsuarios} = require("../../controllers/usuario");

router.post("/usuarios", createUsuario);
router.put("/usuarios/:id", updateUsuario);
router.put("/usuarios/activar/:id", activeUsuario);
router.delete("/usuarios/:id", deleteUsuario);
router.get("/usuarios/:id", findUsuarioById);
router.get("/usuarios", findAllUsuarios);

module.exports = router;