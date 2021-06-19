import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

import img_card6 from '../../img/Insomnio.jpg';
import '../../styles/blog.scss';

export const Blog = () => {
  return (
    <Container>
      <Row>
        <Col md={10}>
          <Card>
            <Card.Header>Insomnio</Card.Header>
            <Card.Body>
              <Card.Title>Problemas persistentes para dormirse y para permanecer dormido.</Card.Title>
              <Card.Text>
                La mayoría de los casos de insomnio están relacionados con hábitos inadecuados del sueño, depresión,
                ansiedad, falta de ejercicio, enfermedades crónicas o ciertos medicamentos. Los síntomas incluyen la
                dificultad para dormir o permanecer dormido, y la sensación de no haber descansado correctamente. El
                tratamiento para el insomnio consiste en mejorar los hábitos del sueño, identificar y tratar las causas
                subyacentes, y hacer terapias conductuales. También se pueden utilizar píldoras para dormir, pero se
                recomienda prestar atención a los efectos secundarios.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                Si sufres insomnio, estos son algunos consejos que te pueden ayudar a combatirlo eficazmente:
              </Card.Title>
              <Card.Text>
                1. Lleva un control: Apúntate cuánto duermes y a qué horas, cuándo te despiertas, los síntomas que
                tienes y en qué momentos del día se presentan. Esto te ayudará a identificar las actividades o
                costumbres que te impiden conciliar el sueño, y lo tendrás ya a mano si al final decides consultar con
                un especialista, ya que le será de mucha ayuda (y te la va a pedir de todas formas).
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                2. Establece una rutina saludable: Encuentra alguna actividad que te relaje y/o agote justo antes de
                irte a la cama, evita ver la televisión o navegar por la red y establece unos horarios para acostarte y
                despertarte que sean adecuados y puedas seguir incluso los fines de semana. Tampoco es conveniente que
                fuerces demasiado la mente antes de irte a dormir. En lugar de ello, puedes disfrutar de un baño o una
                ducha caliente.
              </ListGroupItem>
              <ListGroupItem>
                3. Utiliza la cama solo para dormir: No veas la tele ni comas en ella, busca otro lugar para relajarte o
                leer y no te lleves trabajo a la cama. Asegúrate de que tu cama y tu colchón son confortables. En caso
                contrario, sustitúyelos.
              </ListGroupItem>
              <ListGroupItem>
                4. Evita el tabaco, el alcohol y las bebidas excitantes: El insomnio es otro motivo más para dejar de
                fumar. El tabaco es un excitante y los síntomas de abstinencia pueden hacer que te levantes durante la
                noche si no consigues dormir. La cafeína y la teína también son nocivos para el sueño. Consumir alcohol
                justo antes de dormir rompe los ciclos del sueño una vez se pasa el sopor inicial.
              </ListGroupItem>
              <ListGroupItem>
                5. Haz ejercicio físico durante el día: Practicar deporte de forma regular durante el día mejora la
                calidad del sueño. Procura hacer ejercicio unas tres horas antes de irte a la cama, para que el cuerpo
                tenga tiempo de relajarse físicamente antes de irse a dormir.
              </ListGroupItem>
              <ListGroupItem>
                6. Las siestas deben ser cortas Para que no nos quiten el sueño por la noche, las siestas no deben durar
                más de 10 ó 20 minutos y nunca se debe dormir pasadas las 16:00 horas.
              </ListGroupItem>
              <ListGroupItem>
                7. Practica técnicas de relajación Las estrategias de relajación, tales como la meditación, las técnicas
                de respiración o la relajación progresiva pueden ser muy efectivas.
              </ListGroupItem>
              <ListGroupItem>
                8. Cuida tu dieta Evita las cenas copiosas de digestiones pesadas y toma infusiones relajantes naturales
                como la valeriana o la manzanilla, que ayudan a reducir la ansiedad y a conciliar mejor el sueño.
              </ListGroupItem>
              <ListGroupItem>
                9. Crea un ambiente adecuado Reduce la intensidad de la luz unas 2 horas antes de irte a dormir. Una
                iluminación suave con luz ambiente afecta menos a nuestro sistema nervioso y nos ayudará a conciliar el
                sueño. También puedes escuchar música instrumental relajante o sonidos de la naturaleza para inducir el
                sueño. Por último, mantén el dormitorio oscuro y fresco.
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col md={2}>
          <Card style={{ width: '18rem' }} className="custom-right-column">
            <Card.Img variant="top" src={img_card6} />
            <Card.Body>
              <Card.Text>
                Pedir ayuda nunca es fácil y creemos que es un acto de valentía. Nuestro objetivo es acompañarte durante
                este proceso y ayudarte a que te sientas mejor tanto contigo mismo como con los demás.
              </Card.Text>
              <Button className="right-column-button">Realiza el test!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
