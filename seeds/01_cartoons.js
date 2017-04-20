
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cartoon').del()
    .then(function () {
      // Inserts seed entries
      return knex('cartoon').insert([
        {id: 1, title: 'Bugs Bunny', year: 1969, network: 'Warner Brothers'},
        {id: 2, title: 'Teenage Mutant Ninja Turtles', year: 1989, network: 'Fox'},
        {id: 3, title: 'Samurai Jack', year: 2001, network: 'Cartoon Network'}
      ]);
    });
};
