import React, { useState, useContext } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

import { Menu } from "../../component/navbar";

import "../../../styles/test.scss";

export const Test = props => {
	const { store, actions } = useContext(Context);
	const [formStep, setFormStep] = useState(0);
	const [loading, setLoading] = useState(false);

	const helloHandeler = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm({ mode: "all" });

	const completedTetsStep = () => {
		setFormStep(current => current + 1);
	};
	const backTetsStep = () => {
		setFormStep(current => (current == 0 ? 0 : current - 1));
	};

	const renderBtn = () => {
		if (formStep > 5) {
			return undefined;
		} else if (formStep === 5) {
			return (
				<button disabled={!isValid} type="submit" className="btn btn-radius custom-btn-test">
					Finalizar Test
				</button>
			);
		} else {
			return (
				<div className="btn-wizard">
					{formStep === 0 ? null : formStep === 1 ? null : (
						<button
							disabled={!isValid}
							onClick={backTetsStep}
							type="button"
							className="btn-radius btn custom-btn">
							Regresar
						</button>
					)}
					<button
						disabled={!isValid}
						onClick={completedTetsStep}
						type="button"
						className="btn custom-btn-test btn-radius">
						{formStep === 0 ? "Iniciar test" : "Siguiente"}
					</button>
				</div>
			);
		}
	};

	const onSubmit = data => {
		actions.resultTest(data);
		completedTetsStep();
		helloHandeler();
	};

	return (
		<>
			<Menu />
			<div className="container w-100 text-center container-test">
				<div className="w-100">
					<div className="px-16 py-10">
						<form onSubmit={handleSubmit(onSubmit)}>
							{formStep >= 0 && (
								<section className={formStep === 0 ? "test-active" : "d-none"}>
									<div className="w-100">
										<h1>Bienvenido al Test 📝</h1>
										<h3>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
											condimentum sodales. Class aptent taciti sociosqu ad litora torquent per
											conubia nostra, per inceptos himenaeos. Donec ultrices tincidunt blandit.
											Phasellus nec nunc molestie sapien eleifend consequat vel ut nisi.
										</h3>
									</div>
								</section>
							)}
							{formStep >= 1 && (
								<section className={formStep === 1 ? "test-active" : "d-none"}>
									<h2>¿Como te has sentido ultimamente 🤔?</h2>
									<div className="input-test">
										<input
											className="check-custom"
											name="question1"
											type="radio"
											value="1"
											id="q1"
											{...register("Question1", { required: true })}
										/>
										Feliz
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="question1"
											type="radio"
											value="2"
											id="q1"
											{...register("Question1", { required: true })}
										/>
										Regular
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="question1"
											type="radio"
											value="3"
											id="q1"
											{...register("Question1", { required: true })}
										/>
										Molesto
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="question1"
											type="radio"
											value="4"
											id="q1"
											{...register("Question1", { required: true })}
										/>
										Triste
									</div>
								</section>
							)}
							{formStep >= 2 && (
								<section className={formStep === 2 ? "test-active" : "d-none"}>
									<h2>¿Cuantas horas duermes normalmente 🛌?</h2>
									<div className="input-test">
										<input
											className="check-custom"
											name="question2"
											type="radio"
											value="1"
											id="q2"
											{...register("Question2", { required: true })}
										/>
										8 horas o mas
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="question2"
											type="radio"
											value="2"
											id="q2"
											{...register("Question2", { required: true })}
										/>
										7 a 8 horas
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="question2"
											type="radio"
											value="3"
											id="q2"
											{...register("Question2", { required: true })}
										/>
										5 a 7
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="question2"
											type="radio"
											value="4"
											id="q2"
											{...register("Question2", { required: true })}
										/>
										Menos de 5
									</div>
								</section>
							)}
							{formStep >= 3 && (
								<section className={formStep === 3 ? "test-active" : "d-none"}>
									<h2>¿Como te sientes con tu trabajo u oficio actual 👨‍💻?</h2>
									<div className="input-test">
										<input
											className="check-custom"
											name="question3"
											type="radio"
											value="1"
											id="q3"
											{...register("Question3", { required: true })}
										/>
										Excelente
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="question3"
											type="radio"
											value="2"
											id="q3"
											{...register("Question3", { required: true })}
										/>
										Agotado
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="question3"
											type="radio"
											value="3"
											id="q3"
											{...register("Question3", { required: true })}
										/>
										Mal
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="question3"
											type="radio"
											value="4"
											id="q3"
											{...register("Question3", { required: true })}
										/>
										No poseo actualmente
									</div>
								</section>
							)}
							{formStep >= 4 && (
								<section className={formStep === 4 ? "test-active" : "d-none"}>
									<h2>¿Cuantas comidas consumes diariamente 🍝?</h2>
									<div className="input-test">
										<input
											className="check-custom"
											name="intereses"
											type="radio"
											value="1"
											id="q4"
											{...register("Question4", { required: true })}
										/>
										5 a 6 comidas
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="intereses"
											type="radio"
											value="2"
											id="q4"
											{...register("Question4", { required: true })}
										/>
										4 a 5 comidas
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="intereses"
											type="radio"
											value="3"
											id="q4"
											{...register("Question4", { required: true })}
										/>
										3 Comidas
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="intereses"
											type="radio"
											value="4"
											id="q4"
											{...register("Question4", { required: true })}
										/>
										Menos de 3 comidas
									</div>
								</section>
							)}
							{formStep >= 5 && (
								<section className={formStep === 5 ? "test-active" : "d-none"}>
									<h2>¿Cuanta actividad fisica realizas semanalmete 🏃‍♂️?</h2>
									<div className="input-test">
										<input
											className="check-custom"
											name="intereses"
											type="radio"
											value="1"
											id="q5"
											{...register("Question5", { required: true })}
										/>
										5 dias o mas
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="intereses"
											type="radio"
											value="2"
											id="q5"
											{...register("Question5", { required: true })}
										/>
										4 a 5 dias
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="intereses"
											type="radio"
											value="3"
											id="q5"
											{...register("Question5", { required: true })}
										/>
										1 a 3 dias
									</div>
									<div className="input-test">
										<input
											className="check-custom"
											name="intereses"
											type="radio"
											value="4"
											id="q5"
											{...register("Question5", { required: true })}
										/>
										No realizo
									</div>
								</section>
							)}
							{formStep >= 6 && (
								<section className={formStep === 6 ? "test-active" : "d-none"}>
									{loading === true ? (
										<Spinner animation="border" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
									) : (
										<>
											<h1>Resultados del test</h1>
											<h3>El resultado del test fue el siguiente:</h3>
											<h2> {store.testResultMessage} </h2>
											<Link to="/" className="btn btn-radius custom-btn-test">
												Volver al inicio
											</Link>
										</>
									)}
								</section>
							)}
							{renderBtn()}
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
