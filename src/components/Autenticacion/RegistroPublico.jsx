import { Button, Col, Container, Form, Row } from "react-bootstrap";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RegistroPublico() {
  let navigate = useNavigate();
  const [validEmail, setValidEmail] = useState(false);

  const [Usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    clave: ""
  });

  // if (!Usuarios.length) {
  //   return () => {
  //     <div> Cargando ...</div>;
  //   };
  // }
  
  const validateEmail = async (e) => {
    const URL = "http://localhost:5000/api/v1/validateEmail";
    axios.post(URL, {
      correoElectronico: Usuario.correoElectronico
    }).then((resp) => {  
      console.log("Estoy en validateEmail");
      console.log(resp.status);
      if( resp.status.valueOf(200)){
        setValidEmail(true);
        console.log(validEmail);
      }
    });
  };

  const register = async (e) => {
    console.log("Estoy en register");
    console.log(validEmail);
    if(validEmail){
      const URL = "http://localhost:5000/api/v1/publico/nuevo-usuario";
      axios.post(URL, Usuario).then((resp) => {  
        console.log(resp);
        console.log(resp.status);
        return resp.status;
      });
  };
};

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...Usuario, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    const status = register();
    if(status.valueOf(201)){
      navigate("/inicio-sesion");
    }
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
};

export default RegistroPublico;
