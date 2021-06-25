import React, { useState, useContext, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const Citas = () => {
	const { store, actions } = useContext(Context);
	const [citas, setCitas] = useState([]);
	let user_id_store = store.user.id;
	useEffect(() => {
		const get_citas = async () => {
			let response = await fetch(`http://192.168.42.161:3000/${user_id_store}/dates`);
			let result = await response.json();
			setCitas(result);
		};
		get_citas();
	}, []);

	return (
		<Container fluid>
			<Row>
				<Col className="text-center my-3">
					<h2>Citas</h2>
					<h3>Estas son tus citas:</h3>
				</Col>
			</Row>
			<Row>
				{citas.map((cita, i) => (
					<Col md={3} key={i}>
						<Card className="card-style">
							<Card.Body>
								<Card.Title>
									Medico: {cita.profesional.name} {cita.profesional.last_name}
								</Card.Title>
								<Card.Title>Dia: {cita.day_date}</Card.Title>
								<Card.Title>Hora: {cita.schedule}</Card.Title>
								<Card.Title>Via: {cita.via}</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};
