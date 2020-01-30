const knex = require('../../db/connection');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(422).json({ message: 'Invalid ID provided' }).end();
    }

    const movie = await knex('movies').where({ id: id }).first();

    if (!movie) {
      return res.status(400).json({ message: 'Movie not available.' }).end();
    }
    
    const updatedMovie = await knex('movies').where('id', id).update({
      ...movie,
      ...req.body,
    });

    if (!updatedMovie) {
      return res.status(500).end();
    }

    return res.status(200).json(updatedMovie).end();
  } catch (error) {
    return res.status(500).json(error).end();
  }
}
