const db = require('../');

const Repo = db.Model.extend({
  tableName: 'repos',
  profile: function() {
    return this.belongsTo('Profile', 'profile_id');
  },
  issues: function() {
    return this.hasMany('Issue');
  }
});

module.exports = db.model('Repo', Repo);
