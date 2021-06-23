import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Card, CardDeck } from "react-bootstrap";

import "../../../styles/users.scss";

export const Users = () => {
	const [users, setUsers] = useState([]);
	const [newUser, setNewUser] = useState("");
	const [modalShow, setModalShow] = React.useState(false);

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
						<input
							className="form-control"
							placeholder="Nombre del paciente"
							value={newUser}
							onChange={e => {
								setNewUser(e.target.value);
							}}
							onKeyPress={e => {
								if (e.key == "Enter") {
									if (e.target.value.trim() != "") {
										setUsers([
											...users,
											{
												id: Math.random()
													.toString(16)
													.substring(2),
												title: newUser
											}
										]);
										setNewUser("");
									} else {
										alert("El campo no puede estar vacío");
									}
								}
							}}
						/>
					</Modal.Body>
				</Modal>
			</Row>
		</Container>
	);
};
