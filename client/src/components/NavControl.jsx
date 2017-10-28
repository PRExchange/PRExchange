import React from 'react';

const NavControl = () => {
  const user = window.user;

  if (user) {
    return (
      <div className="navbar-nav mr-auto">
        <a className="nav-item nav-link" href="/about">About</a>
        <a className="nav-item nav-link" href="/Request">Request</a>
        <a className="nav-item nav-link" href="/profile">My Profile</a>
      </div>
    );
  } else {
    return (
      <div className="navbar-nav mr-auto"></div>
    );
  }
};

export default NavControl;
