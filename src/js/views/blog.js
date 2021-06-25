import React from "react";
import { Container, Row, Col, Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

import img_card6 from "../../img/Insomnio.jpg";
import "../../styles/blog.scss";

import { Menu } from "../component/navbar";
import { Footer } from "../component/footer";

export const Blog = () => {
	return (
		<>
			<Menu />
			<Container>
				<Row>
					<Col md={10}>
						<Card className="custom-center-column">
							<Card.Header className="titleBlog">Insomnio</Card.Header>
							<Card.Body>
								<Card.Text>
									Los síntomas incluyen la dificultad para dormir o permanecer dormido, y la sensación
									de no haber descansado correctamente. El tratamiento para el insomnio consiste en
									mejorar los hábitos del sueño, identificar y tratar las causas subyacentes, y hacer
									terapias conductuales. También se pueden utilizar píldoras para dormir, pero se
									recomienda prestar atención a los efectos secundarios.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card className="custom-center-column2">
							<Card.Header className="titleBlog2">
								Si sufres insomnio, estos son algunos consejos que te pueden ayudar a combatirlo
								eficazmente:
							</Card.Header>
							<Card.Body>
								<Card.Text>
									<p>
										1. Lleva un control: Apúntate cuánto duermes y a qué horas, cuándo te
										despiertas, los síntomas que tienes y en qué momentos del día se presentan.
									</p>
									<p>
										2. Establece una rutina saludable: Encuentra alguna actividad que te relaje y/o
										agote justo antes de irte a la cama, evita ver la televisión o navegar por la
										red y establece unos horarios para acostarte y despertarte que sean adecuados.
									</p>
									<p>3. Utiliza la cama solo para dormir: No veas la tele ni comas en ella.</p>
									<p>4. Evita el tabaco, el alcohol y las bebidas excitantes.</p>
									<p>
										5. Haz ejercicio físico durante el día: Practicar deporte de forma regular
										durante el día mejora la calidad del sueño.
									</p>
									<p>
										6. Las siestas deben ser cortas para que no nos quiten el sueño por la noche, no
										deben durar más de 10 ó 20 minutos y nunca se debe dormir pasadas las 16:00
										horas.
									</p>
									<p>
										7. Practica técnicas de relajación, tales como la meditación, técnicas de
										respiración o la relajación progresiva pueden ser muy efectivas.
									</p>
									<p>
										8. Cuida tu dieta Evita las cenas copiosas de digestiones pesadas y toma
										infusiones relajantes naturales.
									</p>
									<p>
										9. Crea un ambiente adecuado: Reduce la intensidad de la luz unas 2 horas antes
										de irte a dormir.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={2}>
						<Card style={{ width: "18rem" }} className="custom-right-column">
							<Card.Img variant="top" src={img_card6} />
							<Card.Body>
								<Card.Text>
									Pedir ayuda nunca es fácil y creemos que es un acto de valentía. Nuestro objetivo es
									acompañarte durante este proceso y ayudarte a que te sientas mejor tanto contigo
									mismo como con los demás.
								</Card.Text>
								<Button className="right-column-button">Realiza el test!</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
};
