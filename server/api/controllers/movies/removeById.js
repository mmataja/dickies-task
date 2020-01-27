const knex = require('../../db/connection');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMovie = await knex('movies').where('id', id).del();

    console.log("DELETED MOVIE", deletedMovie);

    return res.status(200).json(deletedMovie).end();
  } catch (error) {
    return res.status(500).json(error).end();
  }
}
