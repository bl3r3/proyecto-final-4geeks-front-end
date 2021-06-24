import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Agendar } from "./Agendar";
import { Profesionals } from "./Profesionals";
import { Citas } from "./Citas";
import { Users } from "./users";
import { Tools } from "./tools";
import { Agendado } from "./Agendado";
import { Context } from "../../store/appContext";

import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import "../../../styles/dashboard.scss";
import icon from "../../../img/Psicologa.png";
import icon2 from "../../../img/Consulta.png";
import icon3 from "../../../img/Libro.png";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	let { path, url } = useRouteMatch();
	return (
		<Row className="d-flex justify-content-center">
			<Col md={2} className="d-flex justify-content-space-between">
				<div className="side-menu">
					<Image className="custom-img" src={icon} />
					<Link className="custom-link" to={`${path}/profesionales`}>
						Profesionales
					</Link>
					<Image className="custom-img" src={icon2} />
					<Link className="custom-link" to={`${path}/citas`}>
						Citas
					</Link>
					<Image className="custom-img" src={icon3} />
					<Link className="custom-link" to={`${path}/users`}>
						Herramientas
					</Link>
					<Button
						className="btn-danger btn-cerrar-sesion mt-5"
						onClick={async e => {
							actions.log_out();
							history.push("/login");
						}}>
						Cerrar sesión
					</Button>
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
					<Route path="/dashboard/users">
						<Users />
					</Route>
					<Route path="/dashboard/tools">
						<Tools />
					</Route>
				</Switch>
			</Col>
		</Row>
	);
};
