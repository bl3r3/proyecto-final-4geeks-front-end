import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FormAgendar } from "../../component/FormAgendar";
import { useParams } from "react-router-dom";

export const Agendar = () => {
	const { id } = useParams();

	return (
		<Container fluid>
			<Row>
				<Col className="my-3 text-center">
					<h2>Agendar cita</h2>
				</Col>
			</Row>
			<Row>
				<FormAgendar profesionalId={id} />
			</Row>
		</Container>
	);
};
