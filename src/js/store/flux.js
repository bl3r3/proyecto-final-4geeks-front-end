const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			testResultMessage: "",
			agendado: "",
			user: [],
			professional: [],
			diagnosticos: [],
			ejercicios: []
		},
		actions: {
			create_user: async data => {
				try {
					let response = await fetch("http://192.168.42.161:3000/sign-up", {
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						return true;
					} else {
						console.log(`error: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				return false;
			},

			create_professional: async (name, last_name, email, password) => {
				try {
					let response = await ("http://192.168.42.161:3000/sign_up_profesional",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: JSON.stringify({
							name,
							last_name,
							email,
							password,
							is_verified: true
						})
					});
					if (response.ok) {
						return true;
					} else {
						console.log(`error: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				return false;
			},

			log_in: async data => {
				let response = await fetch("http://192.168.42.161:3000/log-in", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					let body = await response.json();
					setStore({
						token: body.token,
						user: body.user
					});
					localStorage.setItem("token", body.token);
					localStorage.setItem("user", JSON.stringify(body.user));
					return true;
				}
				return false;
			},

			log_out: () => {
				setStore({
					token: "",
					user: null
				});
				localStorage.removeItem("token");
				localStorage.removeItem("user");
			},

			setToken: (token, user) => {
				setStore({
					token,
					user: JSON.parse(user)
				});
			},
			// getDataTest: data => {
			// 	console.log(data);
			// },

			resultTest: data => {
				let pond =
					parseInt(data.Question1) +
					parseInt(data.Question2) +
					parseInt(data.Question3) +
					parseInt(data.Question4) +
					parseInt(data.Question5);
				let result;

				if (pond >= 5 && pond <= 10) {
					result = "Actualmente tu salud mental está excelente!! 🎉";
					setStore({ testResultMessage: result });
				} else if (pond >= 11 && pond <= 15) {
					result = "Hemos detectado altos niveles de Estrés 👀";
					setStore({ testResultMessage: result });
				} else {
					result = "Necesitas ayuda, no estás bien 🙇🏻‍♂️";
					setStore({ testResultMessage: result });
				}
			},

			sendDateDay: async data => {
				let store = getStore();
				let user_id = store.user.id;
				let response = await fetch(`http://192.168.42.161:3000/${user_id}/dates`, {
					method: "POST",
					body: JSON.stringify({
						data
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					let body = await response.json();
					setStore({
						agendado: body
					});
					return true;
				}
				return false;
			},

			createReport: data => {
				let store = getStore();

				setStore({
					diagnosticos: [...store.diagnosticos, data]
				});
			},

			borrarReport: id => {
				let store = getStore();
				let filterDiagnosticos = store.diagnosticos.filter((diagnostico, index) => {
					return id != index;
				});
				setStore({ diagnosticos: filterDiagnosticos });
			},

			createExercise: data => {
				let store = getStore();

				setStore({
					ejercicios: [...store.ejercicios, data]
				});
			}
		}
	};
};

export default getState;
