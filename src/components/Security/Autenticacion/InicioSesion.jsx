import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { UsersContext } from '../../context/UserContext';
import Usuario from '../../model/Usuario';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function InicioSesion() {

    const [IsLogged, setIsLogged] = useState(false)
    let navigate = useNavigate();

    const usuario = new Usuario(
        "",null,null,null,null,null,null
    );
    
    const [User, setUser] = useState({
        usuario
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...User, [name]: value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        //metodo que valide el usuario
        //valido contra la base
        setIsLogged(!IsLogged);
        navigate("/");
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={6} md={8} xs={12} >
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Ingrese su email..."
                                value={User.Usuario}
                                name='Usuario'
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Ingrese su contraseña..."
                                value={User.Contraseña}
                                name='Contraseña'
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
    )
};

export default InicioSesion;