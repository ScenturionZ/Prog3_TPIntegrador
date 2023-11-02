const { Router } = require("express");

const router = Router();

const { findCarreraById, findAllCarreras, deleteCarrera, activeCarrera, createCarrera, updateCarrera } = require("../../controllers/carrera");

router.post("/Carreras", createCarrera);
router.put("/Carreras/:id", updateCarrera);
router.put("/Carreras/activar/:id", activeCarrera);
router.delete("/Carreras/:id", deleteCarrera);
router.get("/Carreras", findAllCarreras);
router.get("/Carreras/:id", findCarreraById);

module.exports = router;