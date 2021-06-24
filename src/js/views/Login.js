import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Form, Button } from "react-bootstrap";
import "../../styles/signup.scss";
import { useForm } from "react-hook-form";

import { Menu } from "../component/navbar";
import { Footer } from "../component/footer";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const onSubmit = async data => {
		let push = await actions.log_in(data);
		if (push) {
			history.push("/dashboard");
		}
	};
	return (
		<>
			<Menu />
			<Container className="d-flex justify-content-center align-items-center vh">
				<Form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
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
			</Container>
			<Footer />
		</>
	);
};
