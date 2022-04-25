import { forwardRef, useRef, useState } from 'react'
import { Form, Schema, Button, ButtonToolbar, } from 'rsuite';

const { StringType } = Schema.Types;

const model = Schema.Model({
	name: StringType().isRequired('This field is required.'),
	email: StringType()
		.isEmail('Please enter a valid email address.')
		.isRequired('This field is required.'),
	password: StringType().isRequired('This field is required.'),
	verifyPassword: StringType()
		.addRule((value, data) => {
			if (value !== data.password) {
				return false;
			}
			return true;
		}, 'The two passwords do not match')
		.isRequired('This field is required.')
});

const TextField = forwardRef((props, ref) => {
	const { name, label, accepter, ...rest } = props;
	return (
		<Form.Group controlId={`${name}-4`} ref={ref}>
			<Form.ControlLabel>{label} </Form.ControlLabel>
			<Form.Control name={name} accepter={accepter} {...rest} />
		</Form.Group>
	);
});

export const VitrikushIhorForm = () => {
	const formRef = useRef();
	const [formValue, setFormValue] = useState({
		name: '',
		email: '',
		password: '',
		verifyPassword: ''
	});

	const handleSubmit = () => {
		if (!formRef.current.check()) {
			return;
		}
	};

	return (
		<div>
			<h2>VitrikushIhorForm</h2>
			<Form
				ref={formRef}
				onChange={setFormValue}
				formValue={formValue}
				model={model}
			>
				<TextField name="name" label="Name"
					placeholder="Enter your name" />
				<TextField name="email" label="Email"
					placeholder="Enter your email" />
				<TextField name="password" label="Password" type="password" autoComplete="off" 
					placeholder="Enter your password"/>
				<TextField
					name="verifyPassword"
					label="Verify password"
					type="password"
					autoComplete="off"
					placeholder="Enter your password again"
				/>
				<ButtonToolbar>
					<Button
						appearance="primary"
						onClick={handleSubmit}>
						Submit
					</Button>
				</ButtonToolbar>
				<Form.ErrorMessage></Form.ErrorMessage>
			</Form>
		</div>
	);
};