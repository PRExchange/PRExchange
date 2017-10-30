const knex = require('knex')(require('../../knexfile'));

exports.rollbackMigrate = done => {
  knex.migrate.rollback()
    .then(() => {
      return knex.migrate.latest()
    })
    .then(() => {
      return knex.seed.run()
    })
    .then(() => {
      done();
    })
    .catch(err => {
      console.log(err, 'Error in migration');
      done();
    });
};

exports.rollback = done => {
  knex.migrate.rollback()
    .then(() => {
      done();
    })
    .catch(err => {
      console.log(err, 'Error in migration afterEach');
      done();
    });
};
