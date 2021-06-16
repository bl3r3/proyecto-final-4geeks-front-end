import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
					<NavDropdown className="nav-sign-up" variant="dark" title="Sign up">
						<NavDropdown.Item className="q" href="signup">
							Action
						</NavDropdown.Item>
						<NavDropdown.Item href="">Another action</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
