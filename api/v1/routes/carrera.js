const { Router } = require("express");

const router = Router();

const { findCarreraById, findAllCarreras, deleteCarrera, activeCarrera, createCarrera, updateCarrera, findMateriasAsociadas} = require("../../controllers/carrera");

router.post("/carreras", createCarrera);
router.put("/carreras/:id", updateCarrera);
router.put("/carreras/activar/:id", activeCarrera);
router.delete("/carreras/:id", deleteCarrera);
router.get("/carreras", findAllCarreras);
router.get("/carreras/:id", findCarreraById);
router.get("/carreras/materias/:id", findMateriasAsociadas);

module.exports = router;