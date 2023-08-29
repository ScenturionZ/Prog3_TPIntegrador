import './Home.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HomeNews from './HomeNews/HomeNews';

function Home() {
    return (
        <>
            <h1>Sistema administrativo para Bedelia 🏠</h1>
            <br />
            <Row className="row justify-content-between w-100">
                <Col>
                    <HomeNews />
                </Col>
            </Row>
        </>
    );
}

export default Home;