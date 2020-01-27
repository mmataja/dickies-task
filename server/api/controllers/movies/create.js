const knex = require('../../db/connection');

module.exports = async (req, res) => {
  try {
    const { name, genre, rating, explicit } = req.body;

    const createdMovie = await knex('movies').insert({
      name,
      genre,
      rating,
      explicit,
    });

    if (!createdMovie) {
      return res.status(500).json({ message: 'Something went wrong' }).end();
    }

    return res.status(200).json({ message: 'Movie successfully added.'}).end();
  } catch (error) {
    return res.status(500).end();
  }
};