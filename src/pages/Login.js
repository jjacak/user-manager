import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
	return (
		<Card
			className=" mx-auto mt-5 shadow"
			style={{
				width: '550px',
				maxWidth: '100%',
				borderColor: 'var(--bs-gray-300)',
			}}
		>
			<Card.Body>
				<Card.Title className="text-center">Sign in</Card.Title>
				<LoginForm/>
				<Card.Text className="mt-3">
					Don't have an account yet?
					<Link to="/register" style={{ textDecoration: 'none' }}>
						{' '}
						Register here.
					</Link>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Login;
