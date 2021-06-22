import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Agendado = () => {
	const { store, actions } = useContext(Context);

	console.log(store.agendado);
	return (
		<Container>
			<Row>
				<Col>
					<h2>CITA AGENDADA</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<h2>Dia: {store.agendado.day_date}</h2>
					<h2>Horario: {store.agendado.schedule}</h2>
					<h2>Via: {store.agendado.via}</h2>
					<h2>
						Medico: {store.agendado.profesional.name} {store.agendado.profesional.last_name}
					</h2>
				</Col>
				<Link to="/dashboard/citas">Ver citas</Link>
			</Row>
		</Container>
	);
};
