import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Calendario } from '../component/Calendario';
import { FormAgendar } from '../component/FormAgendar';

export const Agendar = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <FormAgendar />
        </Row>
      </Container>
    </div>
  );
};
