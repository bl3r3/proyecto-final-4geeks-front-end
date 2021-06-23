import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";

import "../../../styles/tools.scss";

export const Tools = props => {
	const [exercises, setExercises] = useState([]);
	const [newExercise, setNewExercise] = useState("");
	const [modalShow, setModalShow] = React.useState(false);

	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState("");

	return (
		<Container className="tools-container">
			<Row className="tools-row">
				<Col md={4} className="align-column-items">
					<Card className="toolCards">
						<Card.Header className="titleToolCards">Diagnóstico</Card.Header>
						<Card.Body className="spaceBetweenCards">
							<Card className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="columnCardTitle">Paciente</Card.Title>
									<Card.Text>
										Contrary to popular belief, Lorem Ipsum is not simply random text.
									</Card.Text>
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
							{exercises.map(exercise => (
								<Card className="outerCard" key={exercise.id}>
									<Card.Body className="columnCardBody">
										<Card.Title className="columnCardTitle">{exercise.title}</Card.Title>
										<Card.Text>
											Contrary to popular belief, Lorem Ipsum is not simply random text.
										</Card.Text>
										<div className="d-flex justify-content-md-between">
											<Link>✔</Link>
											<Link
												className="tool-button"
												onClick={e => {
													let filterExercises = exercises.filter(e => e.id != exercise.id);
													setExercises(filterExercises);
												}}>
												✖
											</Link>
										</div>
									</Card.Body>
								</Card>
							))}
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="align-column-items">
					<Card className="toolCards">
						<Card.Header className="titleToolCards">Progreso</Card.Header>
						<Card.Body className="spaceBetweenCards">
							<Card className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="columnCardTitle">Ejercicio 1</Card.Title>
									<Card.Text>
										Contrary to popular belief, Lorem Ipsum is not simply random text.
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
						<Card.Body className="spaceBetweenCards">
							<Card className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="columnCardTitle">Ejercicio 2</Card.Title>
									<Card.Text>
										Contrary to popular belief, Lorem Ipsum is not simply random text.
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
						<Card.Body className="spaceBetweenCards">
							<Card className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="columnCardTitle">Ejercicio 3</Card.Title>
									<Card.Text>
										Contrary to popular belief, Lorem Ipsum is not simply random text.
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
						<Card.Body className="spaceBetweenCards">
							<Card className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="columnCardTitle">Ejercicio 4</Card.Title>
									<Card.Text>
										Contrary to popular belief, Lorem Ipsum is not simply random text.
									</Card.Text>
								</Card.Body>
							</Card>
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
					<Modal.Body>
						<input
							placeholder="Nombre del ejercicio"
							value={newExercise}
							onChange={e => {
								setNewExercise(e.target.value);
							}}
							onKeyPress={e => {
								if (e.key == "Enter") {
									if (e.target.value.trim() != "") {
										setExercises([
											...exercises,
											{
												id: Math.random()
													.toString(16)
													.substring(2),
												title: newExercise
											}
										]);
										setNewExercise("");
									} else {
										alert("El campo no puede estar vacío");
									}
								}
							}}
						/>
					</Modal.Body>
				</Modal>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col className="d-flex justify-content-center align-column-items2">
					<Card className="toolCards2">
						<Card.Header className="titleToolCards">Bitácora</Card.Header>
						<Card.Body className="spaceBetweenCards">
							<Card className="logbook">
								<Card.Body className="columnCardBody">
									<input
										className="form-control"
										placeholder="Aquí puedes anotar tus pensamientos."
										value={newItem}
										onChange={e => setNewItem(e.target.value)}
										onKeyPress={e => {
											if (e.key == "Enter") {
												if (e.target.value.trim() != "") {
													setItems([
														...items,
														{
															id: Math.random()
																.toString(16)
																.substring(2),
															label: newItem
														}
													]);
													setNewItem("");
												} else {
													alert("El campo no puede estar vacío");
												}
											}
										}}
									/>
									<ul>
										{items.map(item => (
											<li key={item.id}>
												{item.label}
												<Link
													className="tool-button"
													onClick={e => {
														let filterItems = items.filter(i => i.id != item.id);
														setItems(filterItems);
													}}>
													✖
												</Link>
											</li>
										))}
									</ul>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
