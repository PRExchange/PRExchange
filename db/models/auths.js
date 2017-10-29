const db = require('../');

constAuth = db.Model.extend({
  tableName: 'auths',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Auth', Auth);
