import React, { useContext, useEffect, useState } from 'react';
import UsersTable from '../components/UsersTable';
import UsersActions from '../components/UsersActions';
import AuthContext from '../store/AuthContext';
import NotAuthorized from './NotAuthorized';
import useHttp from '../hooks/use-http';

const AdminPanel = () => {
	const [users, setUsers] = useState();

	const context = useContext(AuthContext);
	const token = window.localStorage.getItem('token');
	const { isLoading, error, sendRequest: fetchUsers } = useHttp();

	const getSelectedUsers = (users) => {
		const selectedUsersId = users.map(u=>u.id);
		
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

	const deleteUser = () => {};

	return (
		<div>
			{context.isLoggedIn && token && <UsersActions />}
			{users && context.isLoggedIn && token && (
				<UsersTable users={users} getSelectedUsers={getSelectedUsers} />
			)}
			{(!context.isLoggedIn || !token) && NotAuthorized}
		</div>
	);
};

export default AdminPanel;
