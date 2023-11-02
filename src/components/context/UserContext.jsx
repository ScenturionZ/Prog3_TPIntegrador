import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

//Contexto
export const UsersContext = createContext();

//Componente provider
export default function UserProvider (props) {

    const [usuarios, setUsuarios] = useState([])
    const URL = "http://localhost:5000/api/v1/usuarios";

    const getUsuarios = async (e) => {
        e.preventDefault();
        const docs = [];
        axios.get(URL)
            .then(
                resp => {
                    console.log(resp.data);
                    docs.push({ ...resp.data, id: resp.data.id });
                    setUsuarios(docs);
                }
            )
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <UsersContext.Provider value={{ users: [usuarios, setUsuarios] }} >
            {props.children}
        </UsersContext.Provider>
    )
};