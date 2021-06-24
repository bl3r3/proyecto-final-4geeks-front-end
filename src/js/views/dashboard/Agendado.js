import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const Agendado = () => {
	const { store, actions } = useContext(Context);

	console.log(store.agendado);
	return (
		<Container>
			<Row className="text-center">
				<Col>
					<h2 className="my-3">CITA AGENDADA</h2>
				</Col>
			</Row>
			<Row className="row-agendado">
				<Col>
					<div className="d-flex align-items-center justify-content-around agendado-data">
						<h2>Dia: {store.agendado.day_date}</h2>
						<h2>Horario: {store.agendado.schedule}</h2>
						<h2>Via: {store.agendado.via}</h2>
						<h2>
							Medico: {store.agendado.profesional.name} {store.agendado.profesional.last_name}
						</h2>
						<Link to="/dashboard/citas" className="btn btn-primary">
							Ver citas
						</Link>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
