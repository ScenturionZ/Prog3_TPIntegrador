import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

import { UsersContext } from "../../context/UserContext";
import axios from "axios";
import { getTypeByValue } from "../../Enum/TypeUser";
import { useNavigate } from "react-router-dom";

function InicioSesion() {
    
  //CONSTANTES
  const navigate = useNavigate();
  const { User, setUser, Authenticated, setAuthenticated } = useContext(UsersContext);

  const initialStateLogin = {
    clave: "",
    correoElectronico: "",
  };
  const [Login, setLogin] = useState(initialStateLogin);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...Login, [name]: value });
  };

  const handleLogin = () => {
    setAuthenticated(true);
    setLogin(initialStateLogin);
  };

  
const checkUser = async (e) => {
    const URL = "http://localhost:5000/api/v1/login";
    axios.post(URL, Login).then((resp) => {
      const data = resp.data.dato;
      if (data) {
        console.log(User);
        setUser({
            id: data.id,
            nombre: data.nombre,
            apellido: data.apellido,
            correoElectronico: data.correoElectronico,
            idTipoUsuario: getTypeByValue(data.idTipoUsuario) 
        });
        handleLogin();
      }
    })
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const check = await checkUser();
    console.log(Login);
    debugger;
    navigate("/");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8} xs={12}>
          <Form onSubmit={(e) => handleOnSubmit(e)}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Ingrese su email..."
                value={Login.correoElectronico}
                name="correoElectronico"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Ingrese su contraseña..."
                value={Login.clave}
                name="clave"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Iniciar sesion
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default InicioSesion;
