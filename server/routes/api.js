'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(403).send('You must be authenticated to use the API');
  });

module.exports = router;
