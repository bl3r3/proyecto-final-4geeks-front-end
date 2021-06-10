import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../styles/navbar.scss";

export const Menu = () => {
	return (
		<Navbar className="nav-height">
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link className="nav-link-custom" href="#">
						Test
					</Nav.Link>
					<Nav.Link className="nav-link-custom" href="#">
						Sign In
					</Nav.Link>
					<Nav.Link className="nav-sign-up" href="#">
						Sign Up
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
