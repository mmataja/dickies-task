const knex = require('../../db/connection');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(422).json({ message: 'Invalid ID provided' }).end();
    }

    const movie = await knex('movies').where({ id: id }).first();

    if (!movie) {
      res.status(500).end();
    }

    return res.status(200).json(movie).end();
  } catch (error) {
    logger.error(error);
    return res.status(500).end();
  }
};
