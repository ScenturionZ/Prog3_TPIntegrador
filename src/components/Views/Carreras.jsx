import { Col, Container, Row, Table } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

import { CarrerasContext } from "../context/CarrerasContext";
import TableContent from "../Generics/TableContent";

function Carreras() {
  const { carreras, setCarreras } = useContext(CarrerasContext);
  
  /*   const elements = () => {
    let obj = carreras[0];
    console.log(obj);
    let cols = Object.keys(obj);
    for (let col of cols) {
      <th>{col}</th>;
    }
  }; */

  useEffect(() => {
    if (!carreras.length) {
      return () => {
        <div> Cargando ...</div>;
      };
    }
    const tableHeader = Object.keys(carreras[0]);
    return (
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} xs={12}>
            <Table>
              <thead>
                {tableHeader.map((key) => (
                  <th>{key}</th>
                ))}
              </thead>
              <TableContent data={carreras} />
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }, []);
}

export default Carreras;
