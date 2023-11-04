const { Router } = require("express");

const router = Router();

const { findEstudianteById, findAllEstudiantes, createEstudiante, updateEstudiante } = require("../../controllers/estudiante");

router.post("/estudiantes", createEstudiante);
router.put("/estudiantes/:id", updateEstudiante);
router.get("/estudiantes", findAllEstudiantes);
router.get("/estudiantes/:id", findEstudianteById);

module.exports = router;