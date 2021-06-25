import React, { useState, useContext, useCallback } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Calendar from "react-calendar";
import { Container, Col, Row } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/calendar.css";

export const FormAgendar = ({ profesionalId }) => {
	const { store, actions } = useContext(Context);
	const [date, setDate] = useState(new Date());
	const history = useHistory();

	let user_id_store = store.user.id;

	const onChange = useCallback(date => setDate(date), [date]);

	const onSubmit = useCallback(
		async data => {
			let push = await actions.sendDateDay({
				...data,
				date: date.toLocaleDateString(),
				profesional_id: profesionalId,
				user_id: user_id_store
			});
			if (push) {
				history.push("/dashboard/agendado");
			}
		},
		[date]
	);

	const { register, handleSubmit } = useForm();

	return (
		<Container fluid className="mh-100">
			<Row className="d-flex align-items-center" style={{ height: "70vh" }}>
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
								<Form.Control
									{...register("date")}
									plaintext
									readOnly
									value={date.toLocaleDateString()}
								/>
							</Col>
						</Form.Group>
						<Form.Group controlId="Horario">
							<Form.Label>Seleciona el horario</Form.Label>
							<Form.Control as="select" {...register("schedule")}>
								<option value="1:00pm -2:00pm">1:00pm - 2:00pm</option>
								<option value="2:00pm - 3:00pm">2:00pm - 3:00pm</option>
								<option value="3:00pm - 4:00pm">3:00pm - 4:00pm</option>
								<option value="4:00pm - 5:00pm">4:00pm - 5:00pm</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="Medio">
							<Form.Label>Seleciona el medio</Form.Label>
							<Form.Control as="select" {...register("via")}>
								<option value="Whatsapp">Videollamda via Whastapp</option>
								<option value="Meet">LLamda via Google Meet</option>
								<option value="Zoom">Zoom</option>
							</Form.Control>
						</Form.Group>
						<Button variant="primary" type="submit" className="btn-agendar">
							Agendar
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
