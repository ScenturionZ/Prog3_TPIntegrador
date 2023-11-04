import React, { createContext, useEffect, useState } from 'react';

import {Usuario} from '../Model/Usuario';
import axios from 'axios';

//Contexto
export const UsersContext = createContext();

//Componente provider
export default function UserProvider (props) {
    
    const [Authenticated, setAuthenticated] = useState(false)
    const [Usuarios, setUsuarios] = useState([]);
    const [User, setUser] = useState(
        {
            id: " ",
            nombre: " ",
            apellido: " ",
            correoElectronico: " ",
            idTipoUsuario: " "
        }
    );
    

    const URL = "http://localhost:5000/api/v1/usuarios";

    const getUsuarios = async (e) => {
        const docs = [];
        axios.get(URL)
            .then(
                resp => {
                    docs.push({ ...resp.data, id: resp.data.id });
                    setUsuarios(docs);
                }
            )
    }
    

    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <UsersContext.Provider value={{ Usuarios, setUsuarios , User,setUser, Authenticated, setAuthenticated }} >
            {props.children}
        </UsersContext.Provider>
    )
};