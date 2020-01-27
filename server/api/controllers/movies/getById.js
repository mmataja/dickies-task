const knex = require('../../db/connection');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await knex('movies').where({ id: id }).first();

    if (!movie) {
      res.status(500).end();
    }

    return res.status(200).json(movie).end();
  } catch (error) {
    return res.status(500).end();
  }
};
