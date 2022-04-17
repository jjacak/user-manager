import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import Navigation from '../components/Navigation';
import * as yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import useHttp from '../hooks/use-http';

const schema = yup.object().shape({
	password: yup.string().required('This field is required.'),
	email: yup
		.string()
		.required('This field is required.')
		.email('Invalid email format.'),
	name: yup.string().required('This field is required.'),
});

const RegistrationForm = () => {
	const { isLoading, error, sendRequest } = useHttp();
	const [didRegister, setDidRegister] = useState(false);
	const history = useHistory();

	return (
		<React.Fragment>
			<Navigation />
			<Formik
				validationSchema={schema}
				onSubmit={(val, { resetForm }) => {
					const registrationDate = new Date().toISOString().substring(0, 10);
					const user = {
						...val,
						registered: registrationDate,
						status: 'active',
					};
					const getResponse = (data) => {
						if (!error) {
							setDidRegister(true);
							resetForm();
						}
					};
					sendRequest(
						{
							url: 'http://localhost:5500/api/register',
							method: 'POST',
							body: user,
							headers: { 'Content-Type': 'application/json' },
						},
						getResponse
					);
				}}
				initialValues={{
					name: '',
					email: '',
					password: '',
				}}
			>
				{({
					handleSubmit,
					handleChange,
					handleBlur,
					values,
					touched,
					isValid,
					errors,
				}) => (
					<Form
						noValidate
						onSubmit={handleSubmit}
						className="border  rounded p-3 mx-auto mt-5 shadow p-3"
						style={{
							width: '550px',
							maxWidth: '100%',
							borderColor: 'var(--bs-gray-300)',
						}}
					>
						<h2 className="mb-3 text-center">Create account</h2>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="name">Name:</Form.Label>
							<Form.Control
								name="name"
								id="name"
								type="text"
								placeholder="Enter your name"
								value={values.name}
								onChange={handleChange}
								isValid={touched.name && !errors.name}
								isInvalid={touched.name && !!errors.name}
								onBlur={handleBlur}
							/>
							<ErrorMessage name="name" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="email">Email:</Form.Label>
							<Form.Control
								name="email"
								id="email"
								type="email"
								placeholder="Enter your email"
								value={values.email}
								onChange={handleChange}
								isValid={touched.email && !errors.email}
								isInvalid={touched.email && !!errors.email}
								onBlur={handleBlur}
							/>
							<ErrorMessage name="email" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label htmlFor="password">Password:</Form.Label>
							<Form.Control
								name="password"
								id="password"
								type="password"
								placeholder="Enter your password"
								value={values.password}
								onChange={handleChange}
								isValid={touched.password && !errors.password}
								isInvalid={touched.password && !!errors.password}
								onBlur={handleBlur}
							/>
							<ErrorMessage name="password" />
						</Form.Group>
						<div className="mt-5 text-end">
							<Button
								className=""
								variant="outline-primary"
								type="reset"
								style={{ marginRight: '5px' }}
							>
								Clear
							</Button>
							<Button type="submit">
								{isLoading ? 'Sending...' : ' Confirm'}
							</Button>
						</div>
						{error && <p className="text-danger text-center mt-3">{error}</p>}
						{didRegister && (
							<p>
								Registration was successful.
								<Link to="/login" style={{ textDecoration: 'none' }}>
									{' '}
									Log in here.{' '}
								</Link>
							</p>
						)}
					</Form>
				)}
			</Formik>
		</React.Fragment>
	);
};
export default RegistrationForm;
