import React from "react";
import { Row, Col } from "react-bootstrap";

import "../../styles/footer.scss";

export const Footer = () => (
	<>
		<footer className="custom-footer py-3 text-center container-fluid">
			<Row>
				<Col>
					<p>
						Plataforma para gestión de servicios psicológicos, que busca acercar al prestador del servicio y
						al usuario que requiera una atención psicológica personalizada.
					</p>
					<h3>Síguenos</h3>
					<i className="fab fa-facebook-square" />
					<i className="fab fa-instagram-square" />
					<i className="fab fa-twitter-square" />
					<h3>Contacto</h3>
					<h5>info@mindcare.com</h5>
				</Col>
				<Col>
					<h3>MindCare</h3>
					<ul>
						<li>Test</li>
						<li>Sign in</li>
						<li>Sign up</li>
					</ul>
				</Col>
			</Row>
		</footer>
		<div className="footer-block">
			<h5>mindcare.com © 2021</h5>
			<div>
				<a className="custom-anchor" href="">
					Aviso Legal
				</a>
				<a className="custom-anchor" href="">
					Condiciones
				</a>
				<a className="custom-anchor" href="">
					Privacidad
				</a>
				<a className="custom-anchor" href="">
					Cookies
				</a>
			</div>
		</div>
	</>
);
