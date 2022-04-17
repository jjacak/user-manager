import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import UsersTable from '../components/UsersTable';
import useHttp from '../hooks/use-http';
import Navigation from '../components/Navigation';
import { decodeToken } from 'react-jwt';
import { useHistory } from 'react-router-dom';

const AdminPanel = () => {
	const [users, setUsers] = useState();
	const { isLoading, error, sendRequest: fetchUsers } = useHttp();
	const {
		isLoading: actionIsLoading,
		error: actionError,
		sendRequest: sendAction,
	} = useHttp();
	const history = useHistory();

	const token = window.localStorage.getItem('token');
	const decodedToken = decodeToken(token);

	const getUserAction = (users, action) => {
		if (!users.length) {
			return;
		}
		const getResponse = (data) => {
			const userIndex = data.users.findIndex(
				(u) => u.email === decodedToken.email
			);
			if (userIndex === -1 || data.users[userIndex].status === 'blocked') {
				localStorage.removeItem('token');
			}
			setUsers(data.users);
		};
		sendAction(
			{
				url: `http://localhost:5500/api/updateusers`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-access-token': token,
				},
				body: { users, action },
			},
			getResponse
		);
	};
	useEffect(() => {
		if (error || actionError) {
			window.localStorage.removeItem('token');
			history.push('/login');
		}
	}, [error, actionError]);

	useEffect(() => {
		const abortController = new AbortController();
		const displayUsers = (data) => {
			setUsers(data.users);
		};
		fetchUsers(
			{
				url: 'http://localhost:5500/userlist',
				headers: {
					'Content-Type': 'application/json',
					'x-access-token':token,
				},
				abortControler: abortController,
			},
			displayUsers
		);
		return () => {
			abortController.abort();
		};
	}, [fetchUsers]);

	return (
		<React.Fragment>
			<Navigation />
			<Container>
				{users && decodedToken && (
					<UsersTable users={users} getUserAction={getUserAction} />
				)}
			</Container>
		</React.Fragment>
	);
};

export default AdminPanel;
