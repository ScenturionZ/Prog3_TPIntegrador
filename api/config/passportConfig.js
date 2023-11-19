const passport = require("passport");
const passportJWT = require("passport-jwt");
const passport_local = require("passport-local");
const usuarioDB = require("../db/usuario");
require('dotenv').config();

const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = passport_local.Strategy;
const JWTStrategy = passportJWT.Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "correoElectronico",
      passwordField: "clave"
    },
    async (correoElectronico, clave, result) => {
      try {
        const usuario = await usuarioDB.checkUsuario(correoElectronico, clave);
        if (usuario) {
          return result(null, usuario, {message: "OK"});
        } else {
          return result(null, false, {message: "Fallo en el inicio de sesion"});
        }
      } catch (e) {
        result(e);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_TOKEN,
    },
    async (jwtPayload, result) => {
      const usuario = await usuarioDB.findUsuarioById(jwtPayload.id);
      if (usuario) {
        return result(null, usuario);
      } else {
        return result(null, false, { message: "Token invalido o Usuario inactivo" });
      }
    }
  )
);
