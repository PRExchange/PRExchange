const models = require('../../models');

exports.seed = function(knex, Promise) {
  return models.Profile.where({ profileUrl: 'github.com' }).fetch()
    .then(profile => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
        displayName: 'Test',
        username: 'TestUser',
        profileUrl: 'github.com'
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then(profile => {
      return models.Auth.forge({
        type: 'github',
        oauth_id: '1',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })
    .catch(() => {
      console.log('WARNING: default profile already exists');
    });
};