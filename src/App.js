import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import RegistrationForm from './pages/Registration';
import Navigation from './components/Navigation';
import AdminPanel from './pages/AdminPandel';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Container>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route exact path="/register">
						<RegistrationForm />
					</Route>
					<Route exact path="/admin">
						<AdminPanel />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Container>
		</div>
	);
}

export default App;
