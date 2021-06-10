import React from "react";
import PropTypes from "prop-types";
import { Container, Col, Row, Button } from "react-bootstrap";
import img_main from "../../img/drawkit.png";

import "../../styles/home.scss";

export const LandingPage = props => {
	return (
		<Container className="d-flex">
			<Row className="d-felx justify-content-center align-items-center">
				<Col md={5} center>
					<h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
					<div className="btn-section">
						<Button className="btn-test">GO TEST</Button>
						<Button className="btn-sign-in">SIGN IN</Button>
					</div>
				</Col>
				<Col md={7}>
					<img src={img_main} width="120%" />
				</Col>
			</Row>
		</Container>
	);
};

LandingPage.propTypes = {};
