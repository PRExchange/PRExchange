const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Repo.forge({
    title: req.body.gitHubLink,
    github_link: req.body.gitHubLink,
    profile_id: req.body.user.id
   })
  .save()
  .tap(result => {
    req.body.allIssues.forEach(issue => {
      return models.Issue.forge({
        title: issue.issueTitle,
        description: issue.description,
        status: issue.issueStatus,
        issue_link: undefined,
        repo_id: result.id }
      ).save();
    })
  })
  .catch(err => {
    console.log('---Error saving issue to database---', err);
    res.status(500).send(err)
  });
}
