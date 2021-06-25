import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card, Modal, Form, Button } from "react-bootstrap";

import "../../../styles/tools.scss";

export const Tools2 = props => {
	return (
		<Container className="tools-container">
			<Row className="tools-row">
				<Col md={4} className="align-column-items">
					<Card className="toolCards">
						<Card.Header className="titleToolCards">Diagnóstico</Card.Header>
						<Card.Body className="spaceBetweenCards">
							<Card className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="columnCardTitle">Roberto</Card.Title>
									<Card.Text>Tiene un pre-diagnóstico de altos niveles de estrés.</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="align-column-items">
					<Card className="toolCards">
						<Card.Header className="titleToolCards d-flex justify-content-md-between">
							Actividades
						</Card.Header>
						<Card.Body className="spaceBetweenCards">
							<Card className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="columnCardTitle">Ejercicio de meditacion</Card.Title>
									<Card.Text>Lo importante de esta actividad es concentrarse en...</Card.Text>
								</Card.Body>
							</Card>
							<Card className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="columnCardTitle">Ejercicio de respiracion</Card.Title>
									<Card.Text>Lo importante de esta actividad es concentrarse en...</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
