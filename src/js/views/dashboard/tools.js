import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card, Modal, Form, Button } from "react-bootstrap";

import "../../../styles/tools.scss";

export const Tools = props => {
	const { store, actions } = useContext(Context);

	const [modalShow, setModalShow] = React.useState(false);

	// const { register, handleSubmit } = useForm();

	let userId = useParams();

	const diagnostico = store.diagnosticos[parseInt(userId.id)];

	const [actividades, setActividades] = useState({
		ejercicio: "",
		descripcion: "",
		paciente: diagnostico.paciente
	});

	const handleActivity = e => {
		setActividades({
			...actividades,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		actions.createExercise(actividades);
	};

	console.log(diagnostico);

	return (
		<Container className="tools-container">
			<Row className="tools-row">
				<Col md={4} className="align-column-items">
					<Card className="toolCards">
						<Card.Header className="titleToolCards">Diagnóstico</Card.Header>
						<Card.Body className="spaceBetweenCards">
							<Card className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="columnCardTitle">{diagnostico.paciente}</Card.Title>
									<Card.Text>{diagnostico.diagnostico}</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="align-column-items">
					<Card className="toolCards">
						<Card.Header className="titleToolCards d-flex justify-content-md-between">
							Actividades
							<Link className="tool-button" onClick={() => setModalShow(true)}>
								➕
							</Link>
						</Card.Header>
						<Card.Body className="spaceBetweenCards">
							{store.ejercicios
								.filter(ejercicio => ejercicio.paciente == diagnostico.paciente)
								.map((ejercicio, index) => {
									return (
										<Card className="outerCard" key={index}>
											<Card.Body className="columnCardBody">
												<Card.Title className="columnCardTitle">
													{ejercicio.ejercicio}
												</Card.Title>
												<Card.Text>{ejercicio.descripcion}</Card.Text>
												<div className="d-flex justify-content-md-between">
													<button
														className="tool-button"
														onClick={() => {
															actions.borrarExercise(index);
														}}>
														✖
													</button>
												</div>
											</Card.Body>
										</Card>
									);
								})}
						</Card.Body>
					</Card>
				</Col>

				<Modal
					size="md"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={modalShow}
					onHide={() => setModalShow(false)}>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">Agregue una actividad:</Modal.Title>
					</Modal.Header>
					<Modal.Body className="custom-modal2">
						<Form onSubmit={handleSubmit}>
							<input
								className="form-control form-control-modal2"
								placeholder="Ejercicio"
								name="ejercicio"
								onChange={handleActivity}
							/>
							<input
								className="form-control form-control-modal2"
								placeholder="Descripción"
								name="descripcion"
								onChange={handleActivity}
							/>
							<Button className="d-flex ml-auto custom-btn-modal2" type="submit">
								Crear
							</Button>
						</Form>
					</Modal.Body>
				</Modal>
			</Row>
		</Container>
	);
};
