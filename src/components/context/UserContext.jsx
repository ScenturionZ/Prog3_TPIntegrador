import React, { createContext, useEffect, useState } from 'react';

//Contexto
export const UsersContext = createContext();

//Componente provider
export default function UserProvider (props) {
    
    const [Authenticated, setAuthenticated] = useState(false)
    const [User, setUser] = useState(
        {
            id: " ",
            nombre: " ",
            apellido: " ",
            correoElectronico: " ",
            idTipoUsuario: " "
        }
    );
    

    return (
        <UsersContext.Provider value={{ User,setUser, Authenticated, setAuthenticated }} >
            {props.children}
        </UsersContext.Provider>
    )
};