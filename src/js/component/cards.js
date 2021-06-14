import React from "react";
import PropTypes from "prop-types";
import { Card, Button, CardGroup } from "react-bootstrap";

export const ToolCard = ({ title, imgSource }) => {
	return (
		<CardGroup>
			<Card className="cards-custom">
				<Card.Img variant="top" src={imgSource} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
						classical Latin literature from 45 BC, making it over 2000 years old..{" "}
					</Card.Text>
					<Button className="d-flex ml-auto" variant="light">
						Leer más
					</Button>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
		</CardGroup>
	);
};

ToolCard.propTypes = {
	title: PropTypes.string.isRequired,
	imgSource: PropTypes.string
};
