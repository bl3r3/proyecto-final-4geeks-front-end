import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../../styles/navbar.scss';

export const Menu = () => {
  return (
    <Navbar className="nav-height" collapseOnSelect expand="lg">
      <Navbar.Brand className="custom-brand-link" href="#home">
        MindCare
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto all-custom-nav-links">
          <Nav.Link href="/test" className="custom-nav-link">
            TEST
          </Nav.Link>
          <Nav.Link href="/login" className="custom-nav-link">
            SIGN IN
          </Nav.Link>
          <NavDropdown className="nav-sign-up" title="Sign up" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/signup">Paciente</NavDropdown.Item>
            <NavDropdown.Item href="/signup2">Médico</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
