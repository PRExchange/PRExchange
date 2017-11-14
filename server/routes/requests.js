'use strict';
const express = require('express');
const router = express.Router();
const RepoController = require('../controllers').Repo;

router.route('/')
  .get(RepoController.getAll)
  .post(RepoController.create)

module.exports = router;
