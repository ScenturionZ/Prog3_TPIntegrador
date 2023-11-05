import './Estadisticas.css';
import React from 'react';
import GraficosDatos from './GraficosDatos/GraficosDatos';

function Estadisticas() {
    return (
        <>
            <h1>Estadisticas 📊</h1>
            <br />
            <div className="row justify-content-between w-100">
                <GraficosDatos datos={"carreras"}/>
                <GraficosDatos datos={"materias"}/>
            </div>
        </>);
}

export default Estadisticas;