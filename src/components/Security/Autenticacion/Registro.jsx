import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useContext, useState } from "react";

import { UsersContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Registro() {

    const [IsLogged, setIsLogged] = useState(false)
    let navigate = useNavigate();
    
    const Usuarios = useContext( UsersContext);
    
    const [Usuario, setUsuario] = useState({
        Usuario: '',
        Contraseña: '',
        IsLogged
    });

    const handleOnChange = (e) => {
        setIsLogged(!IsLogged);
        const { name, value } = e.target;
        setUsuario({ ...Usuario, [name]: value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigate.push("/");
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={6} md={8} xs={12} >
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Ej: hola@gmail.com" />
                            <Form.Text className="text-muted">
                                Ingrese su email como usuario
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Debe contener una mayuscula y un numero" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Registrarse
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default Registro;