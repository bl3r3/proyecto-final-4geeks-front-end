import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Modal, Card, CardDeck, Form, Button } from "react-bootstrap";

import "../../../styles/users.scss";

export const Users = () => {
	const { store, actions } = useContext(Context);

	const [modalShow, setModalShow] = React.useState(false);

	const { register, handleSubmit } = useForm();

	const onSubmit = data => actions.createReport(data);

	return (
		<Container className="dash-container">
			<Row className="dash-row">
				{store.diagnosticos.map((diagnostico, index) => (
					<Col className="first-col-dash" key={index}>
						<CardDeck>
							<Card className="card-dash">
								<Card.Body>
									<Card.Title>{diagnostico.paciente}</Card.Title>
									<Card.Text>{diagnostico.diagnostico}</Card.Text>
									<div className="d-flex justify-content-md-between">
										<Link to={`/dashboard/tools/${index}`}>Ver</Link>
										<Link
											to=""
											className="delete-button"
											onClick={() => {
												actions.borrarReport(index);
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
							<input className="form-control" placeholder="Diagnostico" {...register("diagnostico")} />
							<Button type="submit">Crear</Button>
						</Form>
					</Modal.Body>
				</Modal>
			</Row>
		</Container>
	);
};
