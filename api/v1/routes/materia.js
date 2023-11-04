const { Router } = require("express");

const router = Router();

const { findMateriaById, findAllMaterias, deleteMateria, activeMateria, createMateria, updateMateria } = require("../../controllers/materia");

router.post("/Materias", createMateria);
router.put("/Materias/:id", updateMateria);
router.put("/Materias/activar/:id", activeMateria);
router.delete("/Materias/:id", deleteMateria);
router.get("/Materias", findAllMaterias);
router.get("/Materias/:id", findMateriaById);

module.exports = router;