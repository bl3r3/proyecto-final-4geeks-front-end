import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { LandingPage } from "./views/home";
import { Signup } from "./views/Signup";
import { SignupProfesional } from "./views/SignUpProfesional";
import { Login } from "./views/Login";
import { Test } from "./views/test/Test";
import { Dashboard } from "./views/dashboard/dashboard";
import { Blog } from "./views/blog";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/signup/profesional">
							<SignupProfesional />
						</Route>
						<Route exact path="/">
							<LandingPage />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/test">
							<Test />
						</Route>
						<Route exact path="/blog">
							<Blog />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
