import React from 'react';

const Login = () => {
  return (
    <div className='col text-center'>
      <a href="/auth/github" className="btn">
        <span className="fa fa-github"></span> Login with Github
      </a>
    </div>
  );
};

export default Login;
