'use strict';
const express = require('express');
const router = express.Router();
const RepoController = require('../controllers').Repo;

router.route('/')
  .get(RepoController.getAll)
  .post(RepoController.create)

router.route('/:id')
  .get(RepoController.getOne)

module.exports = router;
