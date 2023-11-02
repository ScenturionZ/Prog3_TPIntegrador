import InicioSesion from './InicioSesion';
import React from 'react';
import Registrarse from './Registro';
import { useParams } from 'react-router';

function Autenticacion() {

   const { Choice } = useParams();
    
    let registrar = "registrar";
    const Condicion = (Choice === registrar);

    return (
        <div>
            {Condicion ? <Registrarse/> : <InicioSesion />  }
    </div>
    )
}

export default Autenticacion;