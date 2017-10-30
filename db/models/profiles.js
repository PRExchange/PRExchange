const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    return this.hasMany('Auth');
  },
  repos: function() {
    return this.hasMany('Repo', 'profile_id');
  }
});

module.exports = db.model('Profile', Profile);
