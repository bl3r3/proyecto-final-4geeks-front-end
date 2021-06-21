import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export const Citas = () => {
	const [citas, setCitas] = useState([]);
	useEffect(() => {
		const get_citas = async () => {
			let response = await fetch("http://192.168.42.161:3000/8/dates");
			let result = await response.json();
			setCitas(result);
		};
		get_citas();
	}, []);

	return (
		<Container fluid>
			<Row>
				<Col>
					<h2 className="text-center my-3">Citas</h2>
				</Col>
			</Row>
			<Row>
				{citas.map((cita, i) => (
					<Col md={3} key={i}>
						<Card style={{ width: "18rem" }}>
							<Card.Body>
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
