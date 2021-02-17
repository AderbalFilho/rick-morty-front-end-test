import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import TheHome from '@pages/TheHome';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/rick-morty-front-end-test" component={TheHome} />
      <Redirect from="*" to="/rick-morty-front-end-test" />
    </Switch>
  </Router>
);

export default Routes;
