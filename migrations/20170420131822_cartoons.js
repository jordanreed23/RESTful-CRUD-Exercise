
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cartoon', function(table) {
    table.increments();
    table.string('title');
    table.integer('year');
    table.string('network');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cartoon'); 
};
