const models = require('../../db/models');

module.exports.get = (req, res) => {
  models.Repo.fetchAll({
    withRelated: 'profile'
  })
    .then(repos => {
      res.status(200).send(repos)
    })
    .catch(err => {
      res.status(500).send(err, 'Error getting repos from Database');
    });
};
