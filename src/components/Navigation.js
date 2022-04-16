import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';

const Navigation = () => {
	const history = useHistory();
	const token = window.localStorage.getItem('token');
	const logOut = () => {
		window.localStorage.removeItem('token');
		history.push('/dashboard');
	};
	return (
		<Navbar bg="primary" expand="sm" variant="dark">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>TaskThree</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{!token && (
							<LinkContainer to="/">
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
						)}
						{token && <Nav.Link onClick={() => logOut()}>Logout</Nav.Link>}
						{token && (
							<LinkContainer to="/admin">
								<Nav.Link>Admin panel</Nav.Link>
							</LinkContainer>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
