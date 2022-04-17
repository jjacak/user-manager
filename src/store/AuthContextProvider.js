import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import { useHistory } from 'react-router-dom';
import { isExpired, decodeToken } from 'react-jwt';

const authReducer = (state, action) => {
	if (action.type === 'LOG_IN') {
		return { ...state, isLoggedIn: true, user: action.user };
	}
	if (action.type === 'LOG_OUT') {
		return { ...state, isLoggedIn: false, user: null };
	} else {
		return { ...state };
	}
};

const token = window.localStorage.getItem('token');
const defaultAuthState = {
	isLoggedIn: localStorage.getItem('token') ? true : false,
	user: localStorage.getItem('token') ? decodeToken(token) : null,
};

const AuthContextProvider = (props) => {
	const [authState, dispatchAuth] = useReducer(authReducer, defaultAuthState);
	const history = useHistory();

	const logIn = (user) => {
		if (!window.localStorage.getItem('token')) {
			return;
		}
		dispatchAuth({ type: 'LOG_IN', user });
	};
	const logOut = () => {
		dispatchAuth({ type: 'LOG_OUT' });
		window.localStorage.removeItem('token');
		history.push('/login');
	};

	const authContext = {
		isLoggedIn: authState.isLoggedIn,
		user: authState.user,
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
