require('dotenv').config();
const nodemailer = require('nodemailer');

exports.sendMail = async (req, res) => {
    
	const {user, mail, msj} = req.body;
	var code = 200;
	var message = "Mail enviado"
	const transporter = nodemailer.createTransport({
		service:"gmail",
		   	auth: {
				user: process.env.REACT_APP_MAIL,
				pass: process.env.REACT_APP_MAIL_PASS,
		 	},
	});

	const body = "<h1>Persona: " + user +"</h1>" +
				"<h2>Mail: " + mail + "</h2>" + 
				"<p>Mensaje: " + msj + "</p>";

	const opt = {
		from : mail,
		to: process.env.REACT_APP_MAIL,
		subject: "Consulta de " + user,
		html: body
	}

	transporter.sendMail(opt, (error, info) => {
		if(error){
			code = error.responseCode;
			message = error.command + " - " + error.response.substring(0, error.response.indexOf("Learn") - 1)
		}
		res.status(code).json({ message: message });
	})
};