import { Card, Form, Button, Row } from 'react-bootstrap';

const RegistrationForm = () => {
	return (
			<Form className= 'border  rounded p-3 mx-auto mt-5 shadow p-3' style={{width:'550px', maxWidth:'100%',borderColor:'var(--bs-gray-300)'}}>
				<h2 className='mb-3 text-center'>Create account</h2>
				<Form.Group className="mb-3">
					<Form.Label htmlFor="name">Userame:</Form.Label>
					<Form.Control
						name="name"
						id="name"
						type="text"
						placeholder="Enter your name"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label htmlFor="email">Email:</Form.Label>
					<Form.Control
						name="email"
						id="email"
						type="email"
						placeholder="Enter your email"
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
				<div className='mt-5 text-end'>
                <Button className='' variant="outline-primary" type='reset' style={{marginRight:'5px'}}>Clear</Button>
                <Button type='submit'>Confirm</Button>
                </div>
			</Form>
	);
};
export default RegistrationForm;
