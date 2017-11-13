const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Repo.forge({
    title: req.body.title,
    github_link: req.body.gitHubLink,
    profile_id: req.body.user.id
   })
  .save()
  .tap(result => {
    req.body.allIssues.forEach(issue => {
      return models.Issue.forge({
        title: issue.title,
        description: issue.description,
        status: issue.status,
        issue_link: undefined,
        repo_id: result.id }
      ).save();
    })
  })
  .catch(err => {
    console.error(err, '---Error saving issue to database---');
    res.status(500).send(err)
  });
};
