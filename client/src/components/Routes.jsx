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
import AllOpenRequests from './AllOpenRequests';
import CreateRequest from './CreateRequest';
import Nav from './Nav';
import PrivateRoute from './PrivateRoute';
import Redirect from './Redirect';
import RequestForm from './RequestForm';
import Request from './Request';

const Routes = () => (
  <div>
    <Nav />
    <div className="container">
      <Router>
        <Switch>
          <Route exact path='/' component={AllOpenRequests} />
          <Route path='/about' component={About} />
          <PrivateRoute path='/createrequest' component={CreateRequest} />
          <PrivateRoute path='/requestform' component={RequestForm} />
          <PrivateRoute path='/request/:id' component={Request} />
          <Route path='/redirected' component={Redirect} />
          <Route render={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </Router>
    </div>
  </div>
);

export default Routes;
