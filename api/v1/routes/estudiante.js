const { Router } = require("express");

const router = Router();

const { findEstudianteById, findAllEstudiantes, deleteEstudiante, activeEstudiante, createEstudiante, updateEstudiante } = require("../../controllers/estudiante");

router.post("/estudiantes", createEstudiante);
router.put("/estudiantes/:id", updateEstudiante);
router.put("/estudiantes/activar/:id", activeEstudiante);
router.delete("/estudiantes/:id", deleteEstudiante);
router.get("/estudiantes", findAllEstudiantes);
router.get("/estudiantes/:id", findEstudianteById);

module.exports = router;