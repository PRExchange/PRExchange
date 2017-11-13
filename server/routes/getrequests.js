'use strict';
const express = require('express');
const router = express.Router();
const GetController = require('../controllers').Get;

router.route('/')
  .get(GetController.get);

module.exports = router;
