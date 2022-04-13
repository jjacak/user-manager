import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import RegistrationForm from './pages/Registration';
import Navigation from './components/Navigation';
import AdminPanel from './pages/AdminPandel';
import Login from './pages/Login';

function App() {
	return (
		<Router>
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
					</Switch>
				</Container>
			</div>
		</Router>
	);
}

export default App;
