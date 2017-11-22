require('dotenv').config();
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('redis').createClient(process.env.REDISCLOUD_URL);
// const models = require('../../db/models');

module.exports.api = (req, res, next) => {
  const errorMessage = JSON.stringify({
    403: 'You must be authorized to use the API'
  });
  if (req.body.user) {
    return next();
  } else {
    res.status(403).send(errorMessage);
  }
};

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
  res.render('index.ejs', {user: JSON.stringify(req.user), id: undefined});
};

module.exports.renderById = (req, res) => {
  const id = req.params.id;
  console.log(id, 'id!!!!!!!!!!!!!!!!!!!!!!!!!');
  const noUser = {
    id: -1,
    username: 'ANONYMOUS_GUEST_ACCOUNT_USERNAME'
  }
  const user = req.user || noUser;
  res.render('index.ejs', {user: JSON.stringify(user), id: JSON.stringify(id)});
}

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: process.env.REDISCLOUD_URL,
    port: 6379
  }),
  secret: 'Never gonna give you up',
  resave: false,
  saveUninitialized: true,
});
