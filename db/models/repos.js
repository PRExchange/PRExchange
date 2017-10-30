const db = require('../');

const Repo = db.Model.extend({
  tableName: 'repos',
  owner: function() {
    return this.belongsTo('Profile', 'owner_id');
  },
  issues: function() {
    return this.hasMany('Issue');
  }
});

module.exports = db.model('Repo', Repo);
