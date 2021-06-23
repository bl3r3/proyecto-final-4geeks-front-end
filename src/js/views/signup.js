import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "../../styles/signup.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [name, setName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Container className="d-flex justify-content-center align-items-center vh">
			<Row>
				<Form>
					<Row>
						<Col>
							<Form.Group>
								<Form.Label>Fist Name</Form.Label>
								<Form.Control
									className="custom-input"
									type="text"
									placeholder="First name"
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									className="custom-input"
									type="text"
									placeholder="Last name"
									value={last_name}
									onChange={e => setLastName(e.target.value)}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							className="custom-input"
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							className="custom-input"
							type="password"
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Button
						className="d-flex justify-content-center ml-auto custom-btn"
						type="submit"
						onClick={async e => {
							let register = await actions.sign_up(name, last_name, email, password);
							if (register) {
								history.push("/login");
							} else {
								alert("Los datos son incorrectos o ya se encuentra registrado...");
							}
						}}>
						Submit
					</Button>
				</Form>
			</Row>
		</Container>
	);
};
