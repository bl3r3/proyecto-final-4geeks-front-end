const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: '',
      testResultMessage: '',
      demo: [
        {
          title: 'FIRST',
          background: 'white',
          initial: 'white',
        },
        {
          title: 'SECOND',
          background: 'white',
          initial: 'white',
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, 'green');
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      log_in: async (email, password) => {
        let response = await fetch('http://192.168.42.161:3000/log-in', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          let body = await response.json();
          setStore({
            token: body.token,
            user: body.user,
          });
          localStorage.setItem('token', body.token);
          localStorage.setItem('user', JSON.stringify(body.user));
          return true;
        }
        return false;
      },
      log_out: () => {
        setStore({
          token: '',
          user: null,
        });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      },
      setToken: (token, user) => {
        setStore({
          token,
          user: JSON.parse(user),
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
        console.log(data, pond);
        let result;

        if (pond >= 5 && pond <= 10) {
          result = 'Actualmente tu salud mental esta excelente!! 🎉';
          setStore({ testResultMessage: result });
        } else if (pond >= 11 && pond <= 15) {
          result = 'Hemos decetato altos nieveles de Estre 👀';
          setStore({ testResultMessage: result });
        } else {
          result = 'Necesitas ayuda, no estas bien 🙇‍♂️';
          setStore({ testResultMessage: result });
        }
      },
      sendDateDay: async data => {
        console.log(JSON.stringify(data));

        let response = await fetch('http://192.168.42.161:3000/set-date', {
          method: 'POST',
          body: JSON.stringify({
            data,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      },
    },
  };
};

export default getState;
