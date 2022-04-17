import React from 'react';
import Navigation from '../components/Navigation';
import { Container } from 'react-bootstrap';
import { decodeToken } from 'react-jwt';

const Dashboard = () => {
	const token = window.localStorage.getItem('token');
	const decodedToken = decodeToken(token);
	return (
		<React.Fragment>
			<Navigation />
			<Container>
				<h2 className="mt-4">
					Welcome{decodedToken? ` back, ${decodedToken.name}!` : ', guest.'}
				</h2>
			</Container>
		</React.Fragment>
	);
};
export default Dashboard;
