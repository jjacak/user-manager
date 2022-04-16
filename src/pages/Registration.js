import { Form, Button, Row } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
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
	const history = useHistory();
	return (
		<Formik
			validationSchema={schema}
			onSubmit={(val) => {
				const registrationDate = new Date().toISOString().substring(0, 10);
				const user = { ...val, registered: registrationDate, status:'active' };
				const getResponse = (data) => {
					if(!error){
						history.push('/');
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
				// const response = await fetch('http://localhost:5500/api/register', {
				// 	method: 'POST',
				// 	headers: { 'Content-Type': 'application/json' },
				// 	body: JSON.stringify(user),
				// });
				// const data = await response.json();
				// if (data.status === 'ok') {
				// 	history.push('/');
				// } else {
				// 	alert(data.error);
				// }
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
						<Button type="submit">Confirm</Button>
					</div>
					{error&&<p className='text-danger text-center mt-3'>{error}</p>}
				</Form>
			)}
		</Formik>
	);
};
export default RegistrationForm;
