import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContactoInstitucion from './ContactoInstitucion/ContactoInstitucion';
import ContactoTecnico from './ContactoTecnico/ContactoTecnico';
import ContactoForm from './ContactoForm/ContactoForm';

import './Contacto.css';

function Contacto() {
    return (
        <>
            <h1>Contacto ✉️</h1>
            <br />
            <Row className="row justify-content-between w-100">
                <Col md={5} xs={12}>
                    <ContactoInstitucion/>
                </Col>
                <div className="col d-none d-md-block">
                    <hr className="vertical" />
                </div>
                <Col md={5} xs={12}>
                    <ContactoTecnico/>
                    <ContactoForm/>
                </Col>
            </Row>
        </>
    );
}

export default Contacto;