require('dotenv').config();
const session = require('express-session');
// const models = require('../../db/models');

module.exports.homeRedirect = (req, res, next) => {
  if (req.user) {
    return res.redirect('/home');
  }
  next();
};

module.exports.redirect = (req, res) => {
  let redirect = req.session.returnTo || '/';
  delete req.session.returnTo;
  res.redirect(redirect);
};

module.exports.render = (req, res) => {
  res.render('index.ejs', {user: JSON.stringify(req.user)});
};

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

module.exports.session = session({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
});
