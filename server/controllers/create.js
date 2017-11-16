const models = require('../../db/models');
const middleware = require('../middleware');

module.exports.create = (req, res) => {
  models.Repo.forge({
    title: req.body.title,
    github_link: req.body.gitHubLink,
    profile_id: req.body.user.id
   })
  .save()
  .tap(res => {
    req.body.allIssues.forEach(issue => {
      return models.Issue.forge({
        title: issue.title,
        description: issue.description,
        status: issue.status,
        issue_link: undefined,
        repo_id: res.id }
      ).save();
    })
  })
  .then(res => {
    res.status(201).send(res);
  })
  .catch(err => {
    console.error(err, '---Error saving issue to database---');
    res.status(500).send(err)
  });
};
