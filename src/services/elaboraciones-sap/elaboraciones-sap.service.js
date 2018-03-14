// Initializes the `elaboraciones-sap` service on path `/elaboraciones-sap`
const createService = require('./elaboraciones-sap.class.js');
const hooks = require('./elaboraciones-sap.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'elaboraciones-sap',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/elaboraciones-sap', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('elaboraciones-sap');

  service.hooks(hooks);
};
