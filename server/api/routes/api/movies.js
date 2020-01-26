const { paths } = require('../../../../common/constants');

const { movies } = require('../../controllers');

module.exports = (router) => {
  router.get(paths.api.v1.MOVIES, movies.get);
}