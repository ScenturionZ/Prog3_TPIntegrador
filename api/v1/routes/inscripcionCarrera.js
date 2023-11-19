const { Router } = require("express");

const router = Router();

const { findAllInscripcionesCarreras, deleteInscripcionCarrera, activeInscripcionCarrera, createInscripcionCarrera, updateInscripcionCarrera} = require("../../controllers/inscripcionCarrera");

router.put("/inscripcionCarreras/activar/:id", activeInscripcionCarrera);
router.delete("/inscripcionCarreras/:id", deleteInscripcionCarrera);
router.get("/inscripcionCarreras", findAllInscripcionesCarreras);
router.post("/inscripcionCarreras", createInscripcionCarrera);
router.put("/inscripcionCarreras/:id", updateInscripcionCarrera);

module.exports = router;