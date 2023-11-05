import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

import Nacionalidades from "./RegistroForm/Nacionalidades";
import { UsersContext } from "../Context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registro() {
  let navigate = useNavigate();
  const {Usuarios} = useContext( UsersContext);
  const [validEmail, setValidEmail] = useState(false);

  const [Usuario, setUsuario] = useState({
    documento: "",
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    nacionalidad: "",
    correoElectronico: "",
    clave: "",
    celular: "",
    foto: "",
    tipoDocumento: "",
  });

  useEffect(() => {
    if(Usuarios.length){
      let exist = Usuarios.filter( (user) => user.correoElectronico == Usuario.correoElectronico);
      console.log(exist);
      if(!exist.lenght){
        setValidEmail(true);
      }
    }
  }, [Usuarios]);

  if (!Usuarios.length) {
    return () => {
      <div> Cargando ...</div>;
    };
  }

  const register = async (e) => {
    if(validEmail){
      const URL = "http://localhost:5000/api/v1/estudiantes";
      axios.post(URL, Usuario).then((resp) => {  
        console.log("usuario creado")
      });
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...Usuario, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    register();
    //navigate.push("/");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8} xs={12}>
          <Form onSubmit={handleOnSubmit}>
          <h5> Datos personales: </h5>
            <Form.Group md="4" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                value={Usuario.nombre}
                name="nombre"
                placeholder="Ingrese su nombre..."
                onChange={handleOnChange}
              />
            </Form.Group>
            
            <Form.Group md="4" className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                required
                type="text"
                value={Usuario.apellido}
                name="apellido"
                placeholder="Ingrese su apellido..."
                onChange={handleOnChange}
              />
            </Form.Group>
            <Nacionalidades/>
            <Form.Group md="4" className="mb-3">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                required
                type="date"
                value={Usuario.fechaNacimiento}
                name="fechaNacimiento"
                placeholder="Ingrese su fecha de nacimiento..."
                onChange={handleOnChange}
              />
            </Form.Group>
            
            <Form.Group md="4" className="mb-3">
              <Form.Label>Numero de contacto</Form.Label>
              <Form.Control
                required
                type="text"
                value={Usuario.celular}
                name="celular"
                placeholder="Ingrese su numero de contacto..."
                onChange={handleOnChange}
              />
            </Form.Group>

            <h5> Datos de ingreso: </h5>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Ej: hola@gmail.com"
                value={Usuario.correoElectronico}
                name="correoElectronico"
                onChange={handleOnChange}
              />
              <Form.Text className="text-muted">
                Ingrese su email como usuario
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                onChange={handleOnChange}
                value={Usuario.clave}
                name="clave"
                placeholder="Debe contener una mayuscula y un numero"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registro;
