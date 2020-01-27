
exports.seed = (knex, Promise) => {
  return knex('movies').del()
  .then(() => {
    return knex('movies').insert({
      name: 'The Land Before Time',
      rating: 7,
      genre: 'Fantasy',
      explicit: false
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'Jurassic Park',
      genre: 'Science Fiction',
      rating: 9,
      explicit: true
    });
  })
  .then(() => {
    return knex('movies').insert({
      name: 'Ice Age: Dawn of the Dinosaurs',
      genre: 'Action/Romance',
      rating: 5,
      explicit: false
    });
  });
};
