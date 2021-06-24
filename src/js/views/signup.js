import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import "../../styles/signup.scss";
import { Menu } from "../component/navbar";
import { Footer } from "../component/footer";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const onSubmit = async data => {
		let push = await actions.create_user(data);
		if (push) {
			history.push("/login");
		}
	};

	return (
		<>
			<Menu />
			<Container className="d-flex justify-content-center align-items-center vh">
				<Row>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label>Fist Name</Form.Label>
									<Form.Control
										className="custom-input"
										type="text"
										placeholder="First name"
										{...register("name")}
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
										{...register("last_name")}
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
								{...register("email")}
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								className="custom-input"
								type="password"
								placeholder="Password"
								{...register("password")}
							/>
						</Form.Group>

						<Button className="d-flex justify-content-center ml-auto custom-btn" type="submit">
							Submit
						</Button>
					</Form>
				</Row>
			</Container>
			<Footer />
		</>
	);
};
