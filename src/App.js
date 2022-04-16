import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './pages/Registration';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/dashboard">
					<Dashboard />
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
		</div>
	);
}

export default App;
