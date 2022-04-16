import React from 'react';

const AuthContext = React.createContext({
	isLoggedIn: false,
	user:null,
	logIn: () => {},
    logOut:()=>{}
});

export default AuthContext;
