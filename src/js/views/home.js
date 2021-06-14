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
		<Container className="d-flex">
			<Row className="d-flex justify-content-center align-items-center">
				<Col md={5} center>
					<h1 className="title-custom">NEED SOME</h1>
					<h2 className="title-custom2">HELP?</h2>
					<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
					<div className="btn-section">
						<Link to="/test">
							<button className="btn-test">GO TEST</button>
						</Link>
						<Link to="/">
							<button className="btn-sign-in">SIGN IN</button>
						</Link>
					</div>
				</Col>
				<Col md={7}>
					<img src={img_main} width="120%" />
				</Col>
				<Col center>
					<h2 className="title-custom4">TERAPIA PSICOLÓGICA</h2>
					<h3>Encuentra al profesional que mejor se adapte a tus necesidades</h3>
					<br />
					<p>
						Si tienes un problema y te sientes superado, aquí encontrarás psicólogos que te ayudarán a
						alcanzar las soluciones que necesitas. Da el primer paso, contacta con un psicólogo y accede a
						un servicio profesional, de calidad y orientado a resultados.
					</p>
					<Image className="img-custom" src={img_section2} roundedCircle />
					<Image className="img-custom" src={img2_section2} roundedCircle />
					<Image className="img-custom" src={img3_section2} roundedCircle />
					<CardGroup>
						<Card className="cards-group-custom">
							<Card.Body>
								<Card.Title>Psicológos</Card.Title>
								<Card.Text>
									Profesionales con amplia experiencia en diversas áreas y enfoques terapéuticos.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card className="cards-group-custom">
							<Card.Body>
								<Card.Title>Online</Card.Title>
								<Card.Text>Plataforma que abre paso a la obtención de ayuda en línea.</Card.Text>
							</Card.Body>
						</Card>
						<Card className="cards-group-custom">
							<Card.Body>
								<Card.Title>Comodidad</Card.Title>
								<Card.Text>
									Todo desde tu navegador: calendario de citas, progreso, herramientas...
								</Card.Text>
							</Card.Body>
						</Card>
					</CardGroup>
				</Col>
				<Col>
					<Card className="first-card-custom">
						<Card.Body>
							<Card.Title variant="top">EMPEZAR TERAPIA</Card.Title>
							<ListGroup className="list-group-custom" variant="flush">
								<ListGroup.Item>Crea tu cuenta gratuita.</ListGroup.Item>
								<ListGroup.Item>Busca un profesional en el directorio de psicólogos.</ListGroup.Item>
								<ListGroup.Item>Elige modalidad de consulta y horario.</ListGroup.Item>
								<ListGroup.Item>Comienza la terapia.</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<h2 className="title-custom3">¡Herramientas que te pueden ayudar!</h2>
				{cards.map(card => (
					<ToolCard key={card.id} title={card.title} imgSource={card.image} />
				))}
			</Row>
		</Container>
	);
};

LandingPage.propTypes = {};
