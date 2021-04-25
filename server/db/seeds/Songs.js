exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('Songs').insert([
        {id: 1, name: 'Steven', song: `https://www.youtube.com/watch?v=pIvdikjHeHo`, score: 0},
        {id: 2, name: 'Stephen', song: `https://www.youtube.com/watch?v=y-N9iNr3wcU`, score: 0},
        {id: 3, name: 'Steve', song: `https://www.youtube.com/watch?v=4YLTvXA-wQ4`, score: 0}
      ]);
    });
};
