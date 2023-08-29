import { Col, Image } from 'react-bootstrap';
import './InstitucionalAbout.css';
import React from 'react';

function InstitucionalAbout() {
    return (
        <>
            <Col md={6} xs={12} className="mt-5">
                <h3 className="title-uner mb-4">Sobre la Institucion</h3>
                <p className="text-uner me-2">
                    La Universidad Nacional de Entre Ríos (UNER) en tanto institución
                    autónoma y autárquica e integrante del sistema público de educación
                    superior argentino, en un todo de acuerdo con lo establecido en la
                    Constitución Nacional, los Tratados Internacionales –especialmente
                    aquéllos que gozan de jerarquía constitucional-, las Leyes
                    Nacionales en la materia y el propio Estatuto, garantiza el efectivo
                    ejercicio del derecho de acceso a la información pública, promueve
                    la participación ciudadana y la transparencia de la gestión pública.
                </p>
                <p className="text-uner me-2">
                    En virtud de varios principios, la Universidad Nacional de Entre
                    Ríos promueve la búsqueda, acceso y solicitud de información pública
                    para su utilización libre y que incluye la posibilidad de recibirla,
                    copiarla, analizarla, reprocesarla, reutilizarla, redistribuirla,
                    etc. sin limitaciones salvo las establecidas excepcionalmente según
                    lo establece la normativa vigente.
                </p>
            </Col>
            <Col md={6} xs={12} className="mt-5">
                <Image src="assets/img/uner_9.jpg" alt="..." rounded fluid />
            </Col>
        </>);
}

export default InstitucionalAbout;