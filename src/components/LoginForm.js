import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
	password: yup.string().required(),
	email: yup.string().required().email(),
});

const LoginForm = () => {
	return (
		<Formik
			validationSchema={schema}
			onSubmit={(val) => console.group(val)}
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
					</Form.Group>
					<div className=" text-center">
						<Button type="submit">Confirm</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
