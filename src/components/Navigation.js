import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

const Navigation = () => {
	const history = useHistory();
	const token = window.localStorage.getItem('token');
	const decodedToken = decodeToken(token);

	const logOut = () => {
		window.localStorage.removeItem('token');
		history.push('/login');
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
						{!decodedToken && (
							<LinkContainer to="/login">
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
						)}
						{decodedToken && (
							<Nav.Link onClick={() => logOut()}>Logout</Nav.Link>
						)}
						{decodedToken && (
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
