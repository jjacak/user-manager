import { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import AuthContext from '../store/AuthContext';
import { isExpired, decodeToken } from 'react-jwt';
import useHttp from '../hooks/use-http';

const schema = yup.object().shape({
	password: yup.string().required('This field is required'),
	email: yup
		.string()
		.required('This field is required')
		.email('Invalid email format'),
});

const LoginForm = () => {
	const { isLoading, error, sendRequest } = useHttp();
	const context = useContext(AuthContext);
	return (
		<Formik
			validationSchema={schema}
			onSubmit={(val) => {
				const getResponse = (data) => {
					console.log(data);
					if (data.user) {
						localStorage.setItem('token', data.user);
						const decodedToken = decodeToken(data.user);
						context.logIn(decodedToken);
					}
				};
				sendRequest(
					{
						url: 'http://localhost:5500/api/login',
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: val,
					},
					getResponse
				);
			}}
			initialValues={{
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
				<Form noValidate onSubmit={handleSubmit}>
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
					<div className=" text-center">
						<Button type="submit">Confirm</Button>
					</div>

					{error && (
						<p className="text-danger text-center mt-3">
							Invalid login or password!
						</p>
					)}
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
