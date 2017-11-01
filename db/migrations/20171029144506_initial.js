
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', table => {
      table.increments('id').unsigned().primary();
      table.string('displayName', 100).nullable();
      table.string('username', 100).nullable();
      table.string('profileUrl', 100).nullable();
      table.integer('github_id').nullable().unique();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('auths', table => {
      table.increments('id').unsigned().primary();
      table.string('type', 6).notNullable();
      table.string('oauth_id', 100).nullable();
      table.integer('profile_id').references('id').inTable('profiles').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('repos', table => {
      table.increments('id').unsigned().primary();
      table.string('title', 100).nullable();
      table.string('github_link', 100).nullable();
      table.integer('profile_id').references('id').inTable('profiles').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('issues', table => {
      table.increments('id').unsigned().primary();
      table.string('title', 100).nullable();
      table.string('description', 100).nullable();
      table.string('status', 6).defaultTo('open');
      table.string('issue_link', 100).nullable();
      table.integer('repo_id').references('id').inTable('repos').onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('issues'),
    knex.schema.dropTable('repos'),
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('profiles')
  ]);
};
