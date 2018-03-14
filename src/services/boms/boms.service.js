// Initializes the `boms` service on path `/boms`
const createService = require('./boms.class.js');
const hooks = require('./boms.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'boms',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/boms', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('boms');

  service.hooks(hooks);
};
