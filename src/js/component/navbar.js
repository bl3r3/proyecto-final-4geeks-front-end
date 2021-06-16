import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../styles/navbar.scss";

export const Menu = () => {
	return (
		<Navbar className="nav-height">
			<Navbar.Brand href="">MindCare</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto all-custom-nav-links">
					<Nav.Link className="custom-nav-link" href="/test">
						TEST
					</Nav.Link>
					<Nav.Link className="custom-nav-link" href="/login">
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
