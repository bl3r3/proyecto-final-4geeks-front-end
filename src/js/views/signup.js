import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "../../styles/signup.scss";

export const SignupPage = () => {
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<Row>
				<Form>
					<Row>
						<Col>
							<Form.Group>
								<Form.Label>Fist Name</Form.Label>
								<Form.Control className="input-custom" type="text" placeholder="First name" />
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label>Last Name</Form.Label>
								<Form.Control className="input-custom" type="text" placeholder="Last name" />
							</Form.Group>
						</Col>
					</Row>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control className="input-custom" type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control className="input-custom" type="password" placeholder="Password" />
					</Form.Group>

					<Form.Group controlId="formGridState">
						<Form.Label>User Type</Form.Label>
						<Form.Control as="select" defaultValue="Choose...">
							<option>Patient</option>
							<option>Doctor</option>
						</Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.File id="exampleFormControlFile1" label="Select ID" />
					</Form.Group>

					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="I accept the terms and conditions" />
					</Form.Group>

					<Button className="btn-submit d-flex justify-content-center ml-auto" type="submit">
						Submit
					</Button>
				</Form>
			</Row>
		</Container>
	);
};
