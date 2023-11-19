const { Router } = require("express");

const router = Router();

const { checkUsuario, validateUsuarioEmail} = require("../../controllers/usuario");

router.post("/login", checkUsuario);
router.post("/validateEmail" ,validateUsuarioEmail);

module.exports = router;