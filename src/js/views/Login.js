import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../../styles/signup.scss';

export const Login = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container className="d-flex justify-content-center align-items-center vh">
      <Form className="custom-form">
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="custom-input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="custom-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          className="d-flex justify-content-center ml-auto custom-btn"
          type="submit"
          onClick={async e => {
            let result = await actions.log_in(email, password);
            if (result) {
              history.push('/demo');
            } else {
              alert('El correo y/o la contraseña son incorrectos...');
            }
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};
