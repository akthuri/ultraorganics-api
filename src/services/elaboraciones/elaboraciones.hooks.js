

const crearElaboracion = require('../../hooks/crear-elaboracion');

const updateElaboracion = require('../../hooks/update-elaboracion');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [crearElaboracion()],
    update: [updateElaboracion()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
