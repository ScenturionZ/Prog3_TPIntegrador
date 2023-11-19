const { Router } = require("express");

const router = Router();

const {findEstudiantesInscriptosCarreras} = require("../../controllers/carrera");
const {findEstudiantesInscriptosMaterias} = require("../../controllers/materia");

router.get("/materias", findEstudiantesInscriptosCarreras);
router.get("/carreras", findEstudiantesInscriptosMaterias);

module.exports = router;