import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import './ContactoForm.css';
import axios from 'axios';

function ContactoForm() {
    const [form, setForm] = useState({
        user:'', 
        mail:'',
        msj: ''
    });

    function onNombreChange(e) {
        setForm({
          ...form,
          user: e.target.value
        });
    }

    function onCorreoChange(e) {
        setForm({
          ...form,
          mail: e.target.value
        });
    }

    function onMensajeChange(e) {
        setForm({
          ...form,
          msj: e.target.value
        });
    }

    const urlSender = "http://localhost:5000/api/contacto";
    
    const sendMail = async(e) => {
        e.preventDefault();
        
        if(form.user && form.mail && form.msj){
            axios.post(urlSender, form)
            .then(res => {
                console.log(res);
                alert(res.data.message);
                setForm({
                    user:"", 
                    mail:"", 
                    msj : ""
                })

            })
            .catch(err => {
                console.log("error", err);
            })
        }else{
            alert("Falta informacion");
        }
    }
    
    return (
        <>                
            <Form id='contactoForm' onSubmit={e => sendMail(e)}>
                <Form.Group as={Row} className="mb-3" controlId="formNombre">
                    <Form.Label column sm="2" xs="12">
                        Nombre
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Tu nombre completo" value={form.user} onChange={onNombreChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formCorreo">
                    <Form.Label column sm="2" xs="12">
                        Correo
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="mail" placeholder="Tu Correo Electronico" value={form.mail} onChange={onCorreoChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formMensaje">
                    <Form.Label column sm="2" xs="12">
                        Mensaje
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" as="textarea" placeholder="Mensaje a enviar" value={form.msj} onChange={onMensajeChange}/>
                    </Col>
                </Form.Group>

                <Button variant="primary" type='submit'>Enviar</Button>
            </Form>
        </>
    );
}

export default ContactoForm;