import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

import About from './About';
import Home from './Home';
import CreateRequest from './CreateRequest';
import Nav from './Nav';
import PrivateRoute from './PrivateRoute';
import Redirected from './Redirected';
import RequestForm from './RequestForm';
import Request from './Request';

const Routes = () => (
  <div>
    <Nav />
    <div className="container">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <PrivateRoute path='/home' component={Home} />
          <PrivateRoute path='/createrequest' component={CreateRequest} />
          <PrivateRoute path='/requestform' component={RequestForm} />
          <PrivateRoute path='/request/:id' component={Request} />
          <Route path='/redirected' component={Redirect} />
          
        </Switch>
      </Router>
    </div>
  </div>
);

export default Routes;
