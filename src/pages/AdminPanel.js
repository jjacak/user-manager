import React, {useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import UsersTable from '../components/UsersTable';
import NotAuthorized from './NotAuthorized';
import useHttp from '../hooks/use-http';
import Navigation from '../components/Navigation';
import { isExpired, decodeToken } from 'react-jwt';

const AdminPanel = () => {
	const [users, setUsers] = useState();
	const token = window.localStorage.getItem('token');
	const { isLoading, error, sendRequest: fetchUsers } = useHttp();
	const {
		isLoading: actionIsLoading,
		error: actionError,
		sendRequest: sendAction,
	} = useHttp();

	const getUserAction = (users, action) => {
		if (!users.length) {
			return;
		}
		const getResponse = (data) => {
			setUsers(data.users);
			const decodedToken = decodeToken(token);
			const currentUserIndex = data.users.findIndex(
				(u) => u.email === decodedToken.email
			);
			if (currentUserIndex === -1) {
				alert('Sorry, your account has been deleted.');
				window.localStorage.removeItem('token');
			}
		};
		sendAction(
			{
				url: `http://localhost:5500/api/${action}`,
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: { users },
			},
			getResponse
		);
	};
	useEffect(() => {
		const displayUsers = (data) => {
			setUsers(data.users);
		};
		fetchUsers(
			{
				url: 'http://localhost:5500/userlist',
				headers: { 'Content-Type': 'application/json' },
			},
			displayUsers
		);
	}, [fetchUsers]);

	return (
		<React.Fragment>
			<Navigation />
			<Container>
				{users && token && (
					<UsersTable users={users} getUserAction={getUserAction} />
				)}
				{!token && NotAuthorized}
			</Container>
		</React.Fragment>
	);
};

export default AdminPanel;
