const knex = require('../../db/connection');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(422).json({ message: 'Invalid ID provided' }).end();
    }

    const deletedMovie = await knex('movies').where('id', id).del();

    if (!deletedMovie) {
      return res.status(500).end();
    }

    return res.status(200).json(deletedMovie).end();
  } catch (error) {
    return res.status(500).json(error).end();
  }
}
