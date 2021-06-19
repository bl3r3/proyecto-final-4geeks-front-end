import React, { useState, useContext, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import { Container, Col, Row } from 'react-bootstrap';
import { Context } from '../store/appContext';

export const FormAgendar = props => {
  const { store, actions } = useContext(Context);
  const [date, setDate] = useState(new Date());

  const onChange = useCallback(date => setDate(date), [date]);

  const onSubmit = useCallback(
    data =>
      actions.sendDateDay({
        ...data,
        date: date,
      }),
    [date],
  );

  const { register, handleSubmit } = useForm();

  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <Calendar onChange={onChange} value={date} />
        </Col>

        <Col md={4}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Fecha
              </Form.Label>
              <Col sm="10">
                <Form.Control {...register('date')} plaintext readOnly value={date.toLocaleDateString()} />
              </Col>
            </Form.Group>
            <Form.Group controlId="Horario">
              <Form.Label>Seleciona el horario</Form.Label>
              <Form.Control as="select" {...register('horario')}>
                <option value="1:00pm -2:00pm">1:00pm - 2:00pm</option>
                <option value="2:00pm - 3:00pm">2:00pm - 3:00pm</option>
                <option value="3:00pm - 4:00pm">3:00pm - 4:00pm</option>
                <option value="4:00pm - 5:00pm">4:00pm - 5:00pm</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="Medio">
              <Form.Label>Seleciona el medio</Form.Label>
              <Form.Control as="select" {...register('medio')}>
                <option value="Whatsapp">Videollamda via Whastapp</option>
                <option value="Meet">LLamda via Google Meet</option>
                <option value="Zoom">Zoom</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
