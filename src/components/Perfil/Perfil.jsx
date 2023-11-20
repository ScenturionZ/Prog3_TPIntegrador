import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Perfil() {
    
    //CONSTANTES
    const navigate = useNavigate();
    const { User } = useContext(UsersContext);
        
    const handleOnSubmit = async (e) => {
        e.preventDefault();
;       //guardo datos
        //salto pop up estudiante creado y vuelvo atras
      };

      
    return (
        <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} xs={12}>
          <Form onSubmit={(e) => handleOnSubmit(e)}>
            
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

            <Form.Group md="4" className="mb-3">
              <Form.Label>Numero de documento</Form.Label>
              <Form.Control
                required
                type="text"
                value={Usuario}
                name="celular"
                placeholder="Ingrese su numero de documento..."
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
              Guardar datos
            </Button>
          </Form>
        </Col>
        </Row>
        </Container>
            );
}

export default Institucional;