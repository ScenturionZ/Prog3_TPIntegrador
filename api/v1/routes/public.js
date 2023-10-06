const { Router } = require("express");

const router = Router();

const {sendMail} = require("../../controllers/mail")

router.post("/contacto", sendMail);

module.exports = router;