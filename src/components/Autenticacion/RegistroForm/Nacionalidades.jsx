import { Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function Nacionalidades() {
  const [Nacionalidad, setNacionalidad] = useState({});

  const getNacionalidad = async (id) => {
    const URL = `http://localhost:5000/api/v1/nacionalidades/${id}`;
    axios.post(URL).then((resp) => {
      setNacionalidad(resp.data.data);
    });
  };

  
  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    getNacionalidad(value);
  };

  return (
    <Form.Group md="4" className="mb-3">
    <Form.Label>Nacionalidad</Form.Label>
    <Form.Control
      required
      as="select"
      name="nacionalidad"
      onChange={handleOnChange}>
      <option readOnly disabled >Selecciona tu nacionalidad</option>
        <option value="81"> Argentina</option>
        <option value="250"> Brasil</option>
        <option value="267"> Uruguay</option>
      </Form.Control>
  </Form.Group>
  )
}

export default Nacionalidades;
