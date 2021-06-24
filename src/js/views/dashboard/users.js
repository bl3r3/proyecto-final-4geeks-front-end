import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Card, CardDeck, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import "../../../styles/users.scss";

export const Users = () => {
	const [users, setUsers] = useState([]);
	const [newUser, setNewUser] = useState("");
	const [modalShow, setModalShow] = React.useState(false);
	const { register, handleSubmit } = useForm();

	const onSubmit = data => console.log(data);

	return (
		<Container className="dash-container">
			<Row className="dash-row">
				{users.map(user => (
					<Col className="first-col-dash" key={user.id}>
						<CardDeck>
							<Card className="card-dash">
								<Card.Body>
									<Card.Title>{user.title}</Card.Title>
									<Card.Text>
										Diagnóstico: Contrary to popular belief, Lorem Ipsum is not simply random text.
									</Card.Text>
									<div className="d-flex justify-content-md-between">
										<Card.Link href="/dashboard/tools">Ver</Card.Link>
										<Link
											className="delete-button"
											onClick={e => {
												let filterUsers = users.filter(u => u.id != user.id);
												setUsers(filterUsers);
											}}>
											Borrar
										</Link>
									</div>
								</Card.Body>
							</Card>
						</CardDeck>
					</Col>
				))}

				<Col>
					<Link className="add-button" onClick={() => setModalShow(true)}>
						➕ Agregar
					</Link>
				</Col>
				<Modal
					size="md"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={modalShow}
					onHide={() => setModalShow(false)}>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">Ingrese el paciente:</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<input
								className="form-control"
								placeholder="Nombre del paciente"
								{...register("paciente")}
							/>
							<input
								className="form-control"
								placeholder="Nombre del paciente"
								{...register("diagnostico")}
							/>
							<Button type="submit">Crear</Button>
						</Form>
					</Modal.Body>
				</Modal>
			</Row>
		</Container>
	);
};
