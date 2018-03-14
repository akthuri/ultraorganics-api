// Initializes the `existencias` service on path `/existencias`
const createService = require('./existencias.class.js');
const hooks = require('./existencias.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'existencias',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/existencias', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('existencias');

  service.hooks(hooks);
};
