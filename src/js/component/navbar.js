import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../../styles/navbar.scss";

export const Menu = () => {
	return (
		<Navbar className="nav-height">
			<Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto all-nav-link-custom">
					<Nav.Link className="nav-link-custom" href="/test">
						TEST
					</Nav.Link>
					<Nav.Link className="nav-link-custom" href="/login">
						SIGN IN
					</Nav.Link>
					<Nav.Link className="nav-sign-up" href="/signup">
						Sign up
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
