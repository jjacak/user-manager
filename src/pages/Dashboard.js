import React from 'react';
import Navigation from '../components/Navigation';
import { Container } from 'react-bootstrap';
import { isExpired, decodeToken } from 'react-jwt';

const Dashboard = () => {
	const token = window.localStorage.getItem('token');
	const decodedToken = decodeToken(token);
	return (
		<React.Fragment>
			<Navigation />
			<Container>
				{token && <h2 className="mt-4">Welcome back, {decodedToken.name}!</h2>}
				{!token && <h2 className="mt-4">Welcome, guest!</h2>}
			</Container>
		</React.Fragment>
	);
};
export default Dashboard;
