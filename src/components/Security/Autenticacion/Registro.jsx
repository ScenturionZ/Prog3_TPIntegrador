import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useContext, useState } from "react";

import { UsersContext } from '../../Context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registro() {

    let navigate = useNavigate();
    //const {usuarios} = useContext( UsersContext);
    
    const [Usuario, setUsuario] = useState({
        documento: " ",
        nombre: " ",
        apellido: " ",
        fechaNacimiento: " ",
        nacionalidad: " ",
        correoElectronico: " ",
        clave:" ",
        celular:" ",
        foto:" ",
        tipoDocumento:" "
    });
    
    const register = async (e) => {
        const URL = "http://localhost:5000/api/v1/estudiantes";
        axios.post(URL, Usuario).then((resp) => {
            
        })

    };
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...Usuario, [name]: value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        register();
        navigate.push("/");
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={6} md={8} xs={12} >
                    <Form onSubmit={handleOnSubmit}>
                    
                    <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                            required
                            type="text" 
                            value={Usuario.nombre}
                            name="nombre"
                            onChange={handleOnChange}
                            />
                            <Form.Text className="text-muted">
                                Ingrese su nombre
                            </Form.Text>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control 
                            required
                            type="text" 
                            value={Usuario.nombre}
                            name="nombre"
                            onChange={handleOnChange}
                            />
                            <Form.Text className="text-muted">
                                Ingrese su nombre
                            </Form.Text>
                    </Form.Group>
                    

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
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