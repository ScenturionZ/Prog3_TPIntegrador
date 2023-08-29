import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import './ContactoTecnico.css';

function ContactoTecnico() {
    return (
        <>
            <h2 className="border-bottom border-primary border-5 opacity-100 title-contacto fw-bolder">Soporte Tecnico 👨‍💻👩‍💻</h2>
            <ListGroup as="ol" className="list-group list-group-flush ol-contacto">
                <ListGroup.Item as="li" className="list-group-item d-flext li-programmer">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Sebastián Ignacio Centurion<Image src="assets/icons/code.svg"/></div>
                        <p><Image src="assets/icons/mail.svg"/>sebastian.ignacio.centurion@gmail.com</p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item d-flext li-programmer">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">María Emilia Walter<Image src="assets/icons/code.svg"/></div>
                        <p><Image src="assets/icons/mail.svg"/>eemi.walter@gmail.com</p>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default ContactoTecnico;