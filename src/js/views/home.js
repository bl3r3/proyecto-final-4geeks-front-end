import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Col, Row, Button, Card, CardDeck } from "react-bootstrap";
import img_main from "../../img/drawkit.png";

import "../../styles/home.scss";

export const LandingPage = props => {
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
				<CardDeck>
					<Card className="cards-custom">
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Text>
								<Card.Title>Meditación</Card.Title>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
					<Card className="cards-custom">
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Text>
								<Card.Title>Respiración</Card.Title>
								This card has supporting text below as a natural lead-in to additional content.{" "}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
					<Card className="cards-custom">
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Text>
								<Card.Title>Concentración</Card.Title>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
				</CardDeck>
			</Row>
		</Container>
	);
};

LandingPage.propTypes = {};
