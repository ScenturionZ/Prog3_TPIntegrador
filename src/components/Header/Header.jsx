import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
			<LinkContainer to="/">
				<Navbar.Brand>Home</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<LinkContainer to="/institucion">
						<Nav.Link>Institucion</Nav.Link> 
					</LinkContainer>
					<LinkContainer to="/contacto">
						<Nav.Link>Contacto</Nav.Link> 
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Container>
		</Navbar>
	);
}

export default Header;