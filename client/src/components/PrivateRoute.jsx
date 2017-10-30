import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({component: Component, loggedIn, rest}) => {
  return (
    <Route {...rest}
      render={props =>
        window.user ?
          <Component {...props}/>
        :
          <Redirect to={{pathname: '/redirected'}}/>
      }/>
  );
};

export default PrivateRoute;
