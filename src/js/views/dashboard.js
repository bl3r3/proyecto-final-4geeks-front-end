import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Agendar } from "./Agendar";
import { Profesionals } from "./Profesionals";
import { Citas } from "./Citas";
import { Agendado } from "./Agendado";

import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import "../../styles/dashboard.scss";
import icon from "../../img/Psicologa.png";
import icon2 from "../../img/Consulta.png";
import icon3 from "../../img/Libro.png";

export const Dashboard = () => {
	let { path, url } = useRouteMatch();
	return (
		<Row className="d-flex justify-content-center">
			<Col md={2}>
				<div className="side-menu">
					<ul>
						<li>
							<Link to={`${path}/profesionales`}>Profesionales</Link>
						</li>
						<li>
							<Link to={`${path}/citas`}>Citas</Link>
						</li>
						<li>
							<Link to={`${path}/herramientas`}>Herramientas</Link>
						</li>
					</ul>
				</div>
			</Col>
			<Col md={10}>
				<Switch>
					<Route exact path="/dashboard">
						<h1>hola</h1>
						<h2>Este es la ruta dashboard</h2>
					</Route>
					<Route path="/dashboard/agendar/:id">
						<Agendar />
					</Route>
					<Route path="/dashboard/profesionales">
						<Profesionals />
					</Route>
					<Route path="/dashboard/citas">
						<Citas />
					</Route>
					<Route path="/dashboard/agendado">
						<Agendado />
					</Route>
				</Switch>
			</Col>
		</Row>
	);
};
