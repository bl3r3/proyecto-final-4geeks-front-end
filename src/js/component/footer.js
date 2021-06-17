import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import "../../styles/footer.scss";

export const Footer = () => (
	<>
		<footer className="custom-footer container-fluid">
			<Row>
				<Col md={3} className="d-flex align-items-center justify-content-center">
					<div className="custom-paragraph">
						<p>
							Plataforma para gestión de servicios psicológicos, que busca acercar al prestador del
							servicio y al usuario que requiera una atención psicológica personalizada.
						</p>
					</div>
				</Col>
				<Col md={4} className="d-flex align-items-center">
					<div className="custom-anchor-block">
						<h3 className="custom-brand-title">MindCare</h3>
						<a className="custom-anchor" href="/test">
							Realizar test!
						</a>
						<a className="custom-anchor" href="/login">
							Iniciar sesión
						</a>
						<a className="custom-anchor" href="/signup">
							Registro de paciente
						</a>
						<a className="custom-anchor" href="/signup2">
							Registro de médico
						</a>
					</div>
				</Col>
				<Col md={5} className="d-flex align-items-center">
					<div className="custom-icons-block">
						<h3 className="custom-footer-title">Síguenos</h3>
						<div>
							<Button className="custom-icons">
								<FontAwesomeIcon icon={faFacebookSquare} />
							</Button>
							<Button className="custom-icons">
								<FontAwesomeIcon icon={faInstagramSquare} />
							</Button>
							<Button className="custom-icons">
								<FontAwesomeIcon icon={faTwitterSquare} />
							</Button>
						</div>
						<h3 className="custom-footer-title">Contacto</h3>
						<h5 className="custom-footer-title2">info@mindcare.com</h5>
					</div>
				</Col>
			</Row>
		</footer>
		<div className="footer-block">
			<h5>mindcare.com © 2021</h5>
			<div>
				<a className="custom-anchor2" href="">
					Aviso Legal
				</a>
				<a className="custom-anchor2" href="">
					Condiciones
				</a>
				<a className="custom-anchor2" href="">
					Privacidad
				</a>
				<a className="custom-anchor2" href="">
					Cookies
				</a>
			</div>
		</div>
	</>
);
