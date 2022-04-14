import React, { useContext } from 'react';
import UsersTable from '../components/UsersTable';
import UsersActions from '../components/UsersActions';
import { useHistory } from 'react-router-dom';
import AuthContext from '../store/AuthContext';
import NotAuthorized from './NotAuthorized';

const AdminPanel = () => {
	const context = useContext(AuthContext);

	return (
		<div>
			{context.isLoggedIn && <UsersActions />}
			{context.isLoggedIn && <UsersTable />}
			{!context.isLoggedIn && NotAuthorized}
		</div>
	);
};

export default AdminPanel;
