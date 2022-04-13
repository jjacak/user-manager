import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
	return (
		<Navbar bg="primary" expand="sm" variant="dark">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>TaskThree</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
						<Nav.Link href="#home">Logout</Nav.Link>
						<LinkContainer to="/admin">
							<Nav.Link>Admin panel</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
