const { Router } = require("express");

const router = Router();

const { checkUsuario} = require("../../controllers/usuario");

router.post("/login", checkUsuario);

module.exports = router;