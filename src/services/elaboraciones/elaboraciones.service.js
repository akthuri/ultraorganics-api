// Initializes the `elaboraciones` service on path `/elaboraciones`
const createService = require('feathers-nedb');
const createModel = require('../../models/elaboraciones.model');
const hooks = require('./elaboraciones.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'elaboraciones',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/elaboraciones', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('elaboraciones');

  service.hooks(hooks);
};
