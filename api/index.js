require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./config/passportConfig');

const v1Public = require("./v1/routes/public");
const v1Estudiante = require("./v1/routes/estudiante");
const v1Nacionalidad = require("./v1/routes/nacionalidad");
const v1Carrera = require("./v1/routes/carrera");
const v1Materia = require("./v1/routes/materia");
const v1Usuario = require("./v1/routes/usuario");
const v1InscripcionMateria = require("./v1/routes/inscripcionMateria");
const v1InscripcionCarrera = require("./v1/routes/inscripcionCarrera");
const v1Estadisticas = require("./v1/routes/estadisticas");
const v1Auth = require('./v1/routes/auth');
//Middleware
const {esBedel, esDecano} = require('./config/middleware');
const port = process.env.REACT_APP_API_PORT || 5000;

//CONFIGURACION DE LA API
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(passport.initialize());
//app.use(passport.session());

const checkUsuarioBedel = [passport.authenticate('jwt', {session:false}), esBedel];

app.use("/api/v1/publico", v1Public);
app.use("/api/v1", v1Nacionalidad);
app.use("/api/v1", v1Auth);
app.use("/api/v1/estadisticas", [passport.authenticate('jwt', {session:false}), esDecano], v1Estadisticas);
app.use("/api/v1", checkUsuarioBedel, v1Estudiante);
app.use("/api/v1", checkUsuarioBedel, v1Carrera);
app.use("/api/v1", checkUsuarioBedel, v1Materia);
app.use("/api/v1", checkUsuarioBedel, v1Usuario);
app.use("/api/v1", checkUsuarioBedel, v1InscripcionMateria);
app.use("/api/v1", checkUsuarioBedel, v1InscripcionCarrera);

//API PORT
app.listen(port,  function (err) {
    if (err){
		console.log(err);
	}
    console.log("Server listening on PORT:", port);
});

app.get("/api", (req, res) => {
	res.json({ message: "Test GET!" });
});