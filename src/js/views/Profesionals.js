import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const profesionals = [
  {
    email: 'test_pro@email.com',
    id: 10,
    last_name: 'prueba',
    name: 'profesional',
    type: 'profesional',
  },
  {
    email: 'test_pro1@email.com',
    id: 11,
    last_name: 'prueba',
    name: 'profesional',
    type: 'profesional',
  },
  {
    email: 'test_true@email.com',
    id: 12,
    last_name: 'prueba',
    name: 'profesional',
    type: 'profesional',
  },
  {
    email: 'test_true@mail.com',
    id: 15,
    last_name: 'prueba',
    name: 'profesional',
    type: 'profesional',
  },
];

export const Profesionals = () => {
  useEffect(() => {
    const getProfesionals = async () => {
      let response = await fetch('http://192.168.42.161:3000/profesionals');
      let result = await response.json;
      console.log(result);
    };

    getProfesionals();
  }, []);
  return (
    <div>
      {profesionals.map((profesional, i) => (
        <Card style={{ width: '18rem' }} key={i}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{profesional.name}</Card.Title>
            <Card.Title>{profesional.last_name}</Card.Title>
            <Card.Text>Some</Card.Text>
            <Button variant="primary">Agendar</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
