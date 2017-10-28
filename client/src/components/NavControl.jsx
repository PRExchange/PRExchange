import React from 'react';

const NavControl = () => {
  const user = window.user;

  if (!user) {
    return (
      <div className="navbar-nav mr-auto">
        <a className="nav-item nav-link" href="/about">About</a>
        <a className="nav-item nav-link" href="/Request">Request</a>
        <form className="form-inline my2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search by Username" aria-label="Search by Username" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="navbar-nav mr-auto">
         <a className="nav-item nav-link" href="/about">About</a>
      </div>
    );
  }
};

export default NavControl;
