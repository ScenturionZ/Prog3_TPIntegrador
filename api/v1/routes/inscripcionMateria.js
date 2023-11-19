const { Router } = require("express");

const router = Router();

const { findAllInscripcionesMaterias, deleteInscripcionMateria, activeInscripcionMateria, createInscripcionMateria, updateInscripcionMateria} = require("../../controllers/inscripcionMateria");

router.put("/inscripcionMaterias/activar/:id", activeInscripcionMateria);
router.delete("/inscripcionMaterias/:id", deleteInscripcionMateria);
router.get("/inscripcionMaterias", findAllInscripcionesMaterias);
router.post("/inscripcionMaterias", createInscripcionMateria);
router.put("/inscripcionMaterias/:id", updateInscripcionMateria);

module.exports = router;