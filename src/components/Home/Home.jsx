import './Home.css';

import Carrousel from './HomeCarrousel/Carrousel';
import Col from 'react-bootstrap/Col';
import HomeNews from './HomeNews/HomeNews';
import React from 'react';
import Row from 'react-bootstrap/Row';

function Home() {
    return (
        <>
            <Carrousel />
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