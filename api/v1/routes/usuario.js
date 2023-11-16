const { Router } = require("express");

const router = Router();

const { findUsuarioById, findAllUsuarios, deleteUsuario, activeUsuario, createUsuario, updateUsuario} = require("../../controllers/usuario");

router.post("/usuarios", createUsuario);
router.put("/usuarios/:id", updateUsuario);
router.put("/usuarios/activar/:id", activeUsuario);
router.delete("/usuarios/:id", deleteUsuario);
router.get("/usuarios", findAllUsuarios);
router.get("/usuarios/:id", findUsuarioById);

module.exports = router;