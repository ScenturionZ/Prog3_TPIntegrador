import "./Header.css";

import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { UsersContext } from "../Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const { User, setUser, Authenticated, setAuthenticated } =
    useContext(UsersContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setAuthenticated(false);
    setUser({
      id: " ",
      nombre: " ",
      apellido: " ",
      correoElectronico: " ",
      idTipoUsuario: " ",
    });
    navigate("/");
  };

  const handleClick = (e) => {
    console.log(e);
    const { name } = e.target;
    navigate(`/${name}`);
  };

  const isUserLoggedIn = (val) => {
    if (val) {
      if (User.idTipoUsuario === "Bedel") {
        return (
          <>
            <NavDropdown.Item onClick={handleClick} name="perfil">
              Perfil
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleClick} name="registro-estudiante">
			Agregar estudiantes
            </NavDropdown.Item>
          </>
        );
      } else {
        return (
          <>
            <NavDropdown.Item onClick={handleClick} name="perfil">
              Perfil
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleClick} name="historia">
              Historia academica
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleSignOut}>Salir</NavDropdown.Item>
          </>
        );
      }
    }
    return (
      <>
        <NavDropdown.Item href="/inicio-sesion">
          Iniciar sesion
        </NavDropdown.Item>
        <NavDropdown.Item href="/registro">Registrarse</NavDropdown.Item>
      </>
    );
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image src="/unerLogo.png" width={"50rem"} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            {filterUserType(User.idTipoUsuario)}
            <LinkContainer to="/institucion">
              <Nav.Link>Institucion</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <NavDropdown title="Perfil">
              {isUserLoggedIn(Authenticated)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function filterUserType(type) {
  switch (type) {
    case "Bedel":
      return (
        <NavDropdown title="Consultas/Modificaciones">
          <NavDropdown.Item href="/carreras">Carreras</NavDropdown.Item>
          <NavDropdown.Item href="/materias">Materias</NavDropdown.Item>
          <NavDropdown.Item href="/estudiantes">Estudiantes</NavDropdown.Item>
        </NavDropdown>
      );
    case "Estudiante":
      return (
        <NavDropdown title="Inscripciones">
          <NavDropdown.Item href="/carreras">Carreras</NavDropdown.Item>
          <NavDropdown.Item href="/materias">Materias</NavDropdown.Item>
        </NavDropdown>
      );
    case "Decano":
      return (
        <LinkContainer to="/estadisticas">
          <Nav.Link>Estadisticas</Nav.Link>
        </LinkContainer>
      );
    default:
      return <></>;
  }
}

export default Header;
