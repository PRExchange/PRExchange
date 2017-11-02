const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

router.route('/')
  .get(middleware.auth.homeRedirect, middleware.auth.render);

router.route('/about')
  .get(middleware.auth.render);

router.route('/home')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/createRequest')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/login')
  .get((req, res) => {
    res.render('login.ejs')
  }
);

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  }
);

router.get('/auth/github', middleware.passport.authenticate('github', {
  scope: ['user:email']
}));

router.get('/auth/github/callback',
  middleware.passport.authenticate('github',
  { failureRedirect: '/' }),
  middleware.auth.redirect);

module.exports = router;
