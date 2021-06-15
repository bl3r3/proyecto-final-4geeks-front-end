import React from "react";
import { ToolCard } from "../component/cards.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Button, ListGroup, CardGroup, Image } from "react-bootstrap";
import img_main from "../../img/drawkit.png";
import img_card from "../../img/Meditacion.jpg";
import img_card2 from "../../img/Respiracion.jpg";
import img_card3 from "../../img/Concentracion.jpg";
import img_section2 from "../../img/Psicologos.jpg";
import img2_section2 from "../../img/Online.jpg";
import img3_section2 from "../../img/Comodidad.jpg";

import "../../styles/home.scss";

export const LandingPage = props => {
	const cards = [
		{
			id: 1,
			title: "Meditación",
			image: img_card
		},
		{
			id: 2,
			title: "Respiración",
			image: img_card2
		},
		{
			id: 3,
			title: "Concentración",
			image: img_card3
		}
	];
	return (
		<Container className="">
			<Row className="d-flex justify-content-center align-items-center">
				<Col md={5} center>
					<h1 className="custom-title">NEED SOME</h1>
					<h2 className="custom-title2">HELP?</h2>
					<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
					<div className="btn-section">
						<Link to="/test">
							<button className="test-btn">GO TEST</button>
						</Link>
						<Link to="/dashboard">
							<button className="sign-in-btn">SIGN IN</button>
						</Link>
					</div>
				</Col>
				<Col md={7}>
					<img src={img_main} width="120%" />
				</Col>
				<Col center>
					<h2 className="custom-title3">TERAPIA PSICOLÓGICA</h2>
					<h3>Encuentra al profesional que mejor se adapte a tus necesidades</h3>
					<br />
					<p>
						Aquí encontrarás psicólogos que te ayudarán a alcanzar las soluciones que necesitas. Da el
						primer paso, contacta y accede a un servicio profesional, de calidad y orientado a resultados.
					</p>
					<Image className="custom-image" src={img_section2} roundedCircle />
					<Image className="custom-image" src={img2_section2} roundedCircle />
					<Image className="custom-image" src={img3_section2} roundedCircle />
					<CardGroup>
						<Card className="custom-cards-group">
							<Card.Body>
								<Card.Title>Psicológos</Card.Title>
							</Card.Body>
						</Card>
						<Card className="custom-cards-group">
							<Card.Body>
								<Card.Title>Plataforma Online</Card.Title>
							</Card.Body>
						</Card>
						<Card className="custom-cards-group">
							<Card.Body>
								<Card.Title>Comodidad</Card.Title>
							</Card.Body>
						</Card>
					</CardGroup>
				</Col>
				<Col>
					<Card className="custom-left-card">
						<Card.Body>
							<Card.Title className="custom-title4" variant="top">
								EMPEZAR TERAPIA
							</Card.Title>
							<Card.Text>En tan solo 5 pasos...</Card.Text>
							<ListGroup variant="flush">
								<ListGroup.Item className="d-flex align-items-center custom-list-group">
									<div className="number-block">1</div>
									Realiza el test.
								</ListGroup.Item>
								<ListGroup.Item className="d-flex align-items-center custom-list-group">
									<div className="number-block">2</div>
									Crea tu cuenta gratuita.
								</ListGroup.Item>
								<ListGroup.Item className="d-flex align-items-center custom-list-group">
									<div className="number-block">3</div>
									Selecciona un profesional.
								</ListGroup.Item>
								<ListGroup.Item className="d-flex align-items-center custom-list-group">
									<div className="number-block">4</div>
									Elige Fecha y Hora.
								</ListGroup.Item>
								<ListGroup.Item className="d-flex align-items-center custom-list-group">
									<div className="number-block">5</div>
									Comienza la terapia.
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<h2 className="custom-title5">¡Herramientas que te pueden ayudar!</h2>
				{cards.map(card => (
					<ToolCard key={card.id} title={card.title} imgSource={card.image} />
				))}
			</Row>
		</Container>
	);
};

LandingPage.propTypes = {};
