import React from 'react';

const AuthContext = React.createContext({
    users:[],
	isLoggedIn: false,
	status: 'active',
	addUser: (user) => {},
	deleteUser: (id) => {},
	deleteAll: () => {},
	logIn: () => {},
    logOut:()=>{}
});

export default AuthContext;
