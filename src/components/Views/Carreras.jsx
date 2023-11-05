import { Col, Container, Row, Table } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

import { CarrerasContext } from "../context/CarrerasContext";
import TableContent from "../Generics/TableContent";

function Carreras() {
  const { carreras, setCarreras } = useContext(CarrerasContext);
  const [ tableHeader, setTableHeader] = useState({
    keys: []
  });

  function setKeys(keys) {
    setTableHeader({
      ...tableHeader,
      keys : keys
    });
  }

  useEffect(() => {
    if(carreras.length){
      setKeys(Object.keys(carreras[0]));
    }
  }, [carreras]);

  if (!carreras.length) {
    return () => {
      <div> Cargando ...</div>;
    };
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} xs={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {tableHeader.keys.map((key) => (
                    <th>{key}</th>
                  ))}
                <th>Acciones</th>
                </tr>
              </thead>
              <TableContent data={carreras} claves={tableHeader.keys} tipo={"carrera"} />
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
  /*
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
  );*/
}

export default Carreras;
