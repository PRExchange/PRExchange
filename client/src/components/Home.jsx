import React from 'react';
import AllRequests from './AllRequests';
import Login from './Login';

const Home = () => {
  const user = window.user;

  if (!user) {
    return (
      <div>
        <br />
        <div className='row justify-content-center'>
          <Login />
        </div>
        <br />
        <div className="row justify-content-center">
          <AllRequests />
        </div>  
      </div>
    )
  } else {
    return (
      <div className="row justify-content-center">
        <AllRequests />
      </div>
    );
  }
};

export default Home;
