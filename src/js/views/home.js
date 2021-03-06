import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, ListGroup, CardGroup, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Menu } from "../component/navbar";
import { Footer } from "../component/footer";

import img_main from "../../img/drawkit.png";
import img_card from "../../img/Meditacion.jpg";
import img_card2 from "../../img/Respiracion.jpg";
import img_card3 from "../../img/Concentracion.jpg";
import img_card4 from "../../img/Comunicacion.jpg";
import img_card5 from "../../img/Relajacion.jpg";
import img_card6 from "../../img/Insomnio.jpg";
import img_section2 from "../../img/Psicologos.jpg";
import img2_section2 from "../../img/Online.jpg";
import img3_section2 from "../../img/Comodidad.jpg";

import "../../styles/home.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const LandingPage = () => {
	return (
		<>
			<Menu />
			<Container className="">
				<Row className="d-flex justify-content-center align-items-center">
					<Col md={5} center>
						<h1 className="custom-title">NECESITAS</h1>
						<h2 className="custom-title2">AYUDA?</h2>
						<h3>Servicios de psicología para pacientes y psicólogos</h3>
						<div className="btn-section">
							<Link to="/test">
								<button className="test-btn">GO TEST</button>
							</Link>
							<Link to="/login">
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
							primer paso, contacta y accede a un servicio profesional, de calidad y orientado a
							resultados.
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
					<Swiper
						spaceBetween={-20}
						slidesPerView={3}
						navigation
						onSlideChange={() => console.log("slide change")}
						onSwiper={swiper => console.log(swiper)}
						className="custom-swiper">
						<SwiperSlide>
							<Card className="custom-cards">
								<Card.Img variant="top" src={img_card} />
								<Card.Body>
									<Card.Title>Meditación</Card.Title>
									<Card.Text>
										En su esencia, la meditación es un ejercicio mental con el que, a través de la
										atención, entrenamos nuestra mente para llevarla a un estado de paz, calma y
										serenidad interior.
									</Card.Text>
									<Button className="d-flex ml-auto btn-see-more" variant="light">
										Leer más
									</Button>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className="custom-cards">
								<Card.Img variant="top" src={img_card2} />
								<Card.Body>
									<Card.Title>Respiración</Card.Title>
									<Card.Text>
										Los psicólogos recomiendan la respiración diafragmática como una de las técnicas
										más efectivas para liberar estrés, apaciguar estados emocionales, y regular la
										ansiedad.
									</Card.Text>
									<Button className="d-flex ml-auto" variant="light">
										Leer más
									</Button>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Last updated a week ago</small>
								</Card.Footer>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className="custom-cards">
								<Card.Img variant="top" src={img_card3} />
								<Card.Body>
									<Card.Title>Concentración</Card.Title>
									<Card.Text>
										La concentración mental es la capacidad que tenemos los humanos para fijar
										nuestra atención sobre una actividad, objeto o idea sin ninguna distracción.
									</Card.Text>
									<Button className="d-flex ml-auto" variant="light">
										Leer más
									</Button>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Last updated 2 weeks ago</small>
								</Card.Footer>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className="custom-cards">
								<Card.Img variant="top" src={img_card4} />
								<Card.Body>
									<Card.Title>Comunicación</Card.Title>
									<Card.Text>
										En el caso de las familias la comunicación, además de brindar información, será
										una forma de conectar y dar a conocer los sentimientos entre sus miembros.
									</Card.Text>
									<Button className="d-flex ml-auto" variant="light">
										Leer más
									</Button>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Last updated 3 weeks ago</small>
								</Card.Footer>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className="custom-cards">
								<Card.Img variant="top" src={img_card5} />
								<Card.Body>
									<Card.Title>Relajación</Card.Title>
									<Card.Text>
										Las técnicas de relajación pueden reducir los síntomas del estrés y ayudarte a
										disfrutar de una mejor calidad de vida, en especial, si padeces una enfermedad.
									</Card.Text>
									<Button className="d-flex ml-auto btn-see-more" variant="light">
										Leer más
									</Button>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Last updated a month ago</small>
								</Card.Footer>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className="custom-cards">
								<Card.Img variant="top" src={img_card6} />
								<Card.Body>
									<Card.Title>Insomnio</Card.Title>
									<Card.Text>
										Los casos de insomnio están relacionados con hábitos inadecuados del sueño,
										depresión, ansiedad, falta de ejercicio, enfermedades crónicas o medicamentos.
									</Card.Text>
									<Link className="btn-see-more" to="/blog">
										<Button className="d-flex ml-auto btn-see-more" variant="light">
											Leer más
										</Button>
									</Link>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">Last updated 2 months ago</small>
								</Card.Footer>
							</Card>
						</SwiperSlide>
					</Swiper>
				</Row>
			</Container>
			<Footer />
		</>
	);
};

LandingPage.propTypes = {};
