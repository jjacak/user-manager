import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import React from 'react';
import Navigation from '../components/Navigation';
import {decodeToken } from 'react-jwt';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const history = useHistory();
	const token = window.localStorage.getItem('token');
	const decodedToken = decodeToken(token);
	if (decodedToken) {
		history.push('/');
	}
	return (
		<React.Fragment>
			<Navigation />
			<Container>
				<Card
					className=" mx-auto mt-5 shadow"
					style={{
						width: '550px',
						maxWidth: '100%',
						borderColor: 'var(--bs-gray-300)',
					}}
				>
					<Card.Body>
						<Card.Title className="text-center">Sign in</Card.Title>
						<LoginForm />
						<Card.Text className="mt-3">
							Don't have an account yet?
							<Link to="/register" style={{ textDecoration: 'none' }}>
								{' '}
								Register here.
							</Link>
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</React.Fragment>
	);
};

export default Login;
