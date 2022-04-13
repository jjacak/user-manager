import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
				<Form>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="email">Username:</Form.Label>
						<Form.Control
							name="name"
							id="name"
							type="text"
							placeholder="Enter your username"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="password">Password:</Form.Label>
						<Form.Control
							name="password"
							id="password"
							type="password"
							placeholder="Enter your password"
						/>
					</Form.Group>
					<div className=" text-center">
						<Button type="submit">Confirm</Button>
					</div>
				</Form>
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
