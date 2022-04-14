import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import { useHistory } from 'react-router-dom';

const authReducer = (state, action) => {
	if (action.type === 'LOG_IN') {
		return { ...state, isLoggedIn: true };
	}
	if (action.type === 'LOG_OUT') {
		return { ...state, isLoggedIn: false };
	}
	if (action.type === 'ADD_USER') {
		const updatedUsers = [action.user, ...state.users];
		return { ...state, users: updatedUsers };
	}
	if (action.type === 'REMOVE_USER') {
	}
	if (action.type === 'BLOCK_USER') {
	}

	if (action.type === 'CLEAR') {
	} else {
		return { ...state };
	}
};
const DUMMY_USERS = [
	{
		id: 1,
		name: 'JohnD',
		email: 'john@mail.com',
		registered: '22-03-2022',
		lastLogin: '12-04-2022',
		status: 'active',
	},
	{
		id: 2,
		name: 'JaneD',
		email: 'jane@mail.com',
		registered: '15-03-2022',
		lastLogin: '10-04-2022',
		status: 'blocked',
	},

	{
		id: 3,
		name: 'user100',
		email: 'user@mail.com',
		registered: '22-01-2022',
		lastLogin: '12-02-2022',
		status: 'active',
	},
];
const defaultAuthState = { users: DUMMY_USERS, isLoggedIn: false }; //change default users to data fetched from backend

const AuthContextProvider = (props) => {
	const [authState, dispatchAuth] = useReducer(authReducer, defaultAuthState);
	const history = useHistory();

	const addUser = (user) => {
		dispatchAuth({ type: 'ADD_USER', user });
	};
	const deleteUser = (id) => {
		dispatchAuth({ type: 'REMOVE_USER', id });
	};

	const blockeUser = (id) => {
		dispatchAuth({ type: 'BLOCK_USER', id });
	};

	const deleteAllUsers = () => {
		dispatchAuth({ type: 'CLEAR' });
	};
	const logIn = () => {
		dispatchAuth({ type: 'LOG_IN' });
	};
	const logOut = () => {
		dispatchAuth({ type: 'LOG_OUT' });
		history.push('/');
	};

	const authContext = {
		users: authState.users,
		isLoggedIn: authState.isLoggedIn,
		addUser,
		deleteUser,
		blockeUser,
		deleteAllUsers,
		logIn,
		logOut,
	};

	return (
		<AuthContext.Provider value={authContext}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
