const models = require('../../models');

exports.seed = function(knex, Promise) {
  return models.Profile.where({email: 'test@example.com'}).fetch()
    .then(profile => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
        first: 'Test',
        last: 'User',
        display: 'TestUser',
        email: 'test@example.com'
      }).save();
    })
    .then(profile => {
      return models.Repo.forge({
        title: 'MyExampleRepo',
        owner_id: profile.attributes.id,
        github_link: 'www.github.com'
      }).save();
    })
    .then(repo => {
      return models.Issue.forge({
        title: 'Issue 1',
        description: 'Example of an open requested issue',
        status: 'open',
        issue_link: undefined,
        repo_id: repo.attributes.id
      }).save();
    })
    .then(repo => {
      return models.Issue.forge({
        title: 'Issue 2',
        description: 'Example of a closed requested issue',
        status: 'closed',
        issue_link: 'www.github.com',
        repo_id: repo.attributes.id
      }).save();
    })
    .catch(err => {
      console.log(err, 'Error creating repo seed');
    });
};
