const db = require('../');

const Issue = db.Model.extend({
  tableName: 'issues',
  repo: function() {
    return this.belongsTo('Repo')
  }
});

module.exports = db.model('Issue', Issue);
