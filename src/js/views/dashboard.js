import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image, Container } from 'react-bootstrap';
import { Agendar } from './Agendar';
import { Profesionals } from './Profesionals';

import '../../styles/dashboard.scss';
import icon from '../../img/Psicologa.png';
import icon2 from '../../img/Consulta.png';
import icon3 from '../../img/Libro.png';

export const Dashboard = () => {
  return (
    <Row className="d-flex justify-content-center">
      <Col md={2}>
        <div className="side-menu">
          <Image className="custom-img" src={icon} />
          <h2>Hola</h2>
          <Image className="custom-img" src={icon2} />
          <h2>Hola</h2>
          <Image className="custom-img" src={icon3} />
          <h2>Hola</h2>
        </div>
      </Col>
      <Col md={10}>
        <Profesionals />
      </Col>
    </Row>
  );
};
