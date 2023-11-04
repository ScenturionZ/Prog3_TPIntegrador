const { Router } = require("express");

const router = Router();

const { findNacionalidadById, findAllNacionalidades} = require("../../controllers/nacionalidad");

router.get("/nacionalidades", findAllNacionalidades);
router.get("/nacionalidades/:id", findNacionalidadById);

module.exports = router;