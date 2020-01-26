
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'A', password: 'auncle', department: 'biology' },
        {id: 2, username: 'B', password: 'buncle', department: 'biology' },
        {id: 3, username: 'C', password: 'cuncle', department: 'economics' },
        {id: 4, username: 'D', password: 'duncle', department: 'biology' },
        {id: 5, username: 'E', password: 'euncle', department: 'biology' },
        {id: 6, username: 'F', password: 'funcle', department: 'economics' }
      ]);
    });
};