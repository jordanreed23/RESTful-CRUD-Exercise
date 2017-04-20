var knex = require('./connection');

module.exports = {
  cartoons: {
    create: function(body) {
      return knex('cartoon')
        .insert(body)
        .returning('id')
    },
    get: function(id) {
      return knex('cartoon')
        .select()
        .where({id: id})
        .first()
    },
    list: function() {
      return knex('cartoon').select().orderBy('id');
    },
    update: function(body, id) {
      return knex('cartoon')
        .update(body)
        .where({id: id})
    },
    delete: function(id) {
      return knex('cartoon')
        .where({id: id})
        .del()
    },
  }
}
