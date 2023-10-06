require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const v1Public = require("./v1/routes/public");
const v1Estudiante = require("./v1/routes/estudiante");

const port = process.env.REACT_APP_API_PORT || 5000;

//CONFIGURACION DE LA API
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.use("/api/v1/publico", v1Public);
app.use("/api/v1/estudiante", v1Estudiante);

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