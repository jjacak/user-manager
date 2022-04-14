import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';

const Navigation = () => {
	const context = useContext(AuthContext)
	return (
		<Navbar bg="primary" expand="sm" variant="dark">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>TaskThree</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{!context.isLoggedIn &&<LinkContainer to="/">
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>}
						{context.isLoggedIn && <Nav.Link onClick ={()=>context.logOut()}>Logout</Nav.Link>}
						{context.isLoggedIn && <LinkContainer to="/admin">
							<Nav.Link>Admin panel</Nav.Link>
						</LinkContainer>}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
