// Initializes the `usuarios` service on path `/usuarios`
const createService = require('feathers-nedb');
const createModel = require('../../models/usuarios.model');
const hooks = require('./usuarios.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'usuarios',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/usuarios', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('usuarios');

  service.hooks(hooks);
};
