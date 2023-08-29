import './Institucional.css';
import React from 'react';
import InstitucionalAbout from './InstitucionalAbout/InstitucionalAbout';
import InstitucionalCarousel from './InstitucionalCarousel/InstitucionalCarousel';

function Institucional() {
    return (
        <>
            <h1>Información Institucional 🏢</h1>
            <br />
            <div className="row justify-content-between w-100">
                <InstitucionalAbout />
                <hr className="border border-dark-subtle border-2 opacity-100 my-3" />
                <InstitucionalCarousel />
            </div>
        </>);
}

export default Institucional;