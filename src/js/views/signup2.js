import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "../../styles/signup.scss";

export const Signup2 = () => {
	const [data, setData] = useState({
		nombre: "",
		apellido: "",
		correo: "",
		clave: ""
	});

	const handleInputChange = e => {
		if (e.target.value.trim() != "") {
			console.log(e.target.value);
			setData({
				...data,
				[e.target.name]: [e.target.value]
			});
		} else {
			alert("El campo no puede estar vacío");
		}
	};

	const sendData = e => {
		e.preventDefault();
		console.log(data.nombre + " " + data.apellido);
	};
	return (
		<Container className="d-flex justify-content-center align-items-center vh">
			<Row>
				<Form onSubmit={sendData}>
					<Row>
						<Col>
							<Form.Group>
								<Form.Label>Fist Name</Form.Label>
								<Form.Control
									className="custom-input"
									type="text"
									name="nombre"
									placeholder="First name"
									onChange={handleInputChange}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									className="custom-input"
									type="text"
									name="apellido"
									placeholder="Last name"
									onChange={handleInputChange}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							className="custom-input"
							type="email"
							name="correo"
							placeholder="Enter email"
							onChange={handleInputChange}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							className="custom-input"
							type="password"
							name="clave"
							placeholder="Password"
							onChange={handleInputChange}
						/>
					</Form.Group>

					<Form.Group>
						<Form.File id="exampleFormControlFile1" label="Select ID" />
					</Form.Group>

					<Button className="d-flex justify-content-center ml-auto custom-btn" type="submit">
						Submit
					</Button>
				</Form>
			</Row>
		</Container>
	);
};
