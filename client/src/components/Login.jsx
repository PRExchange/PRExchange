import React from 'react';

const Login = () => {
  return (
    <div className='col text-center'>
      <a className='btn btn-link' role='button' href='/auth/github'><img src='/assets/github.png' style={{'width': '30px'}}></img>Login with GitHub</a>
    </div>
  );
};

export default Login;
