import React from "react";
import { ToolCard } from "../component/cards.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Button, ListGroup, CardGroup, Image, CardDeck } from "react-bootstrap";

import "../../styles/board.scss";

export const Board = props => {
	return (
		<Container className="" style={{ height: "100%", flex: "0 0 50" }}>
			<Row className="justify-content-center align-items-start" style={{ height: "100%" }}>
				<Col md={3} center style={{ height: "90%" }} className="align-items-start">
					<Card border="light" bg="trasnsparent" className="boardCard">
						<Card.Header className="boardCardTitle">Problema</Card.Header>
						<Card.Body className="columnCard">
							<Card text="dark" className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="cardTitle">Problema 1</Card.Title>
									<Card.Text>
										Aqui va un problema ya registrado y hay que agregar un boton para pasarlo a la
										seccion por tratar
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>

						<Card.Body className="columnCard">
							<Card text="dark" className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="cardTitle">Problema 1</Card.Title>
									<Card.Text>
										Aqui va un problema ya registrado y hay que agregar un boton para pasarlo a la
										seccion por tratar
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>

						<Card.Body className="columnCard">
							<Card text="dark" className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="cardTitle">Problema 1</Card.Title>
									<Card.Text>
										Aqui va un problema ya registrado y hay que agregar un boton para pasarlo a la
										seccion por tratar
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>

				<Col md={3} center style={{ height: "90%" }} className="align-items-start">
					<Card border="light" bg="trasnsparent" className="boardCard">
						<Card.Header className="boardCardTitle">Por tratar</Card.Header>
						<Card.Body className="columnCard">
							<Card text="dark" className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="cardTitle">Problema 1</Card.Title>
									<Card.Text>
										Aqui va un problema ya registrado y hay que agregar un boton para pasarlo a la
										seccion por tratar
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>

				<Col md={3} center style={{ height: "90%" }} className="align-items-start">
					<Card border="light" bg="trasnsparent" className="boardCard">
						<Card.Header className="boardCardTitle">Tratado</Card.Header>
						<Card.Body className="columnCard">
							<Card text="dark" className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="cardTitle">Problema 1</Card.Title>
									<Card.Text>
										Aqui va un problema ya registrado y hay que agregar un boton para pasarlo a la
										seccion por tratar
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>

						<Card.Body className="columnCard">
							<Card text="dark" className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="cardTitle">Problema 1</Card.Title>
									<Card.Text>
										Aqui va un problema ya registrado y hay que agregar un boton para pasarlo a la
										seccion por tratar
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>

				<Col md={3} center style={{ height: "90%" }} className="align-items-start">
					<Card border="light" bg="trasnsparent" className="boardCard">
						<Card.Header className="boardCardTitle">Bitacora</Card.Header>
						<Card.Body className="columnCard">
							<Card text="dark" className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="cardTitle">Problema 1</Card.Title>
									<Card.Text>
										Aqui va un problema ya registrado y hay que agregar un boton para pasarlo a la
										seccion por tratar
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>

						<Card.Body className="columnCard">
							<Card text="dark" className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="cardTitle">Problema 1</Card.Title>
									<Card.Text>
										Aqui va un problema ya registrado y hay que agregar un boton para pasarlo a la
										seccion por tratar
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>

						<Card.Body className="columnCard">
							<Card text="dark" className="outerCard">
								<Card.Body className="columnCardBody">
									<Card.Title className="cardTitle">Problema 1</Card.Title>
									<Card.Text>
										Aqui va un problema ya registrado y hay que agregar un boton para pasarlo a la
										seccion por tratar
									</Card.Text>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
