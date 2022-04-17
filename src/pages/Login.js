import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import React from 'react';
import Navigation from '../components/Navigation';
import { isExpired, decodeToken } from 'react-jwt';

const Login = () => {
	const token = window.localStorage.getItem('token');
	const decodedToken = decodeToken(token);
	return (
		<React.Fragment>
			<Navigation />
			<Container>
				{!decodedToken && (
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
				)}
			</Container>
		</React.Fragment>
	);
};

export default Login;
