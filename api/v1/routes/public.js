const { Router } = require("express");

const router = Router();

const {sendMail} = require("../../controllers/mail");
const {createUsuarioPublic} = require("../../controllers/usuario");

router.post("/contacto", sendMail);
router.post("/nuevo-usuario", createUsuarioPublic)

module.exports = router;