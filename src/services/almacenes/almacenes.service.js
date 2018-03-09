// Initializes the `almacenes` service on path `/almacenes`
const createService = require('feathers-nedb');
const createModel = require('../../models/almacenes.model');
const hooks = require('./almacenes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'almacenes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/almacenes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('almacenes');

  service.hooks(hooks);
};
