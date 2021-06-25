import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Agendar } from "./Agendar";
import { Profesionals } from "./Profesionals";
import { Citas } from "./Citas";
import { CitasPro } from "./CitasPro";
import { Users } from "./users";
import { Tools } from "./tools";
import { Tools2 } from "./tools2";
import { Agendado } from "./Agendado";
import { Context } from "../../store/appContext";

import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import "../../../styles/dashboard.scss";
import icon from "../../../img/Psicologa.png";
import icon2 from "../../../img/Consulta.png";
import icon3 from "../../../img/Libro.png";
import userfront from "../../../img/front_page_user.jpeg";
import profront from "../../../img/front_page_pro.jpeg";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	let { path, url } = useRouteMatch();
	return (
		<Row className="d-flex justify-content-center">
			{store.user.type === "profesional" ? (
				<Col md={2} className="d-flex justify-content-space-between">
					<div className="side-menu">
						<Image className="custom-img" src={icon2} />
						<Link className="custom-link" to={`${path}/citaspro`}>
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
			) : (
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
						<Link className="custom-link" to={`${path}/tools2`}>
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
			)}

			<Col md={10}>
				{store.user.type === "user" ? (
					<Switch>
						<Route exact path="/dashboard">
							<h2 className="text-center py-5">Bienvenido a MindCare</h2>
							<Row>
								<Col md={5}>
									<Image className="image_front" src={userfront} />
								</Col>
								<Col md={5}>
									<h3>Aqui puedes:</h3>
									<ul>
										<li>
											<h3>Agendar</h3>
										</li>
										<li>
											<h3>Ver tus citas</h3>
										</li>
										<li>
											<h3>Revisar tus actividades dadas por el medico</h3>
										</li>
									</ul>
								</Col>
							</Row>
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
						<Route path="/dashboard/tools2">
							<Tools2 />
						</Route>
					</Switch>
				) : (
					<Switch>
						<Route exact path="/dashboard">
							<h2 className="text-center py-5">Bienvenido a MindCare</h2>
							<Row>
								<Col md={5}>
									<Image className="image_front" src={profront} />
								</Col>
								<Col md={5}>
									<h3>Aqui puedes:</h3>
									<ul>
										<li>
											<h3>Ver tu agenda de citas</h3>
										</li>
										<li>
											<h3>Agregar Herramientas y seguir el diagnostico de tu paciente</h3>
										</li>
									</ul>
								</Col>
							</Row>
						</Route>
						<Route path="/dashboard/agendar/:id">
							<Agendar />
						</Route>
						<Route path="/dashboard/profesionales">
							<Profesionals />
						</Route>
						<Route path="/dashboard/citaspro">
							<CitasPro />
						</Route>
						<Route path="/dashboard/agendado">
							<Agendado />
						</Route>
						<Route path="/dashboard/tools2">
							<Tools2 />
						</Route>
						<Route path="/dashboard/tools/:id">
							<Tools />
						</Route>
						<Route path="/dashboard/users">
							<Users />
						</Route>
					</Switch>
				)}
			</Col>
		</Row>
	);
};
