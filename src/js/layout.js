import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';

import { LandingPage } from './views/home';
import { SignupPage } from './views/signup';
import { Signup2Page } from './views/signup2';
import { Demo } from './views/demo';
import { Single } from './views/single';
import { Login } from './views/Login';
import { UserTest } from './views/test/UserTest';
import { Dashboard } from './views/dashboard';
import { Blog } from './views/blog';
import { Board } from './views/board';
import injectContext from './store/appContext';

import { Menu } from './component/navbar';
import { Footer } from './component/footer';

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || '';

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Menu />
          <Switch>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/signup2">
              <Signup2Page />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/test">
              <UserTest />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/board">
              <Board />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
