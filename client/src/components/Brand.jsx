import React from 'react';

const Brand = () => {
  const user = window.user;

  if (user) {
    return (
      <a className="navbar-brand" href="/home">PRExchange</a>
    );
  } else {
    return (
      <a className="navbar-brand" href="/">PRExchange</a>
    );
  }
};

export default Brand;
