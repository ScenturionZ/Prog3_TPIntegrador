import './Header.css';

import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap'
import { useState } from 'react';

function Header() {
	const [type, setType] = useState('');
	const [isLogged, setIsLogged] = useState(false);

	return (
		<Navbar expand="lg" bg="dark" data-bs-theme="dark">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>
						<Image
							src='/unerLogo.png'
							width={"50rem"}
						/>
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto my-2 my-lg-0">
						{filterUserType(type)}
						<LinkContainer to="/institucion">
							<Nav.Link>Institucion</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contacto">
							<Nav.Link>Contacto</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav>
						<NavDropdown title="Perfil">
							{isUserLoggedIn(isLogged)}
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

function filterUserType(type) {
		switch (type) {
			case 'ADMIN':
				return (
					<NavDropdown title="Consultas/Modificaciones">
						<NavDropdown.Item href="/">Carreras</NavDropdown.Item>
						<NavDropdown.Item href="/">Materias</NavDropdown.Item>
						<NavDropdown.Item href="/">Estudiantes</NavDropdown.Item>
					</NavDropdown>
				)
			case 'ESTUDIANTE':
				return (
					<NavDropdown title="Inscripciones">
						<NavDropdown.Item href="/">Carreras</NavDropdown.Item>
						<NavDropdown.Item href="/">Materias</NavDropdown.Item>
					</NavDropdown>
				)
			case 'DECANO':
				return (
					<LinkContainer to="/estadisticas">
						<Nav.Link>Estadisticas</Nav.Link>
					</LinkContainer>
				)
			default:
				return (<></>);
		}
}

function isUserLoggedIn(isLogged) {
	if (isLogged) {
		return (<>
			<NavDropdown.Item href="/">Ver/editar</NavDropdown.Item>
			<NavDropdown.Item href="/">Historia academica</NavDropdown.Item>
		</>)
	}
	return (<>
		<NavDropdown.Item href="/inicioSesion">Iniciar sesion</NavDropdown.Item>
		<NavDropdown.Item href="/registro">Registrarse</NavDropdown.Item>
	</>)
}


export default Header;