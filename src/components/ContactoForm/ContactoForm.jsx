import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import './ContactoForm.css';
function showAlert() {
    let form = document.getElementById("contactoForm");
    let username = form.getElementsByTagName("input")[0].value;
    let password = form.getElementsByTagName("input")[1].value;
    console.log(form);
    alert("Datos enviados:\nUsuario = " + username + "\nContraseña = " + password);    
}

function ContactoForm() {
    return (
            <>                
                <Form id='contactoForm'>
                    <Form.Group as={Row} className="mb-3" controlId="formUsername">
                        <Form.Label column sm="2">
                            Usuario
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Username"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPassword">
                        <Form.Label column sm="2">
                            Contraseña
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" onClick={showAlert}>Enviar</Button>{' '}
                </Form>
            </>
        );
}

export default ContactoForm;