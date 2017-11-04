'use strict';
const express = require('express');
const router = express.Router();
const CreateController = require('../controllers').Create;

router.route('/')
  .post(CreateController.create);

module.exports = router;
