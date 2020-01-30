const knex = require('../../db/connection');

module.exports = async (req, res) => {
  try {
    const { name, genre, rating, explicit } = req.body;

    if (!name || !genre || !rating || !explicit) {
      return res.status(422).json({ message: 'Invalid data provided.' }).end();
    }

    const createdMovie = await knex('movies').insert({
      name,
      genre,
      rating,
      explicit,
    });

    if (!createdMovie) {
      return res.status(500).end();
    }

    return res.status(200).json({ message: 'Movie successfully added.' }).end();
    
  } catch (error) {
    return res.status(500).json(error).end();
  }
};