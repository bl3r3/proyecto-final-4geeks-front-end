import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../../styles/navbar.scss";

export const Menu = () => {
	return (
		<Navbar className="nav-height">
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto all-nav-link-custom">
					<Link to="/test">
						<button className="nav-link-custom">TEST</button>
					</Link>
					<Link to="/">
						<button className="nav-link-custom">Sign In</button>
					</Link>
					<Link to="/signup">
						<button className="nav-sign-up">Sign Up</button>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
