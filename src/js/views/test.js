import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../../styles/test.scss";

export const TestPage = () => {
	return (
		<Container className="d-flex justify-content-center align-items-center vh">
			<Row>
				<Col className="items-custom">
					<h1>Welcome to the Test!</h1>
					<p>
						It has survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<Button className="btn-custom" variant="light" type="submit">
						START
					</Button>
					<Link to="/home">
						<button className="btn-back btn-block">Go back home</button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};
