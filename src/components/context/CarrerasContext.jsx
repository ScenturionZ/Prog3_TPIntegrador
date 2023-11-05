import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

//Contexto
export const CarrerasContext = createContext();

//Componente provider
export default function CarrerasProvider(props) {
  const [carreras, setCarreras] = useState([]);

  const URL = "http://localhost:5000/api/v1/carreras";

  const getCarreras = async (e) => {
    axios.get(URL).then((resp) => {
      setCarreras(resp.data.dato);
    });
  };
  
  useEffect(() => {
    getCarreras();
}, []);

  return (
    <CarrerasContext.Provider value={{carreras, setCarreras}}> {props.children} </CarrerasContext.Provider>
  );
}
