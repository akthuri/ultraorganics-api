// Initializes the `traslados` service on path `/traslados`
const createService = require('feathers-nedb');
const createModel = require('../../models/traslados.model');
const hooks = require('./traslados.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'traslados',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/traslados', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('traslados');

  service.hooks(hooks);
};
