const { Router } = require("express");

const router = Router();

const { findMateriaById, findAllMaterias, deleteMateria, activeMateria, createMateria, updateMateria, findCarrerasAsociadas, findEstudiantesIncriptos } = require("../../controllers/materia");

router.post("/materias", createMateria);
router.get("/materias/incriptos", findEstudiantesIncriptos);
router.put("/materias/:id", updateMateria);
router.put("/materias/activar/:id", activeMateria);
router.delete("/materias/:id", deleteMateria);
router.get("/materias", findAllMaterias);
router.get("/materias/:id", findMateriaById);
router.get("/materias/carreras/:id", findCarrerasAsociadas);

module.exports = router;