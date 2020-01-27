const { paths } = require('../../../../common/constants');

const { movies } = require('../../controllers');

module.exports = (router) => {
  router.get(paths.api.v1.MOVIES, movies.get);
  router.post(paths.api.v1.MOVIES, movies.create);

  router.get(paths.api.v1.MOVIES_ID, movies.getById);
  router.put(paths.api.v1.MOVIES_ID, movies.updateById);
  router.delete(paths.api.v1.MOVIES_ID, movies.removeById);
}
