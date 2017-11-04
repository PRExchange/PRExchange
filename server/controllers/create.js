const models = require('../../db/models');

module.exports.create = (req, res) => {
  const issueRequests = req.body.issueRequests;
  models.Repo.forge({ title: req.body.title, github_link: req.body.github_link })
  .save()
  .tap(result => {
    issueRequests.forEach(issue => {
      return models.Issue.forge({
        title: issue.title,
        description: issue.description,
        status: 'open',
        issue_link: undefined,
        repo_id: result.id })
    }).save();
  })
  .catch(err => {
    console.log('---Error saving issue to database---');
    res.status(500).send(err)
  });
}
