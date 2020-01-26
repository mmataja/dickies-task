const knex = require('../../db/connection');

module.exports = async (req, res) => {
  try {
    const movies = await knex.select().from('movies');

    res.status(200).json(movies).end();
  } catch (error) {
    return res.status(500).end();
  }
};
