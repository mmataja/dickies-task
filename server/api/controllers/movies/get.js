const knex = require('../../db/connection');

module.exports = async (req, res) => {
  knex.raw('select * from movies').then( (movies) => {
    console.log(movies);
    res.send(movies);
  })
}