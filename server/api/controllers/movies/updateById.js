const knex = require('../../db/connection');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await knex('movies').where({ id: id }).first();

    if (!movie) {
      return res.status(500).json({ message: 'Movie not available.' }).end();
    }
    
    const updatedMovie = await knex('movies').where('id', id).update({
      ...movie,
      ...req.body,
    });

    return res.status(200).json(updatedMovie).end();
  } catch (error) {
    return res.status(500).json(error).end();
  }
}
